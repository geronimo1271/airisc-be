export default {
  routes: [
    {
      method: 'GET',
      path: '/newsletters/configuration',
      handler: 'newsletter.configuration',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
