module.exports = {
  async beforeCreate(event) {
    if (event.params.data.name) {
      const { locale, name } = event.params.data;

      const sharedService = strapi.service('api::shared.shared');
      event.params.data.slug = await sharedService.generateSlug(
        'api::job-offer.job-offer',
        null,
        locale,
        name,
        'create'
      );
    }

    // DOC: delete redis keys with prefix job-offers-search
    try {
      const sharedService = strapi.service('api::shared.shared');
      const redis = sharedService.redisConfig();
      const keys = await redis.keys('job-offers-search:*');
      await redis.del(keys);
    } catch (error) {
      console.error(
        'Error while deleting redis keys with prefix job-offers-search',
        error.message
      );
    }
  },
  async beforeUpdate(event) {
    if (event.params.data.name) {
      const { id } = event.params.where;

      const sharedService = strapi.service('api::shared.shared');
      const locale = await sharedService.getLocaleFromEntity(
        'api::job-offer.job-offer',
        id
      );
      event.params.data.slug = await sharedService.generateSlug(
        'api::job-offer.job-offer',
        id,
        locale,
        event.params.data.name,
        'update'
      );
    }

    // DOC: delete redis keys with prefix job-offers-search
    try {
      const sharedService = strapi.service('api::shared.shared');
      const redis = sharedService.redisConfig();
      const keys = await redis.keys('job-offers-search:*');
      await redis.del(keys);
    } catch (error) {
      console.error(
        'Error while deleting redis keys with prefix job-offers-search',
        error.message
      );
    }
  },
};
