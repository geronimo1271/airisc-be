<template>
  <section class="my-20 px-4 lg:my-28 lg:px-8" aria-labelledby="faq-page">
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <PageHead
        :title="faqPageData?.data.attributes.title"
        title-id="faq-page"
        :description="faqPageData?.data.attributes.text"
      >
        <InputText
          form-name="search-faq-page"
          field="search-faq"
          :label="faqPageData?.data.attributes.search_input_placeholder || ''"
          :is-required="false"
          @on-input="(str: string) => debouncedSearch(str)"
        >
          <template #right-input>
            <div
              class="absolute right-[24px] top-1/2 h-[38px] -translate-y-[60%]"
            >
              <button type="submit">
                <SvgIcon name="yellow-circle-search" />
              </button>
            </div>
          </template>
        </InputText>
      </PageHead>
      <div class="col-span-12 text-center lg:col-span-8 lg:col-start-3">
        <section
          class="mt-14 flex flex-wrap items-center justify-start lg:mt-20 lg:justify-center"
        >
          <button
            type="button"
            class="chip-category"
            :class="activeCategory === -1 && 'active'"
            @click="activeCategory = -1"
          >
            {{ $t("pages.faq.all") }}
          </button>
          <template v-if="faqCategories?.data">
            <button
              v-for="category in faqCategories.data"
              :key="category.id"
              type="button"
              class="chip-category"
              :class="[
                activeCategory === category.id && 'active',
                category.attributes.faqs.data.attributes.count <= 0 && 'hidden',
              ]"
              :disabled="
                !!searchValue && !availableCategories?.includes(category.id)
              "
              @click="activeCategory = category.id"
            >
              {{ category.attributes.name }}
            </button>
          </template>
        </section>
        <section class="mt-10 lg:mt-14">
          <FaqGroup v-if="faqs?.data.length" :faqs="faqs" />
          <div v-else class="text-center">
            <p
              class="text-l-2 font-bold text-black"
              v-html="$t('pages.faq.no_results.title', { searchValue })"
            />
            <p class="mt-4 text-xs-3 font-medium text-black">
              {{ $t("pages.faq.no_results.subtitle") }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InputText from "~/components/form/input/InputText.vue";
import type { IFaqPage } from "~/types/api/faq-page";
import type { IFaq } from "~/types/components/block-faq";
import type { IFaqCategories } from "~/types/api/faq-categories";
import type { Locale } from "~/misc/locales";
import { seo as seoPopulate } from "@/misc/strapiPopulate";

const { locale } = useI18n();
const { findOne, find } = useStrapi();

const { data: faqPageData } = await useAsyncData("faq-page", () => {
  return findOne<IFaqPage>("faq-page", undefined, {
    populate: [...seoPopulate],
    locale: locale.value as Locale,
  });
});

const { data: faqCategories } = await useAsyncData("faq-categories", () =>
  find<IFaqCategories>("faq-categories", {
    locale: locale.value as Locale,
    populate: {
      faqs: {
        count: true,
      },
    },
  }),
);

const searchValue = ref<string>("");
const activeCategory = ref<number>(-1);
const availableCategories = ref<number[]>([]);
const { data: faqs, refresh: refreshFaqs } = await useAsyncData("faqs", () =>
  find<IFaq>("faqs", {
    locale: locale.value as Locale,
    populate: ["faq_category"],
    filters: {
      $and: [
        {
          $or: [
            {
              question: {
                $containsi: searchValue.value,
              },
            },
            {
              answer: {
                $containsi: searchValue.value,
              },
            },
          ],
        },
        {
          faq_category: {
            id: {
              $in:
                activeCategory.value === -1
                  ? undefined
                  : [activeCategory.value],
            },
          },
        },
      ],
    },
  }),
);

watch(activeCategory, () => refreshFaqs());

const debouncedSearch = useDebounceFn(
  async (str: string) => {
    searchValue.value = str;
    !!str && (activeCategory.value = -1);

    await refreshFaqs();

    if (str && activeCategory.value === -1) {
      availableCategories.value =
        faqs.value?.data.map((faq) => faq.attributes.faq_category.data.id) ||
        [];
    } else {
      availableCategories.value = [];
    }
  },
  500,
  { maxWait: 5000 },
);

const seo = computed(() => faqPageData.value?.data.attributes.seo);
useStrapiSeo(seo);
</script>

<style scoped>
.chip-category {
  @apply mr-2 mt-2 rounded-3xl bg-blue-100 px-6 py-2 text-xs-1 font-bold text-blue-500 transition-all duration-300 lg:mr-4;
}
.chip-category.active {
  @apply bg-blue-500 text-white;
}
.chip-category:disabled {
  @apply opacity-30;
}
</style>
