export default {
  routes: [
    {
      method: 'GET',
      path: '/job-offers/configuration',
      handler: 'job-offer.configuration',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/job-offers/search',
      handler: 'job-offer.search',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
