<template>
  <section
    :id="`text-cards-${component_id}`"
    class="my-16 px-4 lg:my-24 lg:px-8"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div
        v-for="item in items"
        :key="`${component_id}-${item.id}`"
        class="col-span-12 my-3 text-center xs:col-span-6 lg:col-span-3"
      >
        <span class="text-xxl-1 font-bold text-blue-500 lg:text-xxl-2">
          {{ item.title }}
        </span>
        <div class="text-wrapper" v-html="item.text" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-text-cards";

const { component_id, items } = defineProps<IProps>();
</script>

<style scoped>
:deep(.text-wrapper strong) {
  @apply text-xs-3 text-blue-500 lg:text-l-1;
}

:deep(.text-wrapper p) {
  @apply mt-3 text-xs-1 font-medium text-grey-500 lg:text-xs-3;
}
</style>
