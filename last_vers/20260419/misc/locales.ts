const defaultLocales = [
  {
    code: "it",
    name: "Italiano",
    iso: "it",
    file: "it.js",
  },
  {
    code: "en",
    name: "English",
    iso: "en",
    file: "en.js",
  },
] as const;

export type Locale = (typeof defaultLocales)[number]["code"];

export const locales = [...defaultLocales];

export const localeCodes = locales.map((locale) => locale.code);

export const defaultLocale: Locale = "it";
