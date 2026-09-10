export default {
  routes: [
    {
      method: 'GET',
      path: '/contact-assistances/configuration',
      handler: 'contact-assistance.configuration',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
