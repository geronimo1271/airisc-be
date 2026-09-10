"use strict";
/**
 * newsletter controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
function parseNewsletterPayload(body) {
    const raw = body === null || body === void 0 ? void 0 : body.data;
    if (typeof raw === 'string') {
        try {
            return JSON.parse(raw);
        }
        catch {
            return {};
        }
    }
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
        return raw;
    }
    return (body !== null && body !== void 0 ? body : {});
}
function resolveClientIp(ctx) {
    var _a, _b, _c;
    const direct = (_a = ctx.request) === null || _a === void 0 ? void 0 : _a.ip;
    if (direct) {
        return direct;
    }
    const xff = (_b = ctx.request) === null || _b === void 0 ? void 0 : _b.headers['x-forwarded-for'];
    if (typeof xff === 'string' && xff.length > 0) {
        return xff.split(',')[0].trim();
    }
    return (_c = ctx.socket) === null || _c === void 0 ? void 0 : _c.remoteAddress;
}
exports.default = strapi_1.factories.createCoreController('api::newsletter.newsletter', ({ strapi }) => ({
    async create(ctx) {
        const { request: { body }, } = ctx;
        const data = parseNewsletterPayload(body);
        const ip = resolveClientIp(ctx);
        const newsletterService = strapi.service('api::newsletter.newsletter');
        // if (body?.recaptcha && ip) {
        if (ip) {
            const sharedService = strapi.service('api::shared.shared');
            let recaptchaResult = await sharedService.verifyRecaptcha(body === null || body === void 0 ? void 0 : body.recaptcha, ip);
            recaptchaResult = true;
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
            ctx.badRequest('Impossibile determinare l’indirizzo IP del client (verifica proxy / X-Forwarded-For)');
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