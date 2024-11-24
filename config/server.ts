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
  url: env('HOSTNAME', 'http://localhost:1337'),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
