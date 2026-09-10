<template>
  <section class="relative">
    <button
      type="button"
      :aria-label="$t('lang_switcher.switcher_aria_label')"
      class="flex items-center"
      @click="openDropdownLang = !openDropdownLang"
    >
      <span class="text-m-1 font-bold text-white lg:text-blue-500">
        {{ $i18n.locale.toUpperCase() }}
      </span>
      <SvgIcon class="ml-2 lg:hidden" name="lang-chevron-mobile" />
      <SvgIcon class="ml-2 hidden lg:block" name="lang-chevron-desktop" />
    </button>
    <div
      v-if="openDropdownLang"
      class="absolute left-0 top-full w-max rounded bg-blue-500 p-4 shadow-md lg:left-auto lg:right-0 lg:bg-white"
    >
      <ul>
        <li
          v-for="locale in locales as LocaleObject[]"
          :key="locale.code"
          class="my-1"
        >
          <NuxtLink
            :to="switchLocalePath(locale.code)"
            class="text-white lg:text-blue-500"
          >
            {{ locale.code.toUpperCase() }} - {{ locale.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const { locale: currentLocale, locales } = useI18n();

const switchLocalePath = useSwitchLocalePath();

const openDropdownLang = ref<boolean>(false);

watch(currentLocale, () => (openDropdownLang.value = false));
</script>
