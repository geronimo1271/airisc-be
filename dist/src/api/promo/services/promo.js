"use strict";
/**
 * promo service
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const axios_1 = __importDefault(require("axios"));
/** Evita ERR_INVALID_URL se la variabile manca o non è un URL assoluto (cron / .env). */
function readPromoApiUrl(envKey) {
    const raw = process.env[envKey];
    if (raw == null || String(raw).trim() === '') {
        return null;
    }
    try {
        return new URL(String(raw).trim());
    }
    catch {
        console.warn(`[promo service] ${envKey} non è un URL valido (valore ignorato)`);
        return null;
    }
}
exports.default = strapi_1.factories.createCoreService('api::promo.promo', ({ strapi }) => ({
    async import() {
        try {
            console.log(`[promo service] - Importing promos - start`);
            await upsertPromoCategories(strapi);
            await upsertPromoTypologies(strapi);
            const upsertPromosCount = await upsertPromos(strapi);
            console.log(`[promo service] - Importing promos - end`);
            return upsertPromosCount;
        }
        catch (error) {
            console.error('[promo service] Import fallito:', error);
            return 0;
        }
    },
}));
async function upsertPromoCategories(strapi) {
    console.log(`[promo service] - [upsertPromoCategories] - start`);
    const baseUrl = readPromoApiUrl('PROMO_CATEGORIES_API_URL');
    if (!baseUrl) {
        console.warn('[promo service] [upsertPromoCategories] skipped: imposta PROMO_CATEGORIES_API_URL nel .env (URL assoluto)');
        return;
    }
    const sharedService = strapi.service('api::shared.shared');
    const locales = ['en', 'it', 'de'];
    const categoriesMap = {};
    const subCategoriesMap = {};
    for (const locale of locales) {
        const apiUrl = new URL(baseUrl.href);
        apiUrl.searchParams.append('locale', locale);
        const categoriesResponse = await axios_1.default.get(apiUrl.toString());
        if (categoriesResponse.status === 200) {
            const categories = categoriesResponse.data.categories;
            for (const category of categories) {
                const subCategoriesIdList = [];
                for (const subcategory of category.subcategories) {
                    if (!subCategoriesMap[subcategory.id]) {
                        subCategoriesMap[subcategory.id] = {
                            code: subcategory.code,
                            name: {
                                [locale]: sharedService.getReadableString(subcategory.name),
                            },
                        };
                    }
                    else {
                        subCategoriesMap[subcategory.id].name = {
                            ...subCategoriesMap[subcategory.id].name,
                            [locale]: sharedService.getReadableString(subcategory.name),
                        };
                    }
                    subCategoriesIdList.push(subcategory.id);
                }
                if (!categoriesMap[category.id]) {
                    categoriesMap[category.id] = {
                        code: category.code,
                        name: {
                            [locale]: sharedService.getReadableString(category.name),
                        },
                        subcategories: subCategoriesIdList,
                        marker: `${apiUrl.protocol}//${apiUrl.hostname}${category.marker.startsWith('/')
                            ? category.marker
                            : `/${category.marker}`}`,
                    };
                }
                else {
                    categoriesMap[category.id].name = {
                        ...categoriesMap[category.id].name,
                        [locale]: sharedService.getReadableString(category.name),
                    };
                }
            }
        }
    }
    for (const subcategory of Object.values(subCategoriesMap)) {
        const existingSubcategories = await strapi.db
            .query('api::promo-subcategory.promo-subcategory')
            .findOne({
            where: { code: subcategory.code },
            fields: ['id'],
        });
        if (!existingSubcategories) {
            await strapi.entityService.create('api::promo-subcategory.promo-subcategory', { data: subcategory });
        }
        else {
            await strapi.entityService.update('api::promo-subcategory.promo-subcategory', existingSubcategories.id, { data: subcategory });
        }
    }
    for (const category of Object.values(categoriesMap)) {
        const existingCategories = await strapi.db
            .query('api::promo-category.promo-category')
            .findOne({
            where: { code: category.code },
            fields: ['id'],
        });
        if (!existingCategories) {
            await strapi.entityService.create('api::promo-category.promo-category', {
                data: category,
            });
        }
        else {
            await strapi.entityService.update('api::promo-category.promo-category', existingCategories.id, { data: category });
        }
    }
    console.log(`[promo service] - [upsertPromoCategories] - end`);
}
async function upsertPromoTypologies(strapi) {
    console.log(`[promo service] - [upsertPromoTypologies] - start`);
    const baseUrl = readPromoApiUrl('PROMO_TYPOLOGIES_API_URL');
    if (!baseUrl) {
        console.warn('[promo service] [upsertPromoTypologies] skipped: imposta PROMO_TYPOLOGIES_API_URL nel .env (URL assoluto)');
        return;
    }
    const sharedService = strapi.service('api::shared.shared');
    const locales = ['en', 'it', 'de'];
    const typologiesMap = {};
    for (const locale of locales) {
        const apiUrl = new URL(baseUrl.href);
        apiUrl.searchParams.append('locale', locale);
        const typologiesResponse = await axios_1.default.get(apiUrl.toString());
        if (typologiesResponse.status === 200) {
            const typologies = typologiesResponse.data.typologies;
            for (const typology of typologies) {
                if (!typologiesMap[typology.id]) {
                    typologiesMap[typology.id] = {
                        code: typology.code,
                        name: {
                            [locale]: sharedService.getReadableString(typology.name),
                        },
                    };
                }
                else {
                    typologiesMap[typology.id].name = {
                        ...typologiesMap[typology.id].name,
                        [locale]: sharedService.getReadableString(typology.name),
                    };
                }
            }
        }
    }
    for (const typology of Object.values(typologiesMap)) {
        const existingTypologies = await strapi.db
            .query('api::promo-typology.promo-typology')
            .findOne({
            where: { code: typology.code },
            fields: ['id'],
        });
        if (!existingTypologies) {
            await strapi.entityService.create('api::promo-typology.promo-typology', {
                data: typology,
            });
        }
        else {
            await strapi.entityService.update('api::promo-typology.promo-typology', existingTypologies.id, { data: typology });
        }
    }
    console.log(`[promo service] - [upsertPromoTypologies] - end`);
}
async function upsertPromos(strapi) {
    var _a, _b;
    console.log(`[promo service] - [upsertPromos] - start`);
    const baseUrl = readPromoApiUrl('PROMO_PRODUCTS_API_URL');
    if (!baseUrl) {
        console.warn('[promo service] [upsertPromos] skipped: imposta PROMO_PRODUCTS_API_URL nel .env (URL assoluto)');
        return 0;
    }
    const sharedService = strapi.service('api::shared.shared');
    const locales = ['en', 'it', 'de'];
    const promosMap = {};
    for (const locale of locales) {
        const apiUrl = new URL(baseUrl.href);
        apiUrl.searchParams.append('locale', locale);
        const promosResponse = await axios_1.default.get(apiUrl.toString());
        if (promosResponse.status !== 200) {
            throw new Error('Failed to fetch promos');
        }
        const promos = promosResponse.data.products[`C-CREW`].services;
        for (const promo of promos) {
            if (!promosMap[promo.code]) {
                const categoryId = (_b = (await getPromoCategoryByCode((_a = promo.category) === null || _a === void 0 ? void 0 : _a.code, strapi))) === null || _b === void 0 ? void 0 : _b.id;
                const subcategoryIds = [];
                const typologyIds = [];
                const subcategories = promo.subcategories || [];
                const typologies = promo.typologies || [];
                for (const subcategory of subcategories) {
                    const subId = await getPromoSubcategoryByCode(subcategory.code, strapi);
                    if (subId) {
                        subcategoryIds.push(subId.id);
                    }
                }
                for (const typology of typologies) {
                    const typologyId = await getPromoTypologyByCode(typology.code, strapi);
                    if (typologyId) {
                        typologyIds.push(typologyId.id);
                    }
                }
                promosMap[promo.code] = {
                    code: promo.code,
                    name: {
                        [locale]: sharedService.getReadableString(promo.name),
                    },
                    address: promo.address,
                    category: categoryId,
                    subcategories: subcategoryIds,
                    typologies: typologyIds,
                };
            }
            else {
                promosMap[promo.code].name = {
                    ...promosMap[promo.code].name,
                    [locale]: sharedService.getReadableString(promo.name),
                };
            }
        }
    }
    for (const promo of Object.values(promosMap)) {
        const existingPromos = await strapi.db.query('api::promo.promo').findOne({
            where: { code: promo.code },
            fields: ['id'],
        });
        if (!existingPromos) {
            await strapi.entityService.create('api::promo.promo', {
                data: promo,
            });
        }
        else {
            await strapi.entityService.update('api::promo.promo', existingPromos.id, {
                data: promo,
            });
        }
    }
    console.log(`[promo service] -  [upsertPromos] Count: ${Object.keys(promosMap).length} - end`);
    return Object.keys(promosMap).length;
}
async function getPromoCategoryByCode(code, strapi) {
    if (!code)
        return null;
    return await strapi.db.query('api::promo-category.promo-category').findOne({
        where: { code: code },
        select: ['id'],
    });
}
async function getPromoSubcategoryByCode(code, strapi) {
    if (!code)
        return null;
    return await strapi.db
        .query('api::promo-subcategory.promo-subcategory')
        .findOne({
        where: { code: code },
        select: ['id'],
    });
}
async function getPromoTypologyByCode(code, strapi) {
    if (!code)
        return null;
    return await strapi.db.query('api::promo-typology.promo-typology').findOne({
        where: { code: code },
        select: ['id'],
    });
}
//# sourceMappingURL=promo.js.map