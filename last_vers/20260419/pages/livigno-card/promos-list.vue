<template>
  <div aria-labelledby="livigno-card-page">
    <section class="my-20 px-4 lg:my-28 lg:px-8">
      <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
        <PageHead
          :title="pageData?.data.attributes.title"
          title-id="livigno-card-page"
          :description="pageData?.data.attributes.text"
        />
      </div>
    </section>

    <section class="my-20 px-4 lg:my-28 lg:px-8">
      <div
        class="relative mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8"
      >
        <!-- DESKTOP FILTERS -->
        <FiltersCol
          class="col-span-12 hidden lg:col-span-3 lg:block"
          @on-reset-click="clearFilters"
        >
          <section class="mt-5">
            <span class="text-m-1 font-bold text-blue-500">
              {{ $t(`${pageSuffix}.filters.area`) }}
            </span>

            <ul>
              <li
                v-for="category in promoCategories?.data"
                :key="category.attributes.code"
                class="mt-2"
              >
                <button
                  type="button"
                  class="flex flex-nowrap items-center"
                  @click="toggleCategory(category.attributes.code)"
                >
                  <span class="mr-2 text-xs-3 font-medium text-grey-900">
                    {{ category.attributes.name[locale as Locale] }}
                  </span>
                  <SvgIcon
                    name="arrow-down"
                    class="shrink-0 transition-all duration-500 ease-in-out"
                    :class="
                      openCategories.includes(category.attributes.code) &&
                      'rotate-180'
                    "
                  />
                </button>
                <div
                  class="h-auto overflow-hidden transition-all duration-500 ease-in-out"
                  :class="
                    openCategories.includes(category.attributes.code)
                      ? 'max-h-[2000px]'
                      : 'max-h-[0px]'
                  "
                >
                  <ul class="pl-5">
                    <li class="mt-2">
                      <PromoFilterCheckbox
                        :input-id="`desktop-${category.attributes.code}-select-all`"
                        :group="category.attributes.code"
                        :input-value="`${category.attributes.code}`"
                        group-value="selectAll"
                        :label="$t(`${pageSuffix}.filters.select_all`)"
                        :clear-value="clearFiltersValue"
                        :preselected="
                          activeFilters.selectAll.includes(
                            category.attributes.code,
                          )
                        "
                        @on-change="setFilter"
                      />
                    </li>
                    <li
                      v-for="subCategory in category.attributes.subcategories
                        ?.data"
                      :key="subCategory.attributes.code"
                      class="mt-2"
                    >
                      <PromoFilterCheckbox
                        :input-id="`desktop-${subCategory.attributes.code}`"
                        :group="category.attributes.code"
                        :input-value="subCategory.attributes.code"
                        group-value="area"
                        :label="subCategory.attributes.name[locale as Locale]"
                        :clear-value="clearFiltersValue"
                        :seletc-all-by-category="
                          activeFilters.selectAll.includes(
                            category.attributes.code,
                          )
                        "
                        :clear-all-by-category="
                          !activeFilters.selectAll.includes(
                            category.attributes.code,
                          )
                        "
                        :preselected="
                          activeFilters.area.includes(
                            subCategory.attributes.code,
                          )
                        "
                        @on-change="setFilter"
                      />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
          <section class="mt-5">
            <span class="text-m-1 font-bold text-blue-500">
              {{ $t(`${pageSuffix}.filters.typology`) }}
            </span>

            <ul>
              <li
                v-for="typology in promoTypologies?.data"
                :key="typology.attributes.code"
                class="mt-2"
              >
                <PromoFilterCheckbox
                  :input-id="`desktop-${typology.attributes.code}`"
                  :group="typology.attributes.code"
                  :input-value="typology.attributes.code"
                  group-value="typology"
                  :label="typology.attributes.name[locale as Locale]"
                  :clear-value="clearFiltersValue"
                  :preselected="
                    activeFilters.typology.includes(typology.attributes.code)
                  "
                  @on-change="setFilter"
                />
              </li>
            </ul>
          </section>
        </FiltersCol>

        <!-- GRID CARDS -->
        <section class="col-span-12 lg:col-span-9">
          <div>
            <p class="text-xs-3 font-medium text-blue-500">
              {{
                $t(`${pageSuffix}.total_promos`, {
                  totPromos: totalPromos,
                })
              }}
            </p>
            <div class="mt-6 lg:hidden">
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
          </div>
          <div
            v-if="promos?.data.length"
            class="grid grid-cols-9 gap-x-4 gap-y-6 lg:mt-10 lg:gap-x-8"
          >
            <PromoCards
              class="col-span-12 lg:col-span-9"
              grid="grid-cols-12"
              cols="col-span-12 xs2:col-span-6 sm:col-span-4"
              :cards="promos"
            />

            <div
              v-if="totalPromos > promos.data.length"
              class="col-span-12 mt-5 text-center lg:col-span-9"
            >
              <p class="text-xs-3 font-medium text-black">
                {{
                  $t(`${pageSuffix}.summary_of_promos_viewed`, {
                    currentViewed: promos.data.length,
                    totPromos: totalPromos,
                  })
                }}
              </p>
              <button
                type="button"
                class="btn-secondary mt-4"
                @click="fetchMorePromos"
              >
                {{ $t(`${pageSuffix}.upload_promos`) }}
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
    </section>
    <DynamicBlock
      v-for="(block, index) in blocks"
      :key="`block-${index}`"
      :block-data="block"
    />

    <!-- MOIBILE FILTERS -->
    <BaseModal
      :show="showFiltersModal"
      :title="$t('promos_filters_modal.title')"
      :full-screen-on-mobile="true"
      :header-bordered="true"
      @close-modal="showFiltersModal = !showFiltersModal"
    >
      <template #content>
        <main :style="{ paddingBottom: `${footerModalHeight + 40}px` }">
          <section class="mt-5">
            <span class="text-m-1 font-bold text-blue-500">
              {{ $t(`${pageSuffix}.filters.area`) }}
            </span>

            <ul>
              <li
                v-for="category in promoCategories?.data"
                :key="category.attributes.code"
                class="mt-2"
              >
                <button
                  type="button"
                  class="flex flex-nowrap items-center"
                  @click="toggleCategory(category.attributes.code)"
                >
                  <span class="mr-2 text-xs-3 font-medium text-grey-900">
                    {{ category.attributes.name[locale as Locale] }}
                  </span>
                  <SvgIcon
                    name="arrow-down"
                    class="shrink-0 transition-all duration-500 ease-in-out"
                    :class="
                      openCategories.includes(category.attributes.code) &&
                      'rotate-180'
                    "
                  />
                </button>
                <div
                  class="h-auto overflow-hidden transition-all duration-500 ease-in-out"
                  :class="
                    openCategories.includes(category.attributes.code)
                      ? 'max-h-[2000px]'
                      : 'max-h-[0px]'
                  "
                >
                  <ul class="pl-5">
                    <li class="mt-2">
                      <PromoFilterCheckbox
                        :input-id="`mobile-${category.attributes.code}-select-all`"
                        :group="category.attributes.code"
                        :input-value="`${category.attributes.code}`"
                        group-value="selectAll"
                        :label="$t(`${pageSuffix}.filters.select_all`)"
                        :clear-value="clearFiltersValue"
                        :preselected="
                          activeFilters.selectAll.includes(
                            category.attributes.code,
                          )
                        "
                        @on-change="setFilter"
                      />
                    </li>
                    <li
                      v-for="subCategory in category.attributes.subcategories
                        ?.data"
                      :key="subCategory.attributes.code"
                      class="mt-2"
                    >
                      <PromoFilterCheckbox
                        :input-id="`mobile-${subCategory.attributes.code}`"
                        :group="category.attributes.code"
                        :input-value="subCategory.attributes.code"
                        group-value="area"
                        :label="subCategory.attributes.name[locale as Locale]"
                        :clear-value="clearFiltersValue"
                        :seletc-all-by-category="
                          activeFilters.selectAll.includes(
                            category.attributes.code,
                          )
                        "
                        :clear-all-by-category="
                          !activeFilters.selectAll.includes(
                            category.attributes.code,
                          )
                        "
                        :preselected="
                          activeFilters.area.includes(
                            subCategory.attributes.code,
                          )
                        "
                        @on-change="setFilter"
                      />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
          <section class="mt-5">
            <span class="text-m-1 font-bold text-blue-500">
              {{ $t(`${pageSuffix}.filters.typology`) }}
            </span>

            <ul>
              <li
                v-for="typology in promoTypologies?.data"
                :key="typology.attributes.code"
                class="mt-2"
              >
                <PromoFilterCheckbox
                  :input-id="`mobile-${typology.attributes.code}`"
                  :group="typology.attributes.code"
                  :input-value="typology.attributes.code"
                  group-value="typology"
                  :label="typology.attributes.name[locale as Locale]"
                  :clear-value="clearFiltersValue"
                  :preselected="
                    activeFilters.typology.includes(typology.attributes.code)
                  "
                  @on-change="setFilter"
                />
              </li>
            </ul>
          </section>
        </main>
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
            {{ $t("promos_filters_modal.show_results") }}
          </button>
          <button
            type="button"
            class="mt-3 text-xs-3 font-medium text-red-700"
            @click="clearFilters"
          >
            {{ $t(`${pageSuffix}.filters.reset`) }}
          </button>
        </section>
      </template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import type { PaginationByOffset } from "@nuxtjs/strapi/dist/runtime/types";
