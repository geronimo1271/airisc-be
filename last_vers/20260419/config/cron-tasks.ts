import { env } from '@strapi/utils';

export default {
  importPromos: {
    task: async ({ strapi }) => {
      const promoService = strapi.service('api::promo.promo');
      await promoService.import();
    },
    options: {
      rule: env('CRON_IMPORT_PROMOS') || '0 1 * * *',
    },
  },
};
