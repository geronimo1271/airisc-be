export default {
  routes: [
    {
      method: 'POST',
      path: '/promos/import',
      handler: 'promo.import',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
