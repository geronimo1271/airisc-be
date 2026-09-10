<template>
  <NuxtLinkLocale
    :to="{
      name: 'job-offers-slug',
      params: {
        slug,
      },
    }"
    class="block overflow-hidden rounded-2xl shadow-lg"
    :class="view === 'list' && viewListClasses.container"
  >
    <div
      class="relative h-[171px]"
      :class="view === 'list' && viewListClasses.imageContainer"
    >
      <NuxtImg
        v-if="image.data"
        class="h-full w-full object-cover object-center"
        :src="getMediaCompleteUrl(image)"
        alt=""
      />
    </div>
    <div
      class="mt-1 p-4"
      :class="view === 'list' && viewListClasses.textContainer"
    >
      <p
        v-if="work_sector.data.attributes.name"
        class="text-m-2 text-black"
        v-html="work_sector.data.attributes.name"
      />
      <p
        v-if="name"
        class="mt-1 text-l-2 font-bold text-blue-500"
        v-html="name"
      />
      <p
        v-if="location"
        class="mt-5 text-xs-3 font-medium text-black"
        v-html="location"
      />
      <span class="btn-primary mt-5 w-full text-center">
        {{ $t("job_offer_card.button_label") }}
      </span>
    </div>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/job-offer-card";

const {
  slug,
  name,
  location,
  image,
  work_sector,
  view = "grid",
} = defineProps<IProps>();

const viewListClasses = computed(() => {
  return {
    container: "lg:flex",
    imageContainer: "lg:h-auto lg:min-h-[220px] lg:w-[400px]",
    textContainer: "lg:w-[calc(100%-400px)] lg:pl-16 lg:pr-8",
  };
});

const { getMediaCompleteUrl } = useStrapiMediaObject();
</script>
