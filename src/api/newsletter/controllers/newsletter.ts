/**
 * newsletter controller
 */

import { factories } from '@strapi/strapi';

interface RequestBody {
  data: {
    email: string;
    news: boolean;
    events: boolean;
    monthly_conventions: boolean;
    advices: boolean;
    training_courses: boolean;
    new_job_offers: boolean;
    new_conventions: boolean;
  };
  recaptcha: string;
}

export default factories.createCoreController(
  'api::newsletter.newsletter',
  ({ strapi }) => ({
    async create(ctx) {
      const {
        request: { body, ip },
      }: { request: { body: RequestBody; ip: string } } = ctx;
      const data = JSON.parse(ctx.request.body.data);
      const newsletterService = strapi.service('api::newsletter.newsletter');
      if (body?.recaptcha && ip) {
        const sharedService = strapi.service('api::shared.shared');
        const recaptchaResult = await sharedService.verifyRecaptcha(
          body?.recaptcha,
          ip
        );
        if (recaptchaResult === true) {
          try {
            const newsletterObj = await newsletterService.upsert(data);
            const { id } = newsletterObj;
            // TODO: newsletter?
            const status = newsletterObj.created ? 201 : 200;
            ctx.body = {
              status,
              message:
                status === 201
                  ? 'Newsletter record created succesfully'
                  : 'Newsletter record updated succesfully',
              id,
            };
          } catch (error) {
            ctx.badRequest('Error', {
              validation_error: 'Error during newsletter save',
              validation_message: error.message,
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
      const newsletterService = strapi.service(
        'api::newsletter.newsletter'
      ) as any;
      if (locale) {
        return newsletterService.configuration(locale);
      } else {
        ctx.badRequest('Missing locale');
      }
    },
  })
);
