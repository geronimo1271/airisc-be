/**
 * promo controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::promo.promo',
  ({ strapi }) => ({
    async import(ctx) {
      const promosService = strapi.service('api::promo.promo');
      const upsertCount = await promosService.import();
      ctx.body = {
        message: `Imported ${upsertCount} promos`,
        count: upsertCount,
      };
      ctx.status = 200;
    },
  })
);
