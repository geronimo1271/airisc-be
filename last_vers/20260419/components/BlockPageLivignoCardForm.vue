<template>
  <section
    class="my-20 px-4 lg:my-28 lg:px-8"
    :aria-labelledby="`livigno-card-form-${component_id}`"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div class="col-span-12 lg:col-span-8">
        <h2 v-if="title" :id="`livigno-card-form-${component_id}`">
          {{ title }}
        </h2>
        <div
          v-if="text"
          class="mt-4 text-xs-3 lg:mt-3 lg:text-m-3"
          v-html="text"
        />
      </div>
      <ul
        v-if="steps.length"
        class="col-span-12 mt-10 grid grid-cols-12 gap-x-4 lg:gap-x-8"
      >
        <li
          v-for="step in steps"
          :key="step.id"
          class="col-span-12 mt-5 lg:col-span-4 lg:mt-0"
        >
          <span v-if="step.title" class="text-l-2 font-bold text-grey-900">
            {{ step.title }}
          </span>
          <div v-if="step.text" class="text-wrapper mt-2" v-html="step.text" />
        </li>
      </ul>

      <!-- form card livigno -->
      <div v-if="show_form"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-page-livigno-card-form";

const { component_id, title, text, steps, show_form } = defineProps<IProps>();
</script>

<style scoped>
:deep(.text-wrapper p) {
  @apply text-m-3 font-medium text-grey-600;
}
</style>
