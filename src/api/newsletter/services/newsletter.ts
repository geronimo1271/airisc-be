/**
 * newsletter service
 */

import { factories } from '@strapi/strapi';
import options from './configuration';

export default factories.createCoreService(
  'api::newsletter.newsletter',
  ({ strapi }) => ({
    async upsert(body) {
      const {
        email,
        news,
        events,
        monthly_conventions,
        advices,
        training_courses,
        new_job_offers,
        new_conventions,
      } = body;
      const exists = await strapi.db
        .query('api::newsletter.newsletter')
        .findOne({
          where: { email: email },
        });
      if (exists) {
        // Upsert if exists
        const newsletterObj = await strapi.entityService.update(
          'api::newsletter.newsletter',
          exists.id,
          {
            data: {
              news: news == null ? exists.news : news,
              events: events == null ? exists.events : events,
              monthly_conventions:
                monthly_conventions == null
                  ? exists.monthly_conventions
                  : monthly_conventions,
              advices: advices == null ? exists.advices : advices,
              training_courses:
                training_courses == null
                  ? exists.training_courses
                  : training_courses,
              new_job_offers:
                new_job_offers == null ? exists.new_job_offers : new_job_offers,
              new_conventions:
                new_conventions == null
                  ? exists.new_conventions
                  : new_conventions,
            },
          }
        );
        return {
          id: newsletterObj.id,
          created: false,
        };
      }
      const newsletterObj = await strapi.entityService.create(
        'api::newsletter.newsletter',
        {
          data: {
            email,
            news,
            events,
            monthly_conventions,
            advices,
            training_courses,
            new_job_offers,
            new_conventions,
          },
        }
      );
      return {
        id: newsletterObj.id,
        created: true,
      };
    },
    async configuration(locale: string) {
      const sharedService = strapi.service('api::shared.shared');
      return {
        options: sharedService.getLabelValueListByLocale(options, locale),
      };
    },
  })
);
