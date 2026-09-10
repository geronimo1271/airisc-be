<template>
  <section class="px-4 py-6 lg:px-8 lg:py-11">
    <ul class="flex items-center">
      <li>
        <NuxtLinkLocale :to="{ name: 'index' }" class="flex items-center">
          <SvgIcon name="home" class="mr-1" />
          <span class="text-xs-2 font-medium text-blue-500">Home</span>
        </NuxtLinkLocale>
      </li>
      <li
        v-for="(path, index) in paths"
        :key="path.url"
        class="flex items-center overflow-hidden"
      >
        <SvgIcon name="breadcrumb-chevron" class="mx-2" />
        <component
          :is="breadcrumbComponent(index >= paths.length - 1)"
          v-bind="{
            ...breadcrumbAtrr(index >= paths.length - 1, path.url),
          }"
          class="flex items-center truncate capitalize"
        >
          <span class="truncate text-xs-2 font-medium text-grey-500">
            {{ path.label }}
          </span>
        </component>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();

function breadcrumbComponent(isLast: boolean) {
  return isLast ? "div" : resolveComponent("NuxtLinkLocale");
}
function breadcrumbAtrr(isLast: boolean, url: string) {
  return isLast ? {} : { to: url };
}

interface IBreadcrumb {
  label: string;
  url: string;
}
const paths = ref<IBreadcrumb[]>([]);
watch(
  () => route.fullPath,
  (newFullPath) => {
    const serializedSplittedPath = newFullPath
      .split("/")
      .filter((item) => item && item !== locale.value);

    paths.value = serializedSplittedPath.map((item, index) => ({
      label: item.replaceAll("-", " "),
      url: `/${serializedSplittedPath.slice(0, index + 1).join("/")}`,
    }));
  },
  { immediate: true },
);
</script>
