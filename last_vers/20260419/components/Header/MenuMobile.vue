<template>
  <section>
    <button
      type="button"
      :aria-label="$t('menus.hamburger_aria_label')"
      @click="isMenuOpen = !isMenuOpen"
      class="p-2 -m-2 flex flex-col items-center leading-none"
    >
      <SvgIcon name="hamburger-menu" class="w-7 h-7 text-blue-500" />
      <span class="mt-0.5 text-xs-1 text-blue-500">MENU</span>
    </button>

    <ClientOnly>
      <Teleport to="body">
        <Transition name="menu">
          <section v-if="isMenuOpen"
            class="fixed left-0 top-0 z-50 flex h-full w-screen flex-col justify-between overflow-auto bg-white px-4 pb-10 pt-2 transition-all duration-500 ease-in-out lg:hidden">
            <div>
              <div class="flex items-center justify-between">
                <div
                  class="-translate-x-[16px] rounded-br-3xl rounded-tr-3xl bg-blue-500 px-8 py-4 text-xs-1 font-bold text-white">
                  <a href="https://www.airisc.org" target="_blank" class="flex items-center">
                    <span class="text-inherit" v-html="$t('top_header.web_site')" />
                    <SvgIcon class="ml-3" name="sito-web" />
                  </a>
              </div>
              <SvgIcon name="close-menu" class="w-7 h-7 text-blue-500" @click="isMenuOpen = !isMenuOpen" />
              </div>

              <div class="mt-14">
                <ul>
                  <li v-for="(item, index) in items" :key="`main-menu-item-mobile-${item.id}`"
                    :class="index > 0 && 'mt-9'">
                    <NuxtLinkLocale :to="item.attributes.url" :target="item.attributes.target"
                      class="text-m-1 font-bold text-blue-500" @click="
                        () => {
                          if (
                            $route.fullPath ===
                            $nuxt.$localePath(item.attributes.url)
                          ) {
                            isMenuOpen = false;
                            windowYScroll = 0;
                          }
                        }
                      ">
                      {{ item.attributes.title }}
                    </NuxtLinkLocale>
                    <ul v-if="item.attributes.children">
                      <li v-for="child in item.attributes.children.data" :key="child.id" class="px-2 py-3">
                        <NuxtLinkLocale
                          class="transition-all duration-100 ease-in-out text-m-1 font-bold text-guild-700 hover:text-guildtext-700 md:text-l-1"
                          :to="child.attributes.url">
                          - {{ child.attributes.title }}
                        </NuxtLinkLocale>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <button type="button" class="btn-secondary btn-icon" @click="onNLButtonClick">
                <span>{{ $t("menus.news_label") }}</span>
                <SvgIcon class="ml-2" name="email-blue" />
              </button>
            </div>
          </section>
        </Transition>
      </Teleport>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import type { IProps } from "~/types/components/menu-mobile-desktop";

const { items } = defineProps<IProps>();

const { width: windowWidth } = useWindowSize();
const { y: windowYScroll } = useWindowScroll({ behavior: "smooth" });
const isMenuOpen = ref<boolean>(false);

const { scrollToNewsletterCard } = useBlockNewsletterCard();

function onNLButtonClick() {
  isMenuOpen.value = false;
  // TODO: Try to remove setTimeout
  setTimeout(scrollToNewsletterCard, 300);
}

const route = useRoute();
watch(
  () => route.path,
  () => (isMenuOpen.value = false),
);

watch(
  () => windowWidth.value,
  (width) => {
    if (width > breakpointsTailwind.lg) {
      isMenuOpen.value = false;
    }
  },
);
watch(
  () => isMenuOpen.value,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },
);
</script>
