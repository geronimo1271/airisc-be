module.exports = {
  async beforeCreate(event) {
    if (event.params.data.title) {
      const { locale, title } = event.params.data;

      const sharedService = strapi.service('api::shared.shared');
      event.params.data.slug = await sharedService.generateSlug(
        'api::page.page',
        null,
        locale,
        title,
        'create'
      );
    }
  },
  async beforeUpdate(event) {
    if (event.params.data.title) {
      const { id } = event.params.where;

      const sharedService = strapi.service('api::shared.shared');
      const locale = await sharedService.getLocaleFromEntity(
        'api::page.page',
        id
      );
      event.params.data.slug = await sharedService.generateSlug(
        'api::page.page',
        id,
        locale,
        event.params.data.title,
        'update'
      );
    }
  },
};