import type { IPromo, ICategory, ITypology } from "~/types/api/promo";
import type { Locale } from "~/misc/locales";
import type {
  IPromosListPage,
  IActiveFilters,
} from "~/types/api/promos-list-page";
import {
  blocks as blocksPopulate,
  seo as seoPopulate,
} from "@/misc/strapiPopulate";
import PromoFilterCheckbox from "~/components/form/input/PromoFilterCheckbox.vue";
import BaseModal from "~/components/modals/BaseModal.vue";

const footerModal = ref<HTMLElement | null>(null);
const { height: footerModalHeight } = useElementSize(footerModal);

const pageSuffix = "pages.promos_list";
const { find, findOne } = useStrapi();
const { locale } = useI18n();

const showFiltersModal = ref<boolean>(false);

const openCategories = ref<string[]>([]);
function toggleCategory(category: string) {
  const categoryIndex = openCategories.value.indexOf(category);
  if (categoryIndex > -1) {
    openCategories.value.splice(categoryIndex, 1);
  } else {
    openCategories.value.push(category);
  }
}

const { data: pageData } = await useAsyncData("promos-page", () => {
  return findOne<IPromosListPage>("promos-page", undefined, {
    populate: [...blocksPopulate, ...seoPopulate],
    locale: locale.value as Locale,
  });
});

