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
import type { Homepage } from "@/types/api/homepage";
import type { Locale } from "@/misc/locales";

import {
  blocks as blocksPopulate,
  seo as seoPopulate,
} from "@/misc/strapiPopulate";

const { locale } = useI18n();
const { findOne } = useStrapi();

const { data } = await useAsyncData("homepage", () => {
  return findOne<Homepage>("homepage", undefined, {
    populate: [...blocksPopulate, ...seoPopulate],
    locale: locale.value as Locale,
  });
});

const blocks = computed(() => data.value?.data.attributes.blocks ?? []);

const seo = computed(() => data.value?.data.attributes.seo);
useStrapiSeo(seo);
</script>
