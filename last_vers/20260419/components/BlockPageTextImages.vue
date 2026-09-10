<template>
  <section
    class="my-12 lg:my-20"
    :class="
      background_color === 'lavanda'
        ? 'bg-blue-100 p-5 lg:px-8 lg:py-20'
        : 'px-4 lg:px-8'
    "
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <section class="col-span-12 flex flex-col lg:flex-row">
        <div
          class="w-full"
          :class="[
            images && images.data.length > 1 ? 'lg:w-[45%]' : 'lg:w-[40%]',
            img_cards_placement === 'sinistra'
              ? 'order-1'
              : 'order-1 lg:order-2',
          ]"
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
                <nuxt-img
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
        <div class="w-full lg:pt-6" :class="imageClasses">
          <h2 v-if="title" class="uppercase" v-html="title" />
          <div v-if="description" class="mt-6" v-html="description" />
          <div v-if="link?.cta_label && link?.cta_link" class="mt-10">
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
        </div>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { IProps } from "~/types/components/block-page-text-images";

const { title, description, images, link, img_cards_placement } =
  defineProps<IProps>();
const { getMediaCompleteUrl } = useStrapiMediaObject();

const imageClasses = computed(() => {
  const baseClasses =
    images && images.data.length > 1 ? "lg:w-[55%]" : "lg:w-[60%]";
  let orderClasses;
  if (images) {
    if (images.data.length > 1) {
      orderClasses =
        img_cards_placement === "sinistra"
          ? "order-2 lg:pl-12"
          : "order-2 lg:order-1 lg:pr-12";
    } else {
      orderClasses =
        img_cards_placement === "sinistra"
          ? "order-2 lg:pl-6 lg:pr-44 font-medium mt-3"
          : "order-2 lg:order-1 lg:pr-6 lg:pl-44 font-medium mt-3";
    }
  }

  return [baseClasses, orderClasses];
});
</script>
