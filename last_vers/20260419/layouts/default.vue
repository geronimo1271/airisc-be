<template>
  <div :style="{ paddingTop: `${headerInstance?.headerHeight}px` }">
    <TheHeader ref="headerInstance" />
    <TheBreadcrumb
      class="duratrion-300 fixed left-0 z-40 w-full transition-all ease-in-out"
      :class="
        (route.fullPath === `/${locale}` || windowY > 50) && '!z-[-1] opacity-0'
      "
      :style="{ top: `${headerInstance?.headerHeight}px` }"
    />

    <main
      :style="{
        minHeight: `calc(100vh - ${headerInstance?.headerHeight}px - ${footerInstance?.footerHeight}px)`,
      }"
    >
      <slot />
    </main>
    <TheFooter ref="footerInstance" />
  </div>
</template>

<script setup lang="ts">
import TheBreadcrumb from "~/components/Header/TheBreadcrumb.vue";
import TheHeader from "~/components/Header/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";

const route = useRoute();
const { locale } = useI18n();

const { y: windowY } = useWindowScroll();

const headerInstance = ref<InstanceType<typeof TheHeader> | null>(null);
const footerInstance = ref<InstanceType<typeof TheFooter> | null>(null);
</script>
