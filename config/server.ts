import { env } from '@strapi/utils';
import cronTasks from './cron-tasks';

export default () => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3002),
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
  url: env('HOSTNAME', 'http://localhost:3002'),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
