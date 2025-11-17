
import contentTypeBuilder from '@strapi/plugin-content-type-builder/strapi-admin';
import email from '@strapi/plugin-email/strapi-admin';
import upload from '@strapi/plugin-upload/strapi-admin';
import duplicateButton from 'strapi-plugin-duplicate-button/strapi-admin';
import menus from 'strapi-plugin-menus/strapi-admin';
import previewButton from 'strapi-plugin-preview-button/strapi-admin';
import seo from '@strapi/plugin-seo/strapi-admin';
import ckeditor from '@ckeditor/strapi-plugin-ckeditor/strapi-admin';
import documentation from '@strapi/plugin-documentation/strapi-admin';
import i18N from '@strapi/plugin-i18n/strapi-admin';
import usersPermissions from '@strapi/plugin-users-permissions/strapi-admin';
import multiSelect from 'strapi-plugin-multi-select/strapi-admin';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'duplicate-button': duplicateButton,
  'menus': menus,
  'preview-button': previewButton,
  'seo': seo,
  'ckeditor': ckeditor,
  'documentation': documentation,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'multi-select': multiSelect,
};

export default plugins;
