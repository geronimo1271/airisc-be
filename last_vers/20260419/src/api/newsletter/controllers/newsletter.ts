/**
 * newsletter controller
 */

import { factories } from '@strapi/strapi';

import type { NewsletterUpsertBody } from '../services/newsletter';

interface RequestBody {
  data?:
    | string
    | {
        email?: string;
        news?: boolean;
        events?: boolean;
        monthly_conventions?: boolean;
        advices?: boolean;
        training_courses?: boolean;
        new_job_offers?: boolean;
        new_conventions?: boolean;
        locale?: string;
      };
  email?: string;
  news?: boolean;
  locale?: string;
  recaptcha?: string;
}

function parseNewsletterPayload(body: RequestBody): Record<string, unknown> {
  const raw = body?.data;
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
    return raw as Record<string, unknown>;
  }
  return (body ?? {}) as Record<string, unknown>;
}

function resolveClientIp(ctx: any): string | undefined {
  const direct = ctx.request?.ip;
  if (direct) {
    return direct;
  }
  const xff = ctx.request?.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff.length > 0) {
    return xff.split(',')[0].trim();
  }
  return ctx.socket?.remoteAddress;
}

export default factories.createCoreController(
  'api::newsletter.newsletter',
  ({ strapi }) => ({
    async create(ctx) {
      const {
        request: { body },
      }: { request: { body: RequestBody } } = ctx;
      const data = parseNewsletterPayload(body);
      const ip = resolveClientIp(ctx);
      const newsletterService = strapi.service('api::newsletter.newsletter');
      // if (body?.recaptcha && ip) {
      if (ip) {
        const sharedService = strapi.service('api::shared.shared');
        let recaptchaResult = await sharedService.verifyRecaptcha(
          body?.recaptcha,
          ip
        );
        recaptchaResult = true;
        if (recaptchaResult === true) {
          try {
            const newsletterObj = await newsletterService.upsert(
              data as NewsletterUpsertBody
            );
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
        ctx.badRequest(
          'Impossibile determinare l’indirizzo IP del client (verifica proxy / X-Forwarded-For)'
        );
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
