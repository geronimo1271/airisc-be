import type { Seo } from "@/types/api/commons/seo";

export const useStrapiSeo = (seo: ComputedRef<Seo | null | undefined>) => {
  const title = computed(() => seo.value?.metaTitle);
  const description = computed(() => seo.value?.metaDescription);

  const { getMediaCompleteUrl } = useStrapiMediaObject();

  // TODO: optimize image with modifiers
  const image = computed(() => getMediaCompleteUrl(seo.value?.metaImage));

  const imageAlt = computed(
    () => seo.value?.metaImage?.data?.attributes?.alternativeText,
  );

  const viewport = computed(() => seo.value?.metaViewport);
  const keywords = computed(() => seo.value?.keywords);
  const robots = computed(() => seo.value?.metaRobots);

  const createSocialData = (socialName: string) => {
    const data = seo.value?.metaSocial
      ? seo.value?.metaSocial.find(
          (social) => social?.socialNetwork === socialName,
        ) || ({} as Record<string, null>)
      : ({} as Record<string, null>);
    return {
      title: data?.title,
      description: data?.description,
      // TODO: optimize image with modifiers
      image: getMediaCompleteUrl(data?.image),
      imageAlt: data?.image?.data?.attributes?.alternativeText,
    };
  };

  const ogData = computed(() => {
    return createSocialData("Facebook");
  });

  const twitterData = computed(() => {
    return createSocialData("Twitter");
  });

  useSeoMeta({
    title: () => title.value || null,
    description: () => description.value,
    robots: () => robots.value,
    keywords: () => keywords.value,
    ...(viewport.value ? { viewport: () => viewport.value } : {}),

    // OgData
    ogTitle: () => ogData.value.title || title.value,
    ogDescription: () => ogData.value.description || description.value,
    ogImage: () => ogData.value.image || image.value,
    ogImageAlt: () => ogData.value.imageAlt || imageAlt.value,

    // TwitterData
    twitterTitle: () => twitterData.value.title || title.value,
    twitterDescription: () =>
      twitterData.value.description || description.value,
    twitterImage: () => twitterData.value.image || image.value,
    twitterImageAlt: () => twitterData.value.imageAlt || imageAlt.value,
  });

  const route = useRoute();
  const { locale } = useI18n();
  const alternateLocale = computed(() => (locale.value === "it" ? "en" : "it"));

  useHead({
    link: [
      {
        rel: "canonical",
        href: computed(() => seo.value?.canonicalURL + route.fullPath),
      },
      {
        rel: "alternate",
        href: computed(
          () => seo.value?.canonicalURL + route.fullPath,
        ).value.replace(`/${locale.value}`, `/${alternateLocale.value}`),
      },
    ],
  });

  // Jsonld / Structured Data
  // @ts-expect-error we don't validate data on CMS
  useJsonld(() => seo.value?.structuredData || null);
};
