<template>
  <div :aria-labelledby="`${slug}_title`" class="pt-24 lg:pt-32">
    <section class="px-4 lg:px-8">
      <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
        <div class="col-span-12">
          <h1 :id="`${slug}_title`" class="uppercase">
            {{ jobOffer?.attributes.name }}
          </h1>
          <p class="mt-2 text-s-1 font-bold text-blue-500 lg:text-xl-1">
            {{ jobOffer?.attributes.location }}
          </p>
        </div>
      </div>
    </section>

    <section class="my-7 px-4 lg:px-8">
      <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
        <!-- INDICE -->
        <section class="col-span-12 hidden lg:col-span-2 lg:block">
          <!-- TODO: try to use dynamic top value -->
          <ul class="sticky top-[170px]">
            <li class="text-m-3 font-bold text-grey-900">
              {{ $t("pages.job_offer.index") }}
            </li>
            <li
              class="mt-5 text-m-3 font-bold text-grey-400"
              :class="
                (!activeIndex ||
                  activeIndex === `${jobOffer?.id}-work-description`) &&
                '!text-grey-900'
              "
            >
              <button
                class="font-inherit text-inherit"
                @click="scrollTo(`${jobOffer?.id}-work-description`)"
              >
                {{ $t("pages.job_offer.work_description") }}
              </button>
            </li>
            <li
              class="mt-5 text-m-3 font-bold text-grey-400"
              :class="
                activeIndex === `${jobOffer?.id}-work-description-duty` &&
                '!text-grey-900'
              "
            >
              <button
                class="font-inherit text-inherit"
                @click="scrollTo(`${jobOffer?.id}-work-description-duty`)"
              >
                {{ $t("pages.job_offer.work_duty_description") }}
              </button>
            </li>
            <li
              v-for="block in sharedBlocks"
              :key="`${block.id}`"
              class="mt-5 text-m-3 font-bold text-grey-400"
              :class="activeIndex === `${block.id}` && '!text-grey-900'"
            >
              <button
                class="font-inherit text-inherit"
                @click="scrollTo(`${block.id}`)"
              >
                {{ block.title }}
              </button>
            </li>
          </ul>
        </section>

        <!-- JOB OFFER PAGE -->
        <section class="col-span-12 lg:col-span-8">
          <div
            class="h-[400px] w-full overflow-hidden rounded-[40px] lg:h-[500px]"
          >
            <NuxtImg
              :src="
                getMediaCompleteUrl(
                  jobOffer?.attributes.image.data.attributes.url,
                )
              "
              class="h-full w-full object-cover object-center"
            />
          </div>

          <BlockTextItem
            :component_id="`${jobOffer?.id}-work-description`"
            :title="$t('pages.job_offer.work_description')"
            :text="jobOffer?.attributes.work_description || ''"
          />
          <BlockTextItem
            :component_id="`${jobOffer?.id}-work-description-duty`"
            :title="$t('pages.job_offer.work_duty_description')"
            :text="jobOffer?.attributes.work_duty_description || ''"
          />
          <DynamicBlock
            v-for="(block, index) in sharedBlocks"
            :key="`block-${index}`"
            :block-data="block"
          />

          <!-- JOB APPLICATION FORM -->
          <div class="mx-auto mt-20 w-full lg:w-4/6">
            <p class="text-xl-1 font-bold text-blue-500">
              {{ $t("pages.job_offer.form_title") }}
            </p>
            <JobApplicationForm
              :preselected-work-sector="
                jobOffer?.attributes.work_sector.data.id
              "
              :hide-work-sector="true"
            />
          </div>
        </section>
      </div>
    </section>

    <template v-if="relatedJobOffers?.data.length">
      <BlockPageJobOfferCards
        :component_id="`${slug}`"
        title="ALTRE OFFERTE DI LAVORO"
        :job_offers="relatedJobOffers"
      />
    </template>
    <DynamicBlock
      v-for="(block, index) in pageBlocks"
      :key="`block-${index}`"
      :block-data="block"
    />
  </div>
</template>

<script setup lang="ts">
import type { Block } from "~/types/api/commons/block";
import BlockTextItem from "~/components/BlockTextItem.vue";
import JobApplicationForm from "~/components/form/JobApplicationForm.vue";
import type { IJobOfferPage, IJobOffersResponse } from "~/types/api/job-offers";
import type { Locale } from "~/misc/locales";
import {
  blocks as blocksPopulate,
  pages as pagesPopulate,
  seo as seoPopulate,
} from "@/misc/strapiPopulate";

const { find } = useStrapi();
const client = useStrapiClient();
const { locale } = useI18n();
const { slug } = useRoute().params;
const { getMediaCompleteUrl } = useStrapiMediaObject();

const { data: jobOfferPage } = await useAsyncData(`${slug}`, () =>
  find<IJobOfferPage>("job-offers", {
    populate: [...blocksPopulate, ...pagesPopulate, ...seoPopulate],
    filters: { slug },
    locale: locale.value as Locale,
  }),
);
const jobOffer = computed(() => jobOfferPage.value?.data[0]);

const { relatedJobOffersQuery } = useJobFilters();
const { data: relatedJobOffers } = await useAsyncData(
  "related-job-offers",
  () =>
    client<IJobOffersResponse>(
      `job-offers/search?${relatedJobOffersQuery(
        jobOffer.value?.id,
        jobOffer.value?.attributes.experience_level,
        jobOffer.value?.attributes.work_sector.data.id,
      )}`,
      {
        query: {
          populate: "*",
          locale: locale.value as Locale,
        },
      },
    ),
);

const { throw404Error } = useThrowErrors();
if (jobOfferPage.value?.data.length !== 1) {
  throw404Error();
}

const blocks = computed(() => {
  return jobOffer.value?.attributes.blocks ?? [];
});

interface ISharedBlock extends Block {
  title: string;
  text: string;
}
const sharedBlocks = computed(() => {
  return (blocks.value as ISharedBlock[]).filter((block) => {
    return block.__component.startsWith("shared.");
  });
});

const pageBlocks = computed(() => {
  return blocks.value.filter((block) => {
    return block.__component.startsWith("page.");
  });
});

const activeIndex = ref<string>("");
function scrollTo(id: string) {
  activeIndex.value = id;
  const el = document.querySelector(`#block-text-item-${id}`);
  el?.scrollIntoView({ behavior: "smooth", block: "center" });
}
const seo = computed(() => jobOffer.value?.attributes.seo);

useStrapiSeo(seo);
</script>
