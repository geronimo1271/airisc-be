<template>
  <div :id="`block-text-item-${component_id}`" class="relative mt-7">
    <p class="text-m-1 font-bold text-grey-900" v-html="title" />
    <div
      class="text-wrapper mt-5 text-m-3 font-medium text-grey-900"
      v-html="text"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-text-item";

const { component_id, title, text } = defineProps<IProps>();
</script>

<style scoped>
:deep(.text-wrapper ul) {
  @apply list-disc pl-5;
}
</style>
