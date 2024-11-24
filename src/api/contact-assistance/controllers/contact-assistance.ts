/**
 * contact-assistance controller
 */

import { factories } from '@strapi/strapi';

interface RequestBody {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  text: string;
  type: string;
  recaptcha: string;
}

export default factories.createCoreController(
  'api::contact-assistance.contact-assistance',
  ({ strapi }) => ({
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
            const contact = await strapi.entityService.findOne(
              'api::contact-assistance.contact-assistance',
              id,
              {
                fields: [
                  'name',
                  'surname',
                  'email',
                  'phone_number',
                  'text',
                  'type',
                ],
              }
            );
            // try {
            //   // DOC: Admin email
            //   await sharedService.sendEmail(
            //     'info@venis.it',
            //     'info@venis.it',
            //     `${
            //       process.env.NODE_ENV === 'production' ? '' : '[STAGING] '
            //     }Richiesta di assistenza`,
            //     'admin/contact-assistance',
            //     { ...contact }
            //   );
            // } catch (error) {
            //   console.error('[SEND MAIL][CONTACT ASSISTANCE] Error = ', error);
            // }
            ctx.status = 201;
            ctx.body = {
              status: 201,
              message: 'Assistance contact created successfully',
            };
          } catch (error) {
            ctx.badRequest('Error', {
              validation_error: 'Error during save assistance contact',
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
      const contactAssistanceService = strapi.service(
        'api::contact-assistance.contact-assistance'
      ) as any;
      if (locale) {
        return contactAssistanceService.configuration(locale);
      } else {
        ctx.badRequest('Missing locale');
      }
    },
  })
);
