"use strict";
/**
 * newsletter controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::newsletter.newsletter', ({ strapi }) => ({
    async create(ctx) {
        const { request: { body, ip }, } = ctx;
        const data = JSON.parse(ctx.request.body.data);
        const newsletterService = strapi.service('api::newsletter.newsletter');
        if ((body === null || body === void 0 ? void 0 : body.recaptcha) && ip) {
            const sharedService = strapi.service('api::shared.shared');
            const recaptchaResult = await sharedService.verifyRecaptcha(body === null || body === void 0 ? void 0 : body.recaptcha, ip);
            if (recaptchaResult === true) {
                try {
                    const newsletterObj = await newsletterService.upsert(data);
                    const { id } = newsletterObj;
                    // TODO: newsletter?
                    const status = newsletterObj.created ? 201 : 200;
                    ctx.body = {
                        status,
                        message: status === 201
                            ? 'Newsletter record created succesfully'
                            : 'Newsletter record updated succesfully',
                        id,
                    };
                }
                catch (error) {
                    ctx.badRequest('Error', {
                        validation_error: 'Error during newsletter save',
                        validation_message: error.message,
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
        const newsletterService = strapi.service('api::newsletter.newsletter');
        if (locale) {
            return newsletterService.configuration(locale);
        }
        else {
            ctx.badRequest('Missing locale');
        }
    },
}));
//# sourceMappingURL=newsletter.js.map