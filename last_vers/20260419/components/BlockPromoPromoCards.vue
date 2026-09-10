<template>
  <section
    :id="`promo-cards-${component_id}`"
    class="my-16 px-4 lg:my-24 lg:px-8"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div class="col-span-12 lg:col-span-8">
        <h2 v-if="title" class="text-xl-1 lg:text-xl-3" v-html="title" />
        <div
          v-if="text"
          class="mt-4 text-xs-3 lg:mt-3 lg:text-m-3"
          v-html="text"
        />
      </div>
      <div
        v-if="cta_label"
        class="col-span-12 mt-5 lg:col-span-4 lg:mt-0 lg:self-end lg:text-right"
      >
        <NuxtLinkLocale
          class="btn-tertiary"
          :to="{ name: 'livigno-card-promos-list' }"
          :target="useCtaTarget(cta_target)"
        >
          {{ cta_label }}
        </NuxtLinkLocale>
      </div>
      <PromoCards class="col-span-12" :cards="promos" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/block-promo-cards";

const { component_id, title, text, cta_label, cta_target, promos } =
  defineProps<IProps>();
</script>
