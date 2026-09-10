<template>
  <div>
    <DynamicBlock
      v-for="(block, index) in blocks"
      :key="`block-${index}`"
      :block-data="block"
    />
  </div>
</template>

<script setup lang="ts">
import type { Page } from "@/types/api/commons/page";
import type { Locale } from "@/misc/locales";

import {
  blocks as blocksPopulate,
  seo as seoPopulate,
} from "@/misc/strapiPopulate";

const { slug } = useRoute().params;
const { find } = useStrapi();

const { data: pagesData } = await useAsyncData(`page-${slug}`, () =>
  find<Page>("pages", {
    populate: [...blocksPopulate, ...seoPopulate],
    filters: { slug },
    locale: useI18n().locale.value as Locale,
  }),
);

const { throw404Error } = useThrowErrors();
if (pagesData.value?.data.length !== 1) {
  throw404Error();
}

const pageData = computed(() => pagesData.value?.data[0]);

const blocks = computed(() => {
  return pageData.value?.attributes.blocks ?? [];
});

const seo = computed(() => pageData.value?.attributes.seo);

useStrapiSeo(seo);
</script>
