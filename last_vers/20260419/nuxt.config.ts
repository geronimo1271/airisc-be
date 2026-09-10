import { locales, defaultLocale } from "./misc/locales";

export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          href: "/public/favicon.ico",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-icons",
    "nuxt-jsonld",
    "nuxt-primevue",
    "@vee-validate/nuxt",
    "nuxt-font-loader",
  ],

  fontLoader: {
    local: [
      {
        src: "/fonts/LivignoThin.otf",
        family: "Livigno",
        weight: "300",
      },
      {
        src: "/fonts/LivignoLight.otf",
        family: "Livigno",
        weight: "400",
      },
      {
        src: "/fonts/LivignoMedium.otf",
        family: "Livigno",
        weight: "500",
      },
      {
        src: "/fonts/LivignoBold.otf",
        family: "Livigno",
        weight: "700",
      },
    ],
  },

  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/bootstrap4-light-blue/theme.css",
  ],

  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },

  typescript: {
    shim: false,
  },

  i18n: {
    locales,
    defaultLocale,
    strategy: "prefix",
    lazy: true,
    langDir: "./lang",
    customRoutes: "config",
    compilation: {
      strictMessage: false,
    },
    pages: {
      "job-offers/index": {
        it: "/trova-lavoro-a-livigno",
        en: "/find-work-in-livigno",
      },
      "job-offers/[slug]": {
        it: "/trova-lavoro-a-livigno/[slug]",
        en: "/find-work-in-livigno/[slug]",
      },
      "living-in-livigno": {
        it: "/vivere-a-livigno",
        en: "/living-in-livigno",
      },
      "livigno-card/index": {
        it: "/livigno-card",
        en: "/livigno-card",
      },
      "livigno-card/promos-list": {
        it: "/livigno-card/vantaggi-offerti",
        en: "/livigno-card/promos-offered",
      },
      "contact-us": {
        it: "/contattaci",
        en: "/contact-us",
      },
    },
  },

  "nuxt-jsonld": {
    disableOptionsAPI: true,
  },

  primevue: {
    components: {
      prefix: "P",
      exclude: ["Editor", "Chart"],
    },
    directives: {
      include: ["ToastService"],
    },
  },

  image: {
    provider: "strapiV4",
    providers: {
      strapiV4: {
        provider: "~/misc/strapiV4-nuxtImage-provider",
        options: {
          baseURL: process.env.STRAPI_URL || "http://localhost:3000",
        },
      },
    },
  },

  compatibilityDate: "2024-08-20",
});