"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
const qrcode_1 = __importDefault(require("qrcode"));
exports.default = {
    getAppLinkQrCode: async (ctx, next) => {
        const baseUrl = new URL((0, utils_1.env)('BASE_URL'));
        const sharedService = strapi.service('api::shared.shared');
        const { appStoreLink, playStoreLink } = await sharedService.getAppStoreLinks();
        try {
            ctx.body = {
                qr_code: await qrcode_1.default.toDataURL(`${baseUrl.protocol}//${baseUrl.hostname}/api/shared/redirectAppStore`),
                app_store_link: appStoreLink,
                play_store_link: playStoreLink,
            };
        }
        catch (err) {
            ctx.body = err;
        }
    },
    redirectAppStore: async (ctx, next) => {
        console.log(`[shared controller] - [redirectAppStore] - start`);
        const sharedService = strapi.service('api::shared.shared');
        const { appStoreLink, playStoreLink } = await sharedService.getAppStoreLinks();
        if (!appStoreLink || !playStoreLink) {
            ctx.status = 400;
            ctx.body = {
                message: 'App Store link not found',
            };
            return;
        }
        // read user agent
        const ua = ctx.request.headers['user-agent'];
        // verify if user agent is an iPhone
        if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod')) {
            ctx.redirect(appStoreLink);
        }
        else if (ua.includes('Android')) {
            ctx.redirect(playStoreLink);
        }
        else {
            ctx.status = 400;
            ctx.body = {
                message: 'Unsupported user agent',
            };
        }
        console.log(`[shared controller] - [redirectAppStore] - end`);
    },
};
//# sourceMappingURL=shared.js.map