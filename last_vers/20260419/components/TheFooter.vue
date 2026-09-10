<template>
  <footer ref="footer" class="border-t border-solid border-grey-200 bg-white">
    <section
      class="items-center justify-between px-3 py-5 lg:flex lg:px-7 lg:py-11"
    >
      <ul v-if="footerData?.data" class="flex items-center justify-center">
        <li
          v-for="social in footerData?.data.attributes.socials"
          :key="`${social.id}-${social.name}`"
          class="mx-1 lg:mx-2"
        >
          <a :href="social.url" target="_blank">
            <SvgIcon :name="social.icon" />
          </a>
        </li>
      </ul>
      <div class="mt-3 items-center lg:order-first lg:mt-0 lg:flex">
        <ul class="flex items-center justify-center">
          <li
            v-if="footerData?.data?.attributes.privacy_policy_url"
            class="mx-2 lg:mx-6"
          >
            <NuxtLink
              :to="useCtaLink(footerData?.data.attributes.privacy_policy_url)"
              class="text-s-1 text-blue-500 md:text-m-1"
            >
              Privacy Policy
            </NuxtLink>
          </li>
          <li
            v-if="footerData?.data?.attributes.cookies_policy_url"
            class="mx-2 lg:mx-6"
          >
            <NuxtLink
              :to="useCtaLink(footerData?.data.attributes.cookies_policy_url)"
              class="text-s-1 text-blue-500 md:text-m-1"
            >
              Cookies
            </NuxtLink>
          </li>
          <li
            v-if="
              footerData?.data &&
              footerData?.data.attributes.terms_of_service_url
            "
            class="mx-2 lg:mx-6"
          >
            <NuxtLink
              :to="useCtaLink(footerData?.data.attributes.terms_of_service_url)"
              class="text-s-1 text-blue-500 md:text-m-1"
            >
              Terms of service
            </NuxtLink>
          </li>
        </ul>
        <div class="mt-3 w-full flex justify-center text-center lg:mt-0">
          <a
            href="https://endo-ern.eu/patient-organisation/arfsag-associazione-refionale-famiglie-sindrome-adreno-genitale/"
            target="_blank"
            class="inline-flex flex-col items-center text-s-1 font-bold text-blue-500 md:text-l-1"
          >
            <img
              src="https://endo-ern.eu/wp-content/themes/fdcleantheme/img/epag-logo.jpg"
              alt="EndoERN ePag logo"
              class="h-12 w-auto lg:h-16"
            />
            Associazione collegata a Endo-ERN
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import type { IFooter } from "~/types/api/footer";
import type { Locale } from "~/misc/locales";

const footer = ref<HTMLElement | null>(null);
const { height: footerHeight } = useElementSize(footer);
defineExpose<{ footerHeight: Ref<number> }>({
  footerHeight,
});

const { findOne } = useStrapi();
const { locale } = useI18n();
const { data: footerData } = await useAsyncData(
  () => {
    return findOne<IFooter>("footer", undefined, {
      populate: ["socials"],
      locale: locale.value as Locale,
    });
  },
  {
    watch: [locale],
  },
);
</script>
