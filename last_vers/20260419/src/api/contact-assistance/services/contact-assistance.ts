/**
 * contact-assistance service
 */

import { factories } from '@strapi/strapi';
import { contact_assistance_types } from './configuration';

export default factories.createCoreService(
  'api::contact-assistance.contact-assistance',
  ({ strapi }) => ({
    async configuration(locale: string) {
      const sharedService = strapi.service('api::shared.shared');
      return {
        contact_assistance_types: sharedService.getLabelValueListByLocale(
          contact_assistance_types,
          locale
        ),
      };
    },
  })
);
