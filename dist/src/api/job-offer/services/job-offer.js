"use strict";
/**
 * job-offer service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const configuration_1 = require("./configuration");
exports.default = strapi_1.factories.createCoreService('api::job-offer.job-offer', ({ strapi }) => ({
    async configuration(locale) {
        const sharedService = strapi.service('api::shared.shared');
        const jobSectors = await strapi.db
            .query('api::job-sector.job-sector')
            .findMany({
            where: {
                locale,
            },
        });
        return {
            languages: sharedService.getLabelValueListByLocale(configuration_1.languages, locale),
            contract_type: sharedService.getLabelValueListByLocale(configuration_1.contract_type, locale),
            experience_level: sharedService.getLabelValueListByLocale(configuration_1.experience_level, locale),
            education_level: sharedService.getLabelValueListByLocale(configuration_1.education_level, locale),
            benefits: sharedService.getLabelValueListByLocale(configuration_1.benefits, locale),
            work_environment: sharedService.getLabelValueListByLocale(configuration_1.work_environment, locale),
            work_sector: jobSectors.map((sector) => ({
                value: sector.id,
                label: sector.name,
            })),
        };
    },
}));
//# sourceMappingURL=job-offer.js.map