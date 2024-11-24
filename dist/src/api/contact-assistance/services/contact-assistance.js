"use strict";
/**
 * contact-assistance service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const configuration_1 = require("./configuration");
exports.default = strapi_1.factories.createCoreService('api::contact-assistance.contact-assistance', ({ strapi }) => ({
    async configuration(locale) {
        const sharedService = strapi.service('api::shared.shared');
        return {
            contact_assistance_types: sharedService.getLabelValueListByLocale(configuration_1.contact_assistance_types, locale),
        };
    },
}));
//# sourceMappingURL=contact-assistance.js.map