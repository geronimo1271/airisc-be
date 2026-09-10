/**
 * shared service
 */
import slugify from '@sindresorhus/slugify';
import { Common } from '@strapi/strapi';
import type {
  Fields,
  Filters,
} from '@strapi/types/dist/modules/entity-service/params';
import type {
  GetNonPopulatableKeys,
  GetValues,
} from '@strapi/types/dist/types/core/attributes';
import axios from 'axios';
import Redis from 'ioredis';
import { env } from '@strapi/utils';

type GetValuesWithLocale<ContentType = Common.UID.ContentType> = GetValues<
  Common.UID.ContentType,
  GetNonPopulatableKeys<Common.UID.ContentType>
> & { locale: string };
type AnyWithLocale = Fields.Any<Common.UID.ContentType> & { locale: string };
type AnyWithLocaleFilter = Filters.Any<Common.UID.Schema> & { locale: string };

export default () => ({
  async verifyRecaptcha(recaptcha: string, ip: string) {
    const { data } = await axios.get(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptcha}&remoteip=${ip}`
    );
    return data?.success ? true : data['error-codes'];
  },
  async getAvailableLocales() {
    const locales = await strapi.plugins.i18n.services.locales.find();
    return locales;
  },
  getLabelValueListByLocale(
    values: { value: string; label: any }[],
    locale: string
  ) {
    return values.map(({ value, label }) => ({ value, label: label[locale] }));
  },
  async getLocaleFromEntity(
    model: Common.UID.ContentType,
    id: number | null
  ): Promise<string> {
    const item = (await strapi.entityService.findOne(model, id, {
      fields: ['locale'] as unknown as AnyWithLocale,
    })) as GetValuesWithLocale;
    return item?.locale || 'it';
  },
  async generateSlug(
    model: Common.UID.ContentType,
    id: number,
    locale: string,
    slugField: string,
    type = 'create'
  ): Promise<string> {
    const filters = { locale: locale };
    if (type === 'update') {
      filters['id'] = { $ne: id };
    }
    const items = (await strapi.entityService.findMany(model, {
      fields: ['slug'] as unknown as AnyWithLocale,
      filters: filters as unknown as AnyWithLocaleFilter,
    })) as Array<any>;
    let slug = slugify(slugField, {
      lowercase: true,
    });
    const slugs = items.map((i) => i.slug);

    let newSlug = slug;
    if (slugs.includes(newSlug)) {
      let i = 1;
      while (slugs.includes(newSlug)) {
        newSlug = `${slug}-${i}`;
        i += 1;
      }
    }
    return newSlug;
  },
  redisConfig() {
    // FIXME: should be automatically typed
    type RedisConfig = {
      connection: {
        host: string;
        port: number;
        db: number;
        keyPrefix: string;
      };
      settings: {
        debug: boolean;
      };
    };

    const redisConf = strapi.config.get<RedisConfig>(
      'plugin.redis.connections.default'
    );
    return new Redis(redisConf.connection);
  },
  getReadableString(word: string) {
    // Replace underscores or hyphens with spaces
    let formattedWord = word.replace(/[_-]/g, ' ');

    // Capitalize each word
    formattedWord = formattedWord.replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });

    return formattedWord;
  },
  async getAppStoreLinks() {
    const cacheKey = 'livigno-crew-app-store-link';
    const redis = this.redisConfig();

    // check if qrCode exists in redis
    const cachedAppLinks = await redis.get(cacheKey);

    let appStoreLink = '';
    let playStoreLink = '';
    if (cachedAppLinks) {
      console.log('Using cached app links');
      const parsedLinks = JSON.parse(cachedAppLinks);
      appStoreLink = parsedLinks[`app_store`];
      playStoreLink = parsedLinks[`google_play`];
    } else {
      const apiUrl: string = env('APP_LINKS_API_URL');
      const apiResponse = await axios.get(apiUrl);

      if (apiResponse.status === 200) {
        const siteObj = apiResponse.data.site;
        appStoreLink = siteObj[`app_store`];
        playStoreLink = siteObj[`google_play`];

        // cache app links
        await redis.set(
          cacheKey,
          JSON.stringify({
            app_store: appStoreLink,
            google_play: playStoreLink,
          }),
          'EX',
          28800
        );
      }
    }

    return {
      appStoreLink,
      playStoreLink,
    };
  },
});
