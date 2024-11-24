/**
 * job-offer service
 */

import { factories } from '@strapi/strapi';
import {
  benefits,
  contract_type,
  education_level,
  experience_level,
  work_environment,
  languages,
} from './configuration';

export default factories.createCoreService(
  'api::job-offer.job-offer',
  ({ strapi }) => ({
    async configuration(locale: string) {
      const sharedService = strapi.service('api::shared.shared');
      const jobSectors = await strapi.db
        .query('api::job-sector.job-sector')
        .findMany({
          where: {
            locale,
          },
        });
      return {
        languages: sharedService.getLabelValueListByLocale(languages, locale),
        contract_type: sharedService.getLabelValueListByLocale(
          contract_type,
          locale
        ),
        experience_level: sharedService.getLabelValueListByLocale(
          experience_level,
          locale
        ),
        education_level: sharedService.getLabelValueListByLocale(
          education_level,
          locale
        ),
        benefits: sharedService.getLabelValueListByLocale(benefits, locale),
        work_environment: sharedService.getLabelValueListByLocale(
          work_environment,
          locale
        ),
        work_sector: jobSectors.map((sector) => ({
          value: sector.id,
          label: sector.name,
        })),
      };
    },
  })
);
