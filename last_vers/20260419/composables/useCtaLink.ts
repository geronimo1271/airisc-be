import { hasProtocol } from "ufo";

type CtaLink = string | undefined;

export const useCtaLink = (url: CtaLink): string | undefined => {
  if (!url) return undefined;
  else if (hasProtocol(url)) return url;

  const nuxt = useNuxtApp();
  const localePath = nuxt.$localePath;

  return localePath({
    path: url,
  });
};
