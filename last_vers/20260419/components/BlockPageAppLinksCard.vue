<template>
  <section
    class="my-20 px-4 lg:my-28 lg:px-8"
    :aria-labelledby="`block-app-links-${component_id}`"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div
        class="relative col-span-12 grid grid-cols-12 gap-x-4 rounded-3xl bg-blue-500 px-10 py-20 lg:gap-x-8 lg:px-20"
      >
        <div class="col-span-12 lg:col-span-6">
          <h2
            v-if="title"
            :id="`block-app-links-${component_id}`"
            class="text-xl-1 text-white lg:text-xxl-1"
          >
            {{ title }}
          </h2>
          <div v-if="text" class="text-wrapper" v-html="text" />
          <div
            v-if="appLinks?.app_store_link || appLinks?.play_store_link"
            class="mt-6 flex flex-wrap items-center justify-start"
          >
            <a
              v-if="appLinks?.app_store_link"
              :href="appLinks.app_store_link"
              class="mr-5 mt-3"
              target="_blank"
            >
              <SvgIcon name="apple-store" />
            </a>
            <a
              v-if="appLinks?.play_store_link"
              :href="appLinks.play_store_link"
              class="mt-3"
              target="_blank"
            >
              <SvgIcon name="google-store" />
            </a>
          </div>
        </div>
        <div
          class="col-span-6 hidden items-start"
          :class="isPromos ? 'lg:flex' : 'lg:block'"
        >
          <div
            v-if="isPromos"
            class="relative -bottom-[65px] z-10 w-full max-w-[220px] rounded-2xl bg-white p-5"
          >
            <SvgIcon name="phone" class="!justify-start" />
            <p
              v-if="promos_title"
              class="mt-4 text-m-1 font-bold text-blue-500"
              v-html="promos_title"
            />
            <div
              v-if="promos_description"
              class="mt-4 text-xs-3 font-medium"
              v-html="promos_description"
            />
            <NuxtLinkLocale
              v-if="promos_cta_label"
              :to="{ name: 'livigno-card-promos-list' }"
              class="mt-5 inline-block w-full rounded-[44px] bg-blue-500 py-2 text-center text-xs-1 font-bold text-white"
              :target="useCtaTarget(promos_cta_target)"
            >
              {{ promos_cta_label }}
            </NuxtLinkLocale>
          </div>
          <div
            class="relative z-10 w-full max-w-[200px] rounded-2xl bg-white p-5"
            :class="isPromos && '-top-[65px] right-[50px] shadow-box'"
          >
            <p
              v-if="qr_code_title"
              class="text-m-1 font-bold text-blue-500"
              v-html="qr_code_title"
            />
            <NuxtImg
              v-if="appLinks?.qr_code"
              :src="appLinks.qr_code"
              class="w-full"
            />
          </div>
        </div>
        <NuxtImg
          v-if="background_image"
          :src="getMediaCompleteUrl(background_image)"
          class="absolute bottom-0 right-0 hidden w-96 lg:block"
          :alt="background_image_alt_text"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {
  IProps,
  IAppLinks,
} from "@/types/components/block-page-app-links";

const {
  component_id,
  title,
  text,
  background_image,
  background_image_alt_text,
  qr_code_title,
  promos_title,
  promos_description,
  promos_cta_label,
  promos_cta_target,
} = defineProps<IProps>();

const isPromos = computed(() => promos_title || promos_description);

const client = useStrapiClient();
const { data: appLinks } = await useAsyncData("app-links", () =>
  client<IAppLinks>("shared/appLinkQrCode"),
);

const { getMediaCompleteUrl } = useStrapiMediaObject();
</script>

<style scoped>
:deep(.text-wrapper p) {
  @apply mt-4 text-m-3 font-medium text-grey-200;
}
</style>
