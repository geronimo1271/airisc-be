// Based on https://github.com/nuxt/image/blob/main/src/runtime/providers/strapi.ts

import type { ProviderGetImage } from "@nuxt/image";

export const getImage: ProviderGetImage = (
  src,
  { modifiers, baseURL = "http://localhost:3000/uploads" } = {},
) => {
  const { breakpoint = "", sharp = {} } = modifiers || {};

  const query = new URLSearchParams(sharp);

  let path = src;

  if (breakpoint) {
    path = src.replace(/\/uploads\/(.*)$/gim, `/uploads/${breakpoint}_$1`);
  }

  const url = new URL(path, baseURL);

  url.search = query.toString();

  return {
    url: url.href,
    // url: withBase(`${breakpoint}_${withoutLeadingSlash(src)}`, baseURL)
  };
};

export const validateDomains = true;
