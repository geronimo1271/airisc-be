"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
exports.default = {
    importPromos: {
        task: async ({ strapi }) => {
            const promoService = strapi.service('api::promo.promo');
            await promoService.import();
        },
        options: {
            rule: (0, utils_1.env)('CRON_IMPORT_PROMOS') || '0 1 * * *',
        },
    },
};
//# sourceMappingURL=cron-tasks.js.map