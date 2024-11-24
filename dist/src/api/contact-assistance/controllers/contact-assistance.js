"use strict";
/**
 * contact-assistance controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::contact-assistance.contact-assistance', ({ strapi }) => ({
    async create(ctx) {
        const { request: { body, ip }, } = ctx;
        if ((body === null || body === void 0 ? void 0 : body.recaptcha) && ip) {
            const sharedService = strapi.service('api::shared.shared');
            const recaptchaResult = await sharedService.verifyRecaptcha(body === null || body === void 0 ? void 0 : body.recaptcha, ip);
            if (recaptchaResult === true) {
                try {
                    const result = await super.create(ctx);
                    const { id } = result.data;
                    const contact = await strapi.entityService.findOne('api::contact-assistance.contact-assistance', id, {
                        fields: [
                            'name',
                            'surname',
                            'email',
                            'phone_number',
                            'text',
                            'type',
                        ],
                    });
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
                }
                catch (error) {
                    ctx.badRequest('Error', {
                        validation_error: 'Error during save assistance contact',
                    });
                }
            }
            else {
                ctx.badRequest('Error', {
                    recaptcha_error: recaptchaResult,
                });
            }
        }
        else {
            ctx.badRequest('Recaptcha is missing');
        }
    },
    async configuration(ctx) {
        const { locale } = ctx.query;
        const contactAssistanceService = strapi.service('api::contact-assistance.contact-assistance');
        if (locale) {
            return contactAssistanceService.configuration(locale);
        }
        else {
            ctx.badRequest('Missing locale');
        }
    },
}));
//# sourceMappingURL=contact-assistance.js.map