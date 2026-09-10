<template>
  <section class="my-20 px-4 lg:my-28 lg:px-8" aria-labelledby="contact-page">
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <PageHead
        :title="contactUsPageData?.data.attributes.title"
        title-id="contact-page"
        :description="contactUsPageData?.data.attributes.text"
      />
      <div
        class="col-span-12 mt-20 text-center lg:col-span-10 lg:col-start-2 lg:mt-32"
      >
        <div
          class="rounded-3xl bg-blue-100 px-4 py-5 text-left lg:px-14 lg:py-10"
        >
          <p
            v-if="contactUsPageData?.data.attributes.form_title"
            class="text-l-2 font-bold text-blue-500 lg:text-xl-1"
          >
            {{ contactUsPageData.data.attributes.form_title }}
          </p>
          <div
            v-if="contactUsPageData?.data.attributes.form_description"
            class="mt-4 text-xs-3 font-medium text-grey-700 lg:text-m-3"
            v-html="contactUsPageData.data.attributes.form_description"
          />
          <section class="mt-10 grid grid-cols-10 gap-x-4 lg:mt-20 lg:gap-x-8">
            <div class="col-span-12 lg:col-span-4">
              <div class="flex items-center">
                <SvgIcon name="home-contact" class="mr-4 shrink-0" />
                <span
                  v-if="contactUsPageData?.data.attributes.form_company_title"
                  class="text-xs-3 font-bold text-grey-900"
                >
                  {{ contactUsPageData.data.attributes.form_company_title }}
                </span>
              </div>
              <div
                v-if="contactUsPageData?.data.attributes.form_company_address"
                class="mt-3 text-xs-3 font-medium text-grey-900 lg:mt-8"
                v-html="contactUsPageData.data.attributes.form_company_address"
              />
              <a
                v-if="
                  contactUsPageData?.data.attributes.form_company_phone_number
                "
                :href="`tel:${contactUsPageData.data.attributes.form_company_phone_number.replace(
                  / /g,
                  '',
                )}`"
                class="mt-3 block text-xs-3 font-bold text-grey-900 lg:mt-8"
              >
                {{
                  contactUsPageData.data.attributes.form_company_phone_number
                }}
              </a>
              <a
                v-if="contactUsPageData?.data.attributes.form_company_email"
                :href="`mailto:${contactUsPageData.data.attributes.form_company_email}`"
                class="mt-3 block text-xs-3 font-bold text-grey-900 lg:mt-8"
              >
                {{ contactUsPageData.data.attributes.form_company_email }}
              </a>
            </div>
            <div class="col-span-12 mt-10 lg:col-span-6 lg:mt-0">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IContactUsPage } from "~/types/api/contact-us-page";
import type { Locale } from "~/misc/locales";
import { seo as seoPopulate } from "@/misc/strapiPopulate";
import ContactForm from "~/components/form/ContactForm.vue";

const { findOne } = useStrapi();
const { locale } = useI18n();

const { data: contactUsPageData } = await useAsyncData("contact-page", () => {
  return findOne<IContactUsPage>("contact-page", undefined, {
    populate: [...seoPopulate],
    locale: locale.value as Locale,
  });
});
</script>