const activeFilters = ref<IActiveFilters>({
  area: [],
  typology: [],
  selectAll: [],
});

const offset = 18;
const pagination = reactive<PaginationByOffset>({
  start: 0,
  limit: offset,
});
function fetchPromos() {
  return find<IPromo>("promos", {
    populate: "*",
    locale: locale.value as Locale,
    pagination,
    sort: "createdAt:desc",
    filters: {
      $and: [
        {
          subcategories: {
            code: {
              $in: activeFilters.value.area,
            },
          },
        },
        {
          typologies: {
            code: {
              $in: activeFilters.value.typology,
            },
          },
        },
      ],
    },
  });
}
const { data: promos, refresh: refreshPromos } = await useAsyncData(
  "promos",
  () => fetchPromos(),
);

const totalPromos = computed(() => promos.value?.meta.pagination.total ?? 0);
async function fetchMorePromos() {
  pagination.start += offset;
  const otherPromos = await fetchPromos();
  promos.value?.data.push(...otherPromos.data);
}

const { data: promoCategories } = await useAsyncData("promo-categories", () =>
  find<ICategory>("promo-categories", {
    populate: ["subcategories"],
    locale: locale.value as Locale,
  }),
);

const { data: promoTypologies } = await useAsyncData("promo-typologies", () =>
  find<ITypology>("promo-typologies", {
    populate: "*",
    locale: locale.value as Locale,
  }),
);

const clearFiltersValue = ref<boolean>(false);
function setAllCategoryFilters(value: string) {
  const category = promoCategories.value?.data.find(
    (category) => category.attributes.code === value,
  );

  if (activeFilters.value.selectAll.includes(value)) {
    category?.attributes.subcategories?.data.forEach((subCat) => {
      const subCatIndex = activeFilters.value.area.indexOf(
        subCat.attributes.code,
      );

      if (subCatIndex <= -1) {
        activeFilters.value.area.push(subCat.attributes.code as never);
      }
    });
  } else {
    const allSubCat = category?.attributes.subcategories?.data.map(
      (subCat) => subCat.attributes.code,
    );

    activeFilters.value.area = activeFilters.value.area.filter(
      (subCat) => !allSubCat?.includes(subCat),
    );
  }
}
function setFilter(groupValue: keyof IActiveFilters, value: string) {
  clearFiltersValue.value && (clearFiltersValue.value = false);
  const itemIndex = activeFilters.value[groupValue].indexOf(value as never);
  if (itemIndex > -1) {
    activeFilters.value[groupValue].splice(itemIndex, 1);
  } else {
    activeFilters.value[groupValue].push(value as never);
  }

  if (groupValue === "selectAll") {
    setAllCategoryFilters(value);
  }

  refreshPromos();
}

function clearFilters() {
  activeFilters.value = {
    area: [],
    typology: [],
    selectAll: [],
  };
  clearFiltersValue.value = true;
  pagination.start = 0;
  refreshPromos();
}

const blocks = computed(() => pageData.value?.data.attributes.blocks ?? []);

const seo = computed(() => pageData.value?.data.attributes.seo);
useStrapiSeo(seo);
</script>
