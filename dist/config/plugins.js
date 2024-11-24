"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
exports.default = () => ({
    'duplicate-button': true,
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: (0, utils_1.env)('SMTP_HOST'),
                port: (0, utils_1.env)('SMTP_PORT', 587),
                ignoreTLS: (0, utils_1.env)('NODE_ENV') === 'development',
                tls: {
                    secure: (0, utils_1.env)('NODE_ENV') !== 'development',
                    ignoreTLS: (0, utils_1.env)('NODE_ENV') === 'development',
                    rejectUnauthorized: false,
                },
                auth: {
                    user: (0, utils_1.env)('SMTP_USERNAME'),
                    pass: (0, utils_1.env)('SMTP_PASSWORD'),
                },
            },
            settings: {
                defaultFrom: 'info@airisc.org',
                defaultReplyTo: 'info@airisc.org',
            },
        },
    },
    'fuzzy-search': {
        enabled: false,
        config: {
            contentTypes: [],
        },
    },
    'local-image-sharp': {
        config: {
            cacheDir: '.image-cache',
        },
    },
    menus: {
        config: {
            maxDepth: 2,
        },
    },
    'preview-button': {
        config: {
            contentTypes: [],
        },
    },
    redis: {
        config: {
            connections: {
                default: {
                    connection: {
                        host: (0, utils_1.env)('REDIS_HOST'),
                        port: (0, utils_1.env)('REDIS_PORT'),
                        db: (0, utils_1.env)('REDIS_DB'),
                        keyPrefix: (0, utils_1.env)('REDIS_KEY_PREFIX'),
                    },
                    settings: {
                        debug: false,
                    },
                },
            },
        },
    },
    'rest-cache': {
        config: {
            provider: {
                name: 'redis',
                options: {
                    max: 32767,
                    connection: 'default',
                },
            },
            strategy: {
                keysPrefix: (0, utils_1.env)('REDIS_KEY_PREFIX'),
                contentTypes: ['staging', 'production'].includes((0, utils_1.env)('NODE_ENV'))
                    ? [
                        // Job offer
                        'api::job-offer.job-offer',
                        // Homepage
                        'api::homepage.homepage',
                        // Job Duty
                        'api::job-duty.job-duty',
                        // Job sector
                        'api::job-sector.job-sector',
                        // FAQ Page
                        'api::faq-page.faq-page',
                        // FAQ
                        'api::faq.faq',
                        // FAQ - Category
                        'api::faq-category.faq-category',
                        // Job Finder page
                        'api::job-finder-page.job-finder-page',
                        // Pages
                        'api::page.page',
                        // Testimonials
                        'api::testimonial.testimonial',
                        // Footer
                        'api::footer.footer',
                    ]
                    : [],
            },
        },
    },
    sentry: {
        enabled: ['staging', 'production'].includes((0, utils_1.env)('NODE_ENV')),
        config: {
            dsn: (0, utils_1.env)('SENTRY_DSN'),
            sendMetadata: true,
        },
    },
    seo: {
        enabled: true,
    },
});
//# sourceMappingURL=plugins.js.map