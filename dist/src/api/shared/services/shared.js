"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * shared service
 */
const slugify_1 = __importDefault(require("@sindresorhus/slugify"));
const axios_1 = __importDefault(require("axios"));
const ioredis_1 = __importDefault(require("ioredis"));
const utils_1 = require("@strapi/utils");
exports.default = () => ({
    async verifyRecaptcha(recaptcha, ip) {
        const { data } = await axios_1.default.get(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptcha}&remoteip=${ip}`);
        return (data === null || data === void 0 ? void 0 : data.success) ? true : data['error-codes'];
    },
    async getAvailableLocales() {
        const locales = await strapi.plugins.i18n.services.locales.find();
        return locales;
    },
    getLabelValueListByLocale(values, locale) {
        return values.map(({ value, label }) => ({ value, label: label[locale] }));
    },
    async getLocaleFromEntity(model, id) {
        const item = (await strapi.entityService.findOne(model, id, {
            fields: ['locale'],
        }));
        return (item === null || item === void 0 ? void 0 : item.locale) || 'it';
    },
    async generateSlug(model, id, locale, slugField, type = 'create') {
        const filters = { locale: locale };
        if (type === 'update') {
            filters['id'] = { $ne: id };
        }
        const items = (await strapi.entityService.findMany(model, {
            fields: ['slug'],
            filters: filters,
        }));
        let slug = (0, slugify_1.default)(slugField, {
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
        const redisConf = strapi.config.get('plugin.redis.connections.default');
        return new ioredis_1.default(redisConf.connection);
    },
    getReadableString(word) {
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
        }
        else {
            const apiUrl = (0, utils_1.env)('APP_LINKS_API_URL');
            const apiResponse = await axios_1.default.get(apiUrl);
            if (apiResponse.status === 200) {
                const siteObj = apiResponse.data.site;
                appStoreLink = siteObj[`app_store`];
                playStoreLink = siteObj[`google_play`];
                // cache app links
                await redis.set(cacheKey, JSON.stringify({
                    app_store: appStoreLink,
                    google_play: playStoreLink,
                }), 'EX', 28800);
            }
        }
        return {
            appStoreLink,
            playStoreLink,
        };
    },
});
//# sourceMappingURL=shared.js.map