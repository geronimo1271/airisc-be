import { env } from '@strapi/utils';
import QRCode from 'qrcode';

export default {
  getAppLinkQrCode: async (ctx, next) => {
    const baseUrl: URL = new URL(env('BASE_URL'));
    const sharedService = strapi.service('api::shared.shared');
    const { appStoreLink, playStoreLink } =
      await sharedService.getAppStoreLinks();
    try {
      ctx.body = {
        qr_code: await QRCode.toDataURL(
          `${baseUrl.protocol}//${baseUrl.hostname}/api/shared/redirectAppStore`
        ),
        app_store_link: appStoreLink,
        play_store_link: playStoreLink,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
  redirectAppStore: async (ctx, next) => {
    console.log(`[shared controller] - [redirectAppStore] - start`);
    const sharedService = strapi.service('api::shared.shared');

    const { appStoreLink, playStoreLink } =
      await sharedService.getAppStoreLinks();

    if (!appStoreLink || !playStoreLink) {
      ctx.status = 400;
      ctx.body = {
        message: 'App Store link not found',
      };
      return;
    }

    // read user agent
    const ua = ctx.request.headers['user-agent'];
    // verify if user agent is an iPhone
    if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod')) {
      ctx.redirect(appStoreLink);
    } else if (ua.includes('Android')) {
      ctx.redirect(playStoreLink);
    } else {
      ctx.status = 400;
      ctx.body = {
        message: 'Unsupported user agent',
      };
    }
    console.log(`[shared controller] - [redirectAppStore] - end`);
  },
};
