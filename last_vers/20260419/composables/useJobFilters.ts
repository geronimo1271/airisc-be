import * as qs from "qs";
import type {
  Strapi4ResponseMany,
  PaginationByOffset,
} from "@nuxtjs/strapi/dist/runtime/types";
import type { IJobOffer } from "~/types/api/job-offers";
import type {
  IJobFilters,
  TItemConfigValue,
} from "~/types/api/job-configuration";
import type { TInitValues } from "~/types/components/input/input-range";
import type { TSortMode } from "~/types/components/sort-job-offerts";

export type TFiltered = Pick<Strapi4ResponseMany<IJobOffer>, "data">;

export const useJobFilters = () => {
  const offset = 12;
  const pagination = reactive<PaginationByOffset>({
    start: 0,
    limit: offset,
  });
  function resetPagination() {
    pagination.start = 0;
    pagination.limit = offset;
  }

  type TSort =
    | "publishedAt:desc"
    | "publishedAt:asc"
    | "name:desc"
    | "name:asc";
  interface ICompleteFilters extends IJobFilters {
    name: string;
    sort: TSort;
  }
  const activeFilters = reactive<ICompleteFilters>({
    sort: "publishedAt:desc",
    name: "",
    contract_type: [],
    work_sector: [],
    experience_level: [],
    gross_salary: [],
    education_level: [],
    languages: [],
    benefits: [],
    work_environment: [],
  });

  const isClearAllFilters = ref<boolean>(false);

  function updatePagination() {
    pagination.start += offset;
  }

  function clearFilters() {
    isClearAllFilters.value = true;

    resetPagination();
    activeFilters.name = "";
    Object.keys(activeFilters).forEach((key) => {
      if (key !== "sort" && key !== "name") {
        activeFilters[key as keyof IJobFilters] = [];
      }
    });
  }

  function setCheckboxFilter(
    isChecked: boolean,
    field: keyof Omit<IJobFilters, "gross_salary">,
    value: TItemConfigValue,
  ) {
    isClearAllFilters.value && (isClearAllFilters.value = false);

    if (isChecked) activeFilters[field]?.push(value);
    else
      activeFilters[field] = activeFilters[field]?.filter(
        (item) => item !== value,
      );
  }

  function setRadioFilter(
    field: keyof Omit<IJobFilters, "gross_salary">,
    value: TItemConfigValue,
  ) {
    isClearAllFilters.value && (isClearAllFilters.value = false);
    activeFilters[field] = [value];
  }

  function setRangeFilter(value: TInitValues, field: keyof IJobFilters) {
    isClearAllFilters.value && (isClearAllFilters.value = false);
    activeFilters[field] = value;
  }

  function filterJobByName(name: string) {
    activeFilters.name = name;
  }

  function setSort(mode: TSortMode) {
    let sort: TSort;
    switch (mode) {
      case "recent":
        sort = "name:desc";
        break;
      case "older":
        sort = "name:asc";
        break;
      case "alphaAZ":
        sort = "name:asc";
        break;
      case "alphaZA":
        sort = "name:desc";
        break;
      default:
        sort = "name:desc";
    }

    activeFilters.sort = sort;
  }

  const query = () =>
    qs.stringify(
      {
        pagination,
        sort: [activeFilters.sort],
        filters: {
          $and: [
            {
              benefits: {
                $contains: [...activeFilters.benefits],
              },
            },
            {
              languages: {
                $contains: [...activeFilters.languages],
              },
            },
            {
              education_level: {
                $in: [...activeFilters.education_level],
              },
            },
            {
              experience_level: {
                $eq: activeFilters.experience_level[0] || undefined,
              },
            },
            {
              work_sector: {
                id: {
                  $in: [...activeFilters.work_sector],
                },
              },
            },
            {
              gross_salary: {
                $gte: activeFilters.gross_salary[0] || undefined,
                $lte: activeFilters.gross_salary[1] || undefined,
              },
            },
            {
              contract_type: {
                $eq: activeFilters.contract_type[0] || undefined,
              },
            },
            {
              work_environment: {
                $contains: [...activeFilters.work_environment],
              },
            },
          ],
        },
      },
      {
        encodeValuesOnly: true,
      },
    );

  const relatedJobOffersQuery = (
    currentJobOfferId: number | undefined,
    relatedExperienceLevel: string | undefined,
    relatedWorkSector: number | undefined,
  ) =>
    qs.stringify(
      {
        sort: ["publishedAt:desc"],
        pagination: {
          start: 0,
          limit: 30,
        },
        filters: {
          $and: [
            {
              id: {
                $not: currentJobOfferId,
              },
            },
            {
              experience_level: {
                $eq: relatedExperienceLevel || undefined,
              },
            },
            {
              work_sector: {
                id: {
                  $eq: relatedWorkSector,
                },
              },
            },
          ],
        },
      },
      {
        encodeValuesOnly: true,
      },
    );
  return {
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
    relatedJobOffersQuery,
  };
};
