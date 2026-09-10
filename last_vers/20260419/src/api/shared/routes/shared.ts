export default {
  routes: [
    {
      method: 'GET',
      path: '/shared/appLinkQrCode',
      handler: 'shared.getAppLinkQrCode',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/shared/redirectAppStore',
      handler: 'shared.redirectAppStore',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
