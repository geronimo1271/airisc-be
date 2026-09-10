<template>
  <section class="my-12 px-4 lg:my-0 lg:px-8">
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <section class="col-span-12">
        <h2 v-if="title" v-html="title" />
        <div
          v-if="description"
          class="my-5 font-medium text-grey-600"
          v-html="description"
        />
        <div v-if="testimonials?.data.length">
          <SwiperSlider
            v-slot="{ item: testimonial }"
            :items="testimonials.data"
            :swiper-options="sliderTestimonialOptions"
            slide-classes="mb-16 mt-1"
          >
            <div
              class="flex h-full flex-col border-[10px] border-solid border-blue-100 p-7"
            >
              <div class="flex">
                <nuxt-img
                  class="h-[60px] w-[60px] rounded-full"
                  :src="
                    getMediaCompleteUrl(
                      testimonial.attributes.picture?.data.attributes.url,
                    )
                  "
                  height="60"
                  width="60"
                  alt=""
                />
                <div class="ml-3 flex flex-col justify-center">
                  <p
                    v-if="testimonial.attributes.name"
                    class="text-l-2 font-bold text-blue-500"
                    v-html="testimonial.attributes.name"
                  />
                  <p
                    v-if="testimonial.attributes.job"
                    class="mt-0.5 font-bold text-grey-700"
                    v-html="testimonial.attributes.job"
                  />
                </div>
              </div>
              <div
                v-if="testimonial.attributes.description"
                class="mt-5 text-grey-500"
                v-html="testimonial.attributes.description"
              />
            </div>
          </SwiperSlider>
        </div>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import SwiperSlider from "./commons/SwiperSlider.vue";
import type { IProps } from "~/types/components/block-page-testimonial-cards";
import { sliderTestimonialOptions } from "~/misc/swiperSlidersOptions";

const { title, description, testimonials } = defineProps<IProps>();

const { getMediaCompleteUrl } = useStrapiMediaObject();
</script>
