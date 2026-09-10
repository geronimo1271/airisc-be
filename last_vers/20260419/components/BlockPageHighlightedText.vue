<template>
  <section
    class="my-20 px-4 lg:my-28 lg:px-8"
    :aria-labelledby="`block-highlighted-text-${component_id}`"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div
        class="col-span-12 rounded-3xl p-10"
        :class="background_color === 'lavanda' && 'bg-blue-100'"
      >
        <h2 v-if="title">{{ title }}</h2>
        <div v-if="text" class="text-wrapper mt-6" v-html="text" />
        <div v-if="cta_label && cta_link" class="mt-6" :class="alignButton">
          <NuxtLink
            :to="useCtaLink(cta_link)"
            :target="useCtaTarget(cta_target)"
            class="btn-primary"
          >
            {{ cta_label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-highlighted-text";

const {
  component_id,
  title,
  text,
  background_color,
  cta_label,
  cta_link,
  cta_target,
  link_placement,
} = defineProps<IProps>();

const alignButton = computed(() => {
  let align;

  switch (link_placement) {
    case "centro":
      align = "text-center";
      break;
    case "destro":
      align = "text-right";
      break;
    default:
      align = "text-left";
  }

  return align;
});
</script>

<style scoped>
:deep(.text-wrapper p) {
  @apply text-xs-3;
}
</style>
