<!-- eslint-disable prettier/prettier -->
<template>
  <section>
    <ul class="flex items-center justify-start">
      <li
        v-for="(item, index) in items"
        :key="`main-menu-item-desktop-${item.id}`"
        class="group relative"
      >
        <NuxtLinkLocale
          :to="item.attributes.url"
          :target="item.attributes.target"
          class="ease-in-outh over:text-guildtext-700 text-xs-1 font-bold text-guildtext-700 transition-all duration-200 md:text-l-1"
          :class="[
            index > 0 && 'ml-9 2xl:ml-12',
            {
              'opacity-[.4]':
                itemsIds.includes(item.id) && totalItems > itemsIds.length,
            },
          ]"
          @click="
            () => {
              console.log(JSON.stringify(item));
              if ($route.fullPath === $nuxt.$localePath(item.attributes.url)) {
                windowYScroll = 0;
              }
            }
          "
          @mouseoverxxx="hoverEffect(item.id)"
          @mouseleave="itemsIds.push(item.id)"
        >
          {{ item.attributes.title }}
        </NuxtLinkLocale>
        <ul
          v-if="item.attributes.children"
          class="absolute ml-10 hidden w-64 rounded-lg bg-white bg-opacity-75 shadow-lg group-hover:block"
          :class="[
            {
              hidden: false,
            },
          ]"
        >
          <li
            v-for="child in item.attributes.children.data"
            :key="child.id"
            class="px-2 py-1"
          >
            <NuxtLinkLocale
              class="transition-all duration-100 ease-in-out text-xs-1 font-bold text-guild-700 hover:text-guildtext-700 md:text-l-1"
              :to="child.attributes.url"
            >
              - {{ child.attributes.title }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/menu-mobile-desktop";

const { items } = defineProps<IProps>();

const { y: windowYScroll } = useWindowScroll({ behavior: "smooth" });

const totalItems = items.length;
const itemsIds = ref<number[]>(items.map((item) => item.id));
const hoverEffect = (id: number) => {
  itemsIds.value = itemsIds.value.filter((item) => item !== id);
};
</script>
