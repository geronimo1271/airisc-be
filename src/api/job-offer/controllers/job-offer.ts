/**
 * job-offer controller
 */

import { factories } from '@strapi/strapi';
import Fuse from 'fuse.js';
import { env } from '@strapi/utils';
import crypto from 'crypto';

interface RequestBody {
  recaptcha: string;
}

export default factories.createCoreController(
  'api::job-offer.job-offer',
  ({ strapi }) => ({
    async search(ctx) {
      const sharedService = strapi.service('api::shared.shared');
      const redis = sharedService.redisConfig();

      const { q: searchTerm, pagination, ...otherParams } = ctx.query;
      const hash = crypto.createHash('sha256');
      hash.update(`${searchTerm || ''}-${JSON.stringify(otherParams)}`);
      const redisKey = `job-offers-search:${hash.digest('hex')}`;
      let cachedJobOffers = await redis.get(redisKey);

      const paginationStart = parseInt(pagination?.start || 0);
      const paginationLimit = parseInt(pagination?.limit || 9);
      if (cachedJobOffers) {
        console.log('Using cached job offers');
        const parsedOffers = JSON.parse(cachedJobOffers);
        const jobOffers = parsedOffers.slice(
          paginationStart,
          paginationStart + paginationLimit
        );
        ctx.status = 200;
        ctx.body = {
          status: 200,
          data: jobOffers,
          meta: {
            pagination: {
              start: paginationStart,
              limit: paginationLimit,
              count: parsedOffers.length,
            },
          },
        };
        return;
      }
      const filteredRecords = await strapi.entityService.findMany(
        'api::job-offer.job-offer',
        {
          ...otherParams,
          populate: [
            ...(ctx.query.populate || []),
            'image',
            'work_duties',
            'work_sector',
          ],
        }
      );
      const jobOffers = this.transformResponse(filteredRecords)['data'];

      const fuse = new Fuse(jobOffers, {
        keys: [
          'attributes.name',
          'attributes.work_duties.data.attributes.name',
          'attributes.work_sector.data.attributes.name',
        ],
        ignoreLocation: true,
        includeMatches: env('NODE_ENV') === 'development',
        threshold: 0.4,
      });
      const recordsToReturn =
        searchTerm && searchTerm.length > 0
          ? fuse.search(searchTerm).map(({ item }: { item: any }) => {
              return { ...item };
            })
          : jobOffers;

      // cache the results
      await redis.set(redisKey, JSON.stringify(recordsToReturn), 'EX', 3600);
      const slicedRecords = recordsToReturn.slice(
        paginationStart,
        paginationStart + paginationLimit
      );
      ctx.status = 200;
      ctx.body = {
        status: 200,
        data: slicedRecords,
        meta: {
          pagination: {
            start: paginationStart,
            limit: paginationLimit,
            count: recordsToReturn.length,
          },
        },
      };
    },
    async create(ctx) {
      const {
        request: { body, ip },
      }: { request: { body: RequestBody; ip: string } } = ctx;
      if (body?.recaptcha && ip) {
        const sharedService = strapi.service('api::shared.shared');
        const recaptchaResult = await sharedService.verifyRecaptcha(
          body?.recaptcha,
          ip
        );
        if (recaptchaResult === true) {
          try {
            const result = await super.create(ctx);
            const { id } = result.data;

            ctx.status = 201;
            ctx.body = {
              status: 201,
              message: `Job offer record created succesfully with id '${id}'`,
              id,
            };
          } catch (error) {
            ctx.badRequest('Error', {
              validation_error: 'Error during save Job offer',
              validation_message: error.message,
              validation_details: error.details,
            });
          }
        } else {
          ctx.badRequest('Error', {
            recaptcha_error: recaptchaResult,
          });
        }
      } else {
        ctx.badRequest('Recaptcha is missing');
      }
    },
    async configuration(ctx) {
      const { locale } = ctx.query;
      const jobOffersService = strapi.service(
        'api::job-offer.job-offer'
      ) as any;
      if (locale) {
        return jobOffersService.configuration(locale);
      } else {
        ctx.badRequest('Missing locale');
      }
    },
  })
);
