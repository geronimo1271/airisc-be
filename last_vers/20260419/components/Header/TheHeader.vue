<template>
  <header ref="header" class="bg-red-100 fixed left-0 top-0 z-50 w-full">
    <TopHeader class="hidden md:flex" />
    <section
      class="grid grid-cols-8 gap-x-4 bg-white p-4 md:grid-cols-12 md:gap-x-8 md:bg-white md:px-8 md:py-2"
    >
      <div class="col-span-6 md:order-first md:col-span-4 2xl:col-span-4">
        <NuxtLinkLocale
          :to="{ name: 'index' }"
          @click="
            () => {
              if ($route.fullPath === $nuxt.$localePath('/')) {
                windowYScroll = 0;
              }
            }
          "
        >
          <img
            src="~/assets/icons/logo_airisc_home.png"
            alt="Logo"
            class="block w-[90%] mx-[5%] h-auto"
          />
        </NuxtLinkLocale>
      </div>
      <div
        class="col-span-1 flex items-center lg:order-last lg:justify-end 2xl:col-span-2"
      >
        <LangSwitcher />
      </div>
      <div
        class="col-span-1 flex items-center justify-end md:col-span-7 md:justify-center xl:justify-start 2xl:justify-center"
      >
        <MenuMobile
          v-if="mainMenuData?.data.length"
          :items="mainMenuData?.data[0].attributes.items.data || []"
          class="md:hidden"
        />
        <MenuDesktop
          v-if="mainMenuData?.data.length"
          :items="mainMenuData?.data[0].attributes.items.data || []"
          class="hidden md:block"
        />
      </div>
    </section>
    <!-- div>
      <span class="hidden sm:block"> sm</span>
      <span class="hidden md:block"> - md</span>
      <span class="hidden lg:block"> - lg</span>
      <span class="hidden xl:block"> - xl</span>
      <span class="hidden 2xl:block"> - 2xl</span>
    </div -->
  </header>
</template>

<script setup lang="ts">
import TopHeader from "./TopHeader.vue";
import MenuMobile from "./MenuMobile.vue";
import MenuDesktop from "./MenuDesktop.vue";
import LangSwitcher from "./LangSwitcher.vue";
import type { Menu } from "~/types/api/commons/menu";

const { y: windowYScroll } = useWindowScroll({ behavior: "smooth" });

const header = ref<HTMLElement | null>(null);
const { height: headerHeight } = useElementSize(header);
defineExpose<{ headerHeight: Ref<number> }>({
  headerHeight,
});

const { locale } = useI18n();
const { find } = useStrapi();
const { data: mainMenuData } = await useAsyncData(
  `main-menu-${locale.value}`,
  () => {
    return find<Menu>("menus", {
      filters: {
        slug: `main-menu-${locale.value}`,
      },
      populate: "*",
      // @ts-expect-error `nested` exists only for the menu plugin
      nested: true,
    });
  },
  {
    watch: [locale],
  },
);
</script>
