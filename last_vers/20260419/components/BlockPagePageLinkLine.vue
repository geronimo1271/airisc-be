<template>
  <section class="flex flex-row items-center w-auto mx-3 mb-2 gap-8 h-max font-extrabold">
    <div class="flex-1 text-xs-1 text-white h-max">
      <NuxtLink
        v-if="prev_page_label && prev_page_link"
        :to="prev_page_link"
        class="block w-full btn-link"
      > <span class="text-nowrap text-white" v-html="prev_page_label"></span></NuxtLink>
    </div>
    <div class="flex-1 text-xs-1 text-white h-max">
      <NuxtLink
        v-if="next_page_label && next_page_link"
        :to="next_page_link"
        class="block w-full btn-link"
      ><span class="text-nowrap text-white" v-html="next_page_label"></span></NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-page-link-line";

const { prev_page_label, prev_page_link, next_page_label, next_page_link } =
  defineProps<IProps>();
</script>

<style scoped>
:deep(.text-wrapper p) {
  @apply text-xs-3;
}
</style>
