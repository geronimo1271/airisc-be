<template>
  <section class="my-16 px-4 lg:my-24 lg:px-8">
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <section
        :id="`job-offer-cards-${component_id}`"
        class="job-offer-cards-wrapper col-span-12"
      >
        <div class="mb-6 flex flex-col lg:flex-row lg:justify-between">
          <div
            class="w-full"
            :class="
              isSwiperLocked && (!cta_label || !cta_link) && 'text-center'
            "
          >
            <h2 v-if="title" class="text-xl-1 lg:text-xl-3" v-html="title" />
            <div
              v-if="description"
              class="mt-4 text-xs-3 lg:mt-3 lg:text-m-3"
              v-html="description"
            />
          </div>
          <div
            v-if="cta_label && cta_link"
            class="mt-5 shrink-0 lg:mt-0 lg:self-end"
          >
            <NuxtLink
              class="btn-tertiary"
              :to="useCtaLink(cta_link)"
              :target="useCtaTarget(cta_target)"
            >
              {{ cta_label }}
            </NuxtLink>
          </div>
        </div>
        <div v-if="job_offers?.data.length">
          <SwiperSlider
            v-slot="{ item: job }"
            :items="job_offers.data"
            :swiper-options="jobOffersSliderOptions"
            slide-classes="mb-16 mt-1"
            @on-lock="isSwiperLocked = true"
            @on-unlock="isSwiperLocked = false"
          >
            <JobOffertCard
              :slug="job.attributes.slug"
              :name="job.attributes.name"
              :image="job.attributes.image"
              :location="job.attributes.location"
              :work_sector="job.attributes.work_sector"
            />
          </SwiperSlider>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import SwiperSlider from "./commons/SwiperSlider.vue";
import type { IProps } from "~/types/components/block-page-job-offer-cards";
import { jobOffersSliderOptions } from "~/misc/swiperSlidersOptions";

const { title, description, cta_target, cta_label, cta_link, job_offers } =
  defineProps<IProps>();

const isSwiperLocked = ref<boolean>(false);
</script>
