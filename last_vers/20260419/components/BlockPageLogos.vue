<template>
  <section class="my-12">
    <SwiperSlider
      v-if="items?.length"
      v-slot="{ item }"
      :items="getLoopedItems()"
      :swiper-options="sliderLogosOptions"
      slide-classes="flex items-center justify-center"
      :hide-navigation="true"
    >
      <a :href="item.url" target="_blank">
        <nuxt-img
          :alt="item.name"
          class="mx-10 h-[100px] w-auto"
          :src="getMediaCompleteUrl(item.image?.data.attributes.url)"
        />
      </a>
    </SwiperSlider>
  </section>
</template>

<script setup lang="ts">
import SwiperSlider from "./commons/SwiperSlider.vue";
import type { IProps } from "~/types/components/block-page-logos";
import { sliderLogosOptions } from "~/misc/swiperSlidersOptions";

const { items } = defineProps<IProps>();
const { getMediaCompleteUrl } = useStrapiMediaObject();

const getLoopedItems = () => [...items, ...items];
</script>

<style>
.swiper-wrapper {
  transition-timing-function: linear;
}
</style>
