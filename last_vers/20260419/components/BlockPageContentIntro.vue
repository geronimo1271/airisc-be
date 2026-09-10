<template>
  <section class="my-16 px-4 lg:my-24 lg:px-8">
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div class="col-span-12">
        <div v-if="title || description" class="flex flex-col items-start">
          <h1 v-if="title" class="w-full max-w-[900px] text-left">
            {{ title }}
          </h1>
          <div
            v-if="description"
            class="text-wrapper my-6 max-w-[900px] text-left font-medium lg:text-m-3"
            v-html="description"
          />
          <div class="w-full lg:pt-6" :class="imageClasses">
            <div
              v-if="use_image"
              class="relative max-h-[373px] overflow-hidden rounded-xl lg:max-h-[673px]"
            >
              <template v-if="images">
                <div
                  v-if="images?.data.length > 1"
                  class="hidden grid-cols-2 gap-4 lg:grid"
                >
                  <div
                    v-for="(img, index) in images.data"
                    :key="`text-images-${index}`"
                    class="page-text-image"
                    :class="{
                      'col-span-1': index === 0,
                      'row-span-2': index === 2,
                      'row-start-2': index === 1,
                    }"
                  >
                    {{ img.attributes.mime }}**
                    <nuxt-img
                      v-if="img.attributes.mime.substring(0, 5) === 'image'"
                      format="webp"
                      :src="getMediaCompleteUrl(img.attributes.url)"
                      alt=""
                      class="h-auto w-full rounded-xl"
                    />
                  </div>
                </div>

                <template v-else>
                  <nuxt-img
                    format="webp"
                    :src="getMediaCompleteUrl(images.data[0].attributes.url)"
                    class="h-auto w-full rounded-xl"
                    alt=""
                  />
                </template>
              </template>
            </div>
          </div>
          <div v-if="link?.cta_label && link?.cta_link" class="mt-3">
            <NuxtLink
              :to="useCtaLink(link.cta_link)"
              :target="useCtaTarget(link.cta_target)"
              :class="
                link.background_color === 'blu'
                  ? 'btn-primary'
                  : 'btn-secondary'
              "
            >
              {{ link.cta_label }}
            </NuxtLink>
          </div>
          <div class="w-full lg:w-[60%] lg:pt-6">
            <div
              v-if="use_pdf"
              class="relative max-h-[373px] overflow-hidden rounded-xl lg:max-h-[673px]"
            >
              <template v-if="images">
                <div
                  v-for="(pdf, index) in images.data"
                  :key="`text-images-${index}`"
                  class="page-text-image"
                >
                  <div
                    v-if="pdf.attributes.mime === 'application/pdf'"
                    class="mx-auto max-w-[1476px]"
                  >
                    <div
                      class="mb-4 grid grid-cols-12 gap-x-4 rounded-lg bg-guild-100 px-6 py-3 lg:gap-x-8"
                    >
                      <div
                        v-if="pdf.attributes.caption"
                        class="text-wrapper col-span-9 pt-1"
                        v-html="pdf.attributes.caption"
                      />
                      <div class="col-span-3 flex w-full justify-end">
                        <NuxtLink
                          :to="useCtaLink(pdf.attributes.url)"
                          target="_blank"
                          class="text-bold rounded border border-guildtext-700 px-3 py-1 pr-2"
                        >
                          <span class="font-semibold text-guildtext-700">
                            Apri il PDF
                          </span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { IProps } from "~/types/components/block-page-content-intro";

const {
  title,
  description,
  images,
  link,
  img_cards_placement,
  use_image,
  use_pdf,
} = defineProps<IProps>();
const { getMediaCompleteUrl } = useStrapiMediaObject();

const imageClasses = computed(() => {
  let baseClasses = "lg:w-[60%]";
  if (use_image) {
    if (images?.data) {
      if (images?.data.length > 1) {
        baseClasses = "lg:w-[55%]";
      }
    }
  }
  let orderClasses = "order-2 lg:order-1 lg:pr-6 lg:pl-44 font-medium mt-3";
  if (img_cards_placement && img_cards_placement === "sinistra") {
    orderClasses = "order-2 lg:pl-6 lg:pr-44 font-medium mt-3";
  }

  if (use_image) {
    if (images?.data) {
      if (images?.data.length > 1) {
        orderClasses = "order-2 lg:order-1 lg:pr-12";
        if (img_cards_placement && img_cards_placement === "sinistra") {
          orderClasses = "order-2 lg:pl-12";
        }
      }
    }
  }
  // eslint-disable-next-line no-console
  console.log("pdf ", JSON.stringify(images));
  if (use_pdf) {
    /* empty */
  }
  return [baseClasses, orderClasses];
});
</script>

<style scoped>
/* Abilita i bullet nelle liste del contenuto HTML */
::v-deep(.text-wrapper ul) {
  @apply list-disc pl-6;
}
::v-deep(.text-wrapper ol) {
  @apply list-decimal pl-6;
}
::v-deep(.text-wrapper li) {
  @apply list-item;
}
/* Spazio dopo i paragrafi (circa mezza riga) */
::v-deep(.text-wrapper p) {
  margin-bottom: 0.7em;
}
</style>
