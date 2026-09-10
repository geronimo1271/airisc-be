<template>
  <section>
    <SwiperSlider
      v-slot="{ item }"
      :items="items"
      :swiper-options="sliderHeroOptions"
      navigation-classes="absolute top-1/2 left-1/2 -translate-x-1/2 z-10"
      :hide-navigation="items.length <= 1"
      slide-classes="pb-6 xs2:pb-0"
    >
      <div
        class="hero-section relative h-full px-4 py-16 text-center lg:px-[20%]"
        :style="{ backgroundImage: bgImage(item) }"
      >
        <div>
          <h1 v-if="item.title" class="text-white" v-html="item.title" />
          <div
            v-if="item.description"
            class="hero-section__desc py-8 font-medium lg:px-40 lg:text-l-3"
            v-html="item.description"
          />
          <div v-if="item.links" class="my-8 flex hidden lg:block">
            <NuxtLink
              v-for="(link, index) in item.links"
              :key="`hero-button-${link.cta_label}-${index}`"
              :to="useCtaLink(link.cta_link)"
              :target="useCtaTarget(link.cta_target)"
              class="mx-3"
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
      </div>
      <div
        v-if="item.links"
        class="relative z-10 -mt-16 flex justify-center lg:hidden"
      >
        <NuxtLink
          v-for="(link, index) in item.links"
          :key="`hero-button-${link.cta_label}-${index}`"
          :to="useCtaLink(link.cta_link)"
          :target="useCtaTarget(link.cta_target)"
          class="mx-3"
          :class="
            link.background_color === 'blu' ? 'btn-primary' : 'btn-secondary'
          "
        >
          {{ link.cta_label }}
        </NuxtLink>
      </div>
    </SwiperSlider>
  </section>
</template>

<script setup lang="ts">
import SwiperSlider from "./commons/SwiperSlider.vue";
import type {
  IProps,
  IHeroItem,
} from "~/types/components/block-page-slider-hero";
import { sliderHeroOptions } from "~/misc/swiperSlidersOptions";

const { items } = defineProps<IProps>();

const { getMediaCompleteUrl } = useStrapiMediaObject();

function bgImage(item: IHeroItem) {
  return item.image.data
    ? `url(${getMediaCompleteUrl(item.image.data.attributes.url)})`
    : "none";
}
</script>

<style scoped>
.hero-section {
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  clip-path: ellipse(80% 100% at 50% 0%);
}

@media screen and (max-width: 768px) {
  .hero-section {
    clip-path: ellipse(100% 100% at 50% -5%);
  }
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(rgba(0, 20, 137, 0.5), rgba(0, 20, 137, 0.5));
}

:deep(.hero-section__desc > *) {
  color: #fff !important;
}
</style>
