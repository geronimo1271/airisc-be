<template>
  <div aria-labelledby="working-in-livigno">
    <section class="my-20 px-4 lg:my-28 lg:px-8">
      <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
        <PageHead
          :title="pageData?.data.attributes.title"
          title-id="working-in-livigno"
          :description="pageData?.data.attributes.text"
        >
          <InputText
            form-name="search-job-page"
            field="search-job"
            :label="pageData?.data.attributes.search_input_placeholder || ''"
            :is-required="false"
            :reset-input="clearSearchField"
            @on-input="(name: string) => debouncedSearch(name)"
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
      </div>
    </section>
    <section class="my-20 px-4 lg:my-28 lg:px-8">
      <div
        class="relative mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8"
      >
        <!-- DESKTOP FILTERS -->
        <FiltersCol
          class="col-span-12 hidden lg:col-span-3 lg:block"
          @on-reset-click="clearFieldAndSearch"
        >
          <InputCheckbox
            form-name="desktop-filters"
            field="work_sector"
            :label="$t(`${pageSuffix}.filters.labels.work_sector`)"
            :items="filtersFields?.work_sector || []"
            :is-required="false"
            :clear_all="isClearAllFilters"
            @on-change="setCheckboxFilter"
          />
          <InputRadio
            form-name="desktop-filters"
            field="contract_type"
            :label="$t(`${pageSuffix}.filters.labels.contract_type`)"
            :items="filtersFields?.contract_type || []"
            :is-required="false"
            :clear_all="isClearAllFilters"
            @on-change="setRadioFilter"
          />
          <InputRadio
            form-name="desktop-filters"
            field="experience_level"
            :label="$t(`${pageSuffix}.filters.labels.experience_level`)"
            :items="filtersFields?.experience_level || []"
            :is-required="false"
            :clear_all="isClearAllFilters"
            @on-change="setRadioFilter"
          />
          <InputRange
            form-name="desktop-filters"
            field="gross_salary"
            :label="$t(`${pageSuffix}.filters.labels.gross_salary`)"
            :reset="isClearAllFilters"
            @on-change="debouncedRange"
          />
          <InputCheckbox
            form-name="desktop-filters"
            field="education_level"
            :label="$t(`${pageSuffix}.filters.labels.education_level`)"
            :items="filtersFields?.education_level || []"
            :is-required="false"
            :clear_all="isClearAllFilters"
            @on-change="setCheckboxFilter"
          />
          <InputCheckbox
            form-name="desktop-filters"
            field="languages"
            :label="$t(`${pageSuffix}.filters.labels.languages`)"
            :items="filtersFields?.languages || []"
            :is-required="false"
            :clear_all="isClearAllFilters"
            @on-change="setCheckboxFilter"
          />
          <InputCheckbox
            form-name="desktop-filters"
            field="benefits"
            :label="$t(`${pageSuffix}.filters.labels.benefits`)"
            :items="filtersFields?.benefits || []"
            :is-required="false"
            :clear_all="isClearAllFilters"
            @on-change="setCheckboxFilter"
          />
          <InputCheckbox
            form-name="desktop-filters"
            field="work_environment"
            :label="$t(`${pageSuffix}.filters.labels.work_environment`)"
            :items="filtersFields?.work_environment || []"
            :is-required="false"
            :clear_all="isClearAllFilters"
            @on-change="setCheckboxFilter"
          />
        </FiltersCol>

        <!-- GRID CARDS -->
        <section class="col-span-12 lg:col-span-9">
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          >
            <p class="text-xs-3 font-medium text-blue-500">
              {{
                $t(`${pageSuffix}.total_offers`, {
                  totOffers: totalJobOffers,
                })
              }}
            </p>
            <div class="mt-6 flex items-center justify-between lg:mt-0">
              <div class="lg:hidden">
                <button
                  type="button"
                  class="flex items-center"
                  :aria-label="$t(`${pageSuffix}.filters.aria_label_button`)"
                  @click="showFiltersModal = !showFiltersModal"
                >
                  <SvgIcon name="filters" />
                  <span class="ml-2 text-xs-3 font-medium text-blue-500">
                    {{ $t(`${pageSuffix}.filters.title`) }}
                  </span>
                </button>
              </div>
              <div class="flex items-center">
                <button
                  type="button"
                  class="hidden lg:block"
                  :aria-label="$t(`${pageSuffix}.aria_label_grid_button`)"
                  @click="switchCardView('grid')"
                >
                  <SvgIcon name="grid" />
                </button>
                <button
                  type="button"
                  class="ml-6 hidden lg:block"
                  :aria-label="$t(`${pageSuffix}.aria_label_list_button`)"
                  @click="switchCardView('list')"
                >
                  <SvgIcon name="bullet-list" />
                </button>
                <SortJobOfferts
                  :lang-suffix="pageSuffix"
                  @on-set-filter="setSort"
                />
              </div>
            </div>
          </div>
          <div
            v-if="jobOffers?.data.length"
            class="mt-10 grid grid-cols-12 gap-x-4 gap-y-6 lg:grid-cols-9 lg:gap-x-8"
          >
            <TransitionGroup
              class="relative col-span-12 grid grid-cols-12 gap-x-4 gap-y-6 lg:col-span-9 lg:grid-cols-9 lg:gap-x-8"
              name="list"
              tag="ul"
            >
              <li
                v-for="job in jobOffers?.data"
                :key="job.id"
                class="col-span-12 xs2:col-span-6"
                :class="cardView === 'grid' ? 'lg:col-span-3' : 'lg:col-span-9'"
              >
                <JobOffertCard
                  :slug="job.attributes.slug"
                  :name="job.attributes.name"
                  :image="job.attributes.image"
                  :location="job.attributes.location"
                  :work_sector="job.attributes.work_sector"
                  :view="cardView"
                />
              </li>
            </TransitionGroup>

            <div
              v-if="totalJobOffers > jobOffers.data.length"
              class="col-span-12 mt-5 text-center lg:col-span-9"
            >
              <p class="text-xs-3 font-medium text-black">
                {{
                  $t(`${pageSuffix}.summary_of_offerts_viewed`, {
                    currentViewed: jobOffers.data.length,
                    totOffers: totalJobOffers,
                  })
                }}
              </p>
              <button
                type="button"
                class="btn-secondary mt-4"
                @click="fetchMoreJobOffers"
              >
                {{ $t(`${pageSuffix}.upload_offers`) }}
              </button>
            </div>
          </div>
          <div
            v-else
            class="mt-20 grid grid-cols-9 gap-x-4 gap-y-6 text-center lg:gap-x-8"
          >
            <div class="col-span-12">
              <p class="text-l-2 font-bold text-black">
                {{ $t(`${pageSuffix}.no_results.title`) }}
              </p>
              <p class="mt-4 text-xs-3 font-medium text-black">
                {{ $t(`${pageSuffix}.no_results.subtitle`) }}
              </p>
            </div>
          </div>
        </section>
      </div>

      <DynamicBlock
        v-for="(block, index) in blocks"
        :key="`block-${index}`"
        :block-data="block"
      />
    </section>

    <!-- MOIBILE FILTERS -->
    <BaseModal
      :show="showFiltersModal"
      :title="$t('job_filters_modal.title')"
      :full-screen-on-mobile="true"
      :header-bordered="true"
      @close-modal="showFiltersModal = !showFiltersModal"
    >
      <template #content>
        <JobFiltersModal
          :style="{ paddingBottom: `${footerModalHeight + 40}px` }"
          :translate-suffix="pageSuffix"
          :filters-fields="filtersFields"
          :is-clear-all-filters="isClearAllFilters"
          :active-filters="activeFilters"
          @on-checkbox-change="setCheckboxFilter"
          @on-radio-change="setRadioFilter"
          @on-range-change="debouncedRange"
        />
      </template>
      <template #footer>
        <section
          ref="footerModal"
          class="absolute bottom-0 left-0 flex w-full flex-col items-center bg-white px-5 py-5"
        >
          <button
            type="button"
            class="btn-secondary w-full"
            @click="showFiltersModal = !showFiltersModal"
          >
            {{ $t("job_filters_modal.show_results") }}
          </button>
          <button
            type="button"
            class="mt-3 text-xs-3 font-medium text-red-700"
            @click="clearFieldAndSearch"
          >
            {{ $t(`${pageSuffix}.filters.reset`) }}
          </button>
        </section>
      </template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import type { MetaResponsePaginationByOffset } from "@nuxtjs/strapi/dist/runtime/types";
