"use strict";
/**
 * promo controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::promo.promo', ({ strapi }) => ({
    async import(ctx) {
        const promosService = strapi.service('api::promo.promo');
        const upsertCount = await promosService.import();
        ctx.body = {
            message: `Imported ${upsertCount} promos`,
            count: upsertCount,
        };
        ctx.status = 200;
    },
}));
//# sourceMappingURL=promo.js.map