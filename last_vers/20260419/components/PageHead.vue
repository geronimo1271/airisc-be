<template>
  <div class="col-span-12 text-center lg:col-span-6 lg:col-start-4">
    <h1 v-if="title" :id="titleId">
      {{ title }}
    </h1>
    <div
      v-if="description"
      class="mt-5 text-s-1 font-medium text-grey-700 lg:mt-10 lg:text-l-3"
      v-html="description"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/page-head";

const { title, titleId, description } = defineProps<IProps>();
</script>
