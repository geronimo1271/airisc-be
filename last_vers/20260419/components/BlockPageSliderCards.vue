<template>
  <section class="my-16 px-4 lg:my-24 lg:px-8">
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <section class="col-span-12 rounded-lg p-4 lg:p-8" :class="bgColor">
        <div class="mb-6">
          <div class="flex flex-col items-center">
            <hr
              class="mb-4 h-[4px] w-[50%] rounded-md bg-yellow-500 text-yellow-500 md:w-[10%]"
            />
            <h2 v-if="title" class="text-center" v-html="title" />
            <div
              v-if="description"
              class="mt-4 text-center font-bold lg:text-l-3"
              v-html="description"
            />
          </div>
          <div
            v-if="cta_label && cta_link"
            class="flex"
            :class="buttonPosition"
          >
            <NuxtLink class="btn-primary mt-4" :to="useCtaLink(cta_link)">
              {{ cta_label }}
            </NuxtLink>
          </div>
        </div>
        <SwiperSlider
          v-if="items"
          v-slot="{ item }"
          slide-classes="mb-16 mt-1 rounded-xl bg-white p-12"
          :items="items"
          :swiper-options="sliderCardsOptions"
        >
          <div>
            <div
              class="flex w-full"
              :class="iconPosition(item?.icon_placement || 'sinistra')"
            >
              <NuxtImg
                v-if="item"
                class="h-[60px] w-[60px]"
                :src="getMediaCompleteUrl(item.icon)"
                alt=""
              />
            </div>
            <p
              v-if="item.title"
              class="my-3 text-l-2 font-bold uppercase text-blue-500"
              v-html="item.title"
            />
            <div v-if="item.description" v-html="item.description" />
          </div>
        </SwiperSlider>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import SwiperSlider from "./commons/SwiperSlider.vue";
import type { IProps } from "~/types/components/block-page-slider-cards";
import { sliderCardsOptions } from "~/misc/swiperSlidersOptions";

const {
  background_color,
  title,
  description,
  cta_label,
  cta_link,
  cta_placement,
  items,
} = defineProps<IProps>();

const bgColor = computed(() => {
  switch (background_color) {
    case "lavanda":
      return "bg-blue-100";
    case "bianco":
    default:
      return "bg-white";
  }
});

const buttonPosition = computed(() => {
  switch (cta_placement) {
    case "destro":
      return "justify-end";
    case "sinistra":
      return "justify-start";
    case "centro":
    default:
      return "justify-center";
  }
});

const iconPosition = (position: string) => {
  switch (position) {
    case "destro":
      return "justify-end";
    case "sinistra":
      return "justify-start";
    case "centro":
    default:
      return "justify-center";
  }
};

const { getMediaCompleteUrl } = useStrapiMediaObject();
</script>
