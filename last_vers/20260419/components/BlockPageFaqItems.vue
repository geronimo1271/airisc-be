<template>
  <section
    class="my-20 px-4 lg:my-28 lg:px-8"
    :aria-labelledby="`block-faq-${component_id}`"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div class="col-span-12 lg:col-span-5">
        <h2 :id="`block-faq-${component_id}`">{{ title }}</h2>
        <div v-if="description" class="mt-4 text-xs-3" v-html="description" />
        <NuxtLink
          v-if="cta_label && cta_link"
          :to="useCtaLink(cta_link)"
          :target="useCtaTarget(cta_target)"
          class="btn-tertiary mt-6 lg:mt-10"
        >
          {{ cta_label }}
        </NuxtLink>
      </div>
      <div class="col-span-12 lg:col-span-7">
        <FaqGroup v-if="faqs.data?.length" :faqs="faqs" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-faq";

const {
  component_id,
  title,
  description,
  cta_label,
  cta_link,
  cta_target,
  faqs,
} = defineProps<IProps>();
</script>