import type { IJobOffersResponse } from "~/types/api/job-offers";
import type { IJobFinderPage } from "~/types/api/job-finder-page";
import type { IJobConfiguration } from "~/types/api/job-configuration";
import type { Locale } from "~/misc/locales";
import {
  blocks as blocksPopulate,
  seo as seoPopulate,
} from "@/misc/strapiPopulate";
import SortJobOfferts from "~/components/commons/SortJobOfferts.vue";
import InputText from "~/components/form/input/InputText.vue";
import BaseModal from "~/components/modals/BaseModal.vue";
import JobFiltersModal from "~/components/modals/JobFiltersModal.vue";
import InputCheckbox from "~/components/form/input/InputCheckbox.vue";
import InputRadio from "~/components/form/input/InputRadio.vue";
import InputRange from "~/components/form/input/InputRange.vue";

const footerModal = ref<HTMLElement | null>(null);
const { height: footerModalHeight } = useElementSize(footerModal);

const pageSuffix = "pages.working_livigno";
const { findOne } = useStrapi();
const client = useStrapiClient();
const { locale } = useI18n();

const clearSearchField = ref<boolean>(false);
function clearFieldAndSearch() {
  clearSearchField.value = true;
  clearFilters();
}

const {
  resetPagination,
  updatePagination,
  clearFilters,
  setCheckboxFilter,
  setRadioFilter,
  setRangeFilter,
  filterJobByName,
  setSort,
  isClearAllFilters,
  activeFilters,
  query,
} = useJobFilters();

