<template>
  <TransitionGroup
    class="relative mt-10 grid gap-x-4 gap-y-6 lg:gap-x-6"
    :class="grid"
    name="list"
    tag="ul"
  >
    <li
      v-for="promo in cards.data"
      :key="promo.attributes.code"
      class="flex flex-col justify-between rounded-3xl bg-white p-5 shadow-box"
      :class="cols"
    >
      <div class="flex items-center">
        <SvgIcon
          v-if="promo.attributes.category?.data"
          :name="promo.attributes.category.data.attributes.code"
          class="mr-7 shrink-0"
        />
        <div>
          <span
            v-if="promo.attributes.typologies?.data.length"
            class="text-m-2 text-black"
          >
            {{
              promo.attributes.typologies.data[0].attributes.name[
                locale as Locale
              ]
            }}
          </span>
          <p
            v-if="promo.attributes.name"
            class="mt-1 text-l-2 font-bold text-blue-500"
          >
            {{ promo.attributes.name[locale as Locale] }}
          </p>
        </div>
      </div>
      <p
        v-if="promo.attributes.address"
        class="mt-7 text-xs-3 font-medium text-black"
      >
        {{ promo.attributes.address }}
      </p>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/promo-cards";
import type { Locale } from "~/misc/locales";

const {
  cards,
  grid = "grid-cols-12",
  cols = "col-span-12 sm:col-span-6 lg:col-span-3",
} = defineProps<IProps>();

const { locale } = useI18n();
</script>
