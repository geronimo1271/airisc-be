import { env } from '@strapi/utils';

export default () => ({
  'duplicate-button': true,
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT', 587),
        ignoreTLS: env('NODE_ENV') === 'development',
        tls: {
          secure: env('NODE_ENV') !== 'development',
          ignoreTLS: env('NODE_ENV') === 'development',
          rejectUnauthorized: false,
        },
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
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
            host: env('REDIS_HOST'),
            port: env('REDIS_PORT'),
            db: env('REDIS_DB'),
            keyPrefix: env('REDIS_KEY_PREFIX'),
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
        keysPrefix: env('REDIS_KEY_PREFIX'),
        contentTypes: ['staging', 'production'].includes(env('NODE_ENV'))
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
    enabled: ['staging', 'production'].includes(env('NODE_ENV')),
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
    },
  },
  seo: {
    enabled: true,
  },
});
