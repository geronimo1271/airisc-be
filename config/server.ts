import { env } from '@strapi/utils';
import cronTasks from './cron-tasks';

export default () => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    url: env('ADMIN_URL', '/admin'),  // Imposta l'URL dell'admin
    autoOpen: false,
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