const { data: pageData } = await useAsyncData("job-finder-page", () => {
  return findOne<IJobFinderPage>("job-finder-page", undefined, {
    populate: [...blocksPopulate, ...seoPopulate],
    locale: locale.value as Locale,
  });
});
const showFiltersModal = ref<boolean>(false);

function fetchJobOffers() {
  return client<IJobOffersResponse>(`job-offers/search?${query()}`, {
    query: {
      populate: "*",
      locale: locale.value as Locale,
      q: activeFilters.name,
    },
  });
}
const { data: jobOffers, refresh: refreshJobOffers } = await useAsyncData(
  "job-offers",
  () => fetchJobOffers(),
);

watch(activeFilters, async () => {
  resetPagination();
  await refreshJobOffers();
  clearSearchField.value && (clearSearchField.value = false);
});
async function fetchMoreJobOffers() {
  updatePagination();
  const otherJobOffers = await fetchJobOffers();
  jobOffers.value?.data.push(...otherJobOffers.data);
}

interface IOffsetWithCount extends MetaResponsePaginationByOffset {
  count: number;
}
const totalJobOffers = computed(
  () => (jobOffers.value?.meta?.pagination as IOffsetWithCount).count || 0,
);

const { data: filtersFields } = await useAsyncData<IJobConfiguration>(
  "filters-fields",
  () =>
    client<IJobConfiguration>("job-offers/configuration", {
      query: {
        locale: locale.value as Locale,
      },
    }),
);

type TView = "grid" | "list";
const cardView = ref<TView>("grid");
function switchCardView(view: TView) {
  cardView.value = view;
}

const debouncedSearch = useDebounceFn(filterJobByName, 500, { maxWait: 5000 });
const debouncedRange = useDebounceFn(setRangeFilter, 300, { maxWait: 5000 });

const blocks = computed(() => pageData.value?.data.attributes.blocks ?? []);

const seo = computed(() => pageData.value?.data.attributes.seo);
useStrapiSeo(seo);
</script>
