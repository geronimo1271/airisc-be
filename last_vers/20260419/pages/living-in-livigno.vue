<template>
  <div aria-labelledby="livigno-card-page">
    <section class="my-20 px-4 lg:my-28 lg:px-8">
      <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
        <PageHead
          :title="pageData?.data.attributes.title"
          title-id="livigno-card-page"
          :description="pageData?.data.attributes.text"
        />
      </div>
    </section>

    <DynamicBlock
      v-for="(block, index) in blocks"
      :key="`block-${index}`"
      :block-data="block"
    />
  </div>
</template>

<script setup lang="ts">
import type { Locale } from "~/misc/locales";
import type { ILivingInLivignoPage } from "~/types/api/living-in-livigno-page";
import {
  blocks as blocksPopulate,
  seo as seoPopulate,
} from "@/misc/strapiPopulate";

const { findOne } = useStrapi();
const { locale } = useI18n();

const { data: pageData } = await useAsyncData("live-livigno-page", () => {
  return findOne<ILivingInLivignoPage>("live-livigno-page", undefined, {
    populate: [...blocksPopulate, ...seoPopulate],
    locale: locale.value as Locale,
  });
});

const blocks = computed(() => pageData.value?.data.attributes.blocks ?? []);

const seo = computed(() => pageData.value?.data.attributes.seo);
useStrapiSeo(seo);
</script>
