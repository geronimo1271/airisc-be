<template>
  <div class="mt-6">
    <InputCheckbox
      form-name="mobile-filters"
      field="work_sector"
      :label="$t(`${translateSuffix}.filters.labels.work_sector`)"
      :items="filtersFields?.work_sector || []"
      :is-required="false"
      :clear_all="isClearAllFilters"
      :preselected="activeFilters?.work_sector"
      @on-change="
        (
          isChecked: boolean,
          field: keyof Omit<IJobFilters, 'gross_salary'>,
          value: string,
        ) => emit('onCheckboxChange', isChecked, field, value)
      "
    />
    <InputRadio
      form-name="mobile-filters"
      field="contract_type"
      :label="$t(`${translateSuffix}.filters.labels.contract_type`)"
      :items="filtersFields?.contract_type || []"
      :is-required="false"
      :clear_all="isClearAllFilters"
      :preselected="activeFilters?.contract_type"
      @on-change="
        (field: keyof Omit<IJobFilters, 'gross_salary'>, value: string) =>
          emit('onRadioChange', field, value)
      "
    />
    <InputRadio
      form-name="mobile-filters"
      field="experience_level"
      :label="$t(`${translateSuffix}.filters.labels.experience_level`)"
      :items="filtersFields?.experience_level || []"
      :is-required="false"
      :clear_all="isClearAllFilters"
      :preselected="activeFilters?.experience_level"
      @on-change="
        (field: keyof Omit<IJobFilters, 'gross_salary'>, value: string) =>
          emit('onRadioChange', field, value)
      "
    />
    <InputRange
      form-name="mobile-filters"
      field="gross_salary"
      :label="$t(`${translateSuffix}.filters.labels.gross_salary`)"
      :reset="isClearAllFilters"
      :init-values="
        activeFilters?.gross_salary.length
          ? activeFilters?.gross_salary
          : [15000, 150000]
      "
      @on-change="
        (values: TInitValues, field: keyof IJobFilters) =>
          emit('onRangeChange', values, field)
      "
    />
    <InputCheckbox
      form-name="mobile-filters"
      field="education_level"
      :label="$t(`${translateSuffix}.filters.labels.education_level`)"
      :items="filtersFields?.education_level || []"
      :is-required="false"
      :clear_all="isClearAllFilters"
      :preselected="activeFilters?.education_level"
      @on-change="
        (
          isChecked: boolean,
          field: keyof Omit<IJobFilters, 'gross_salary'>,
          value: string,
        ) => emit('onCheckboxChange', isChecked, field, value)
      "
    />
    <InputCheckbox
      form-name="mobile-filters"
      field="languages"
      :label="$t(`${translateSuffix}.filters.labels.languages`)"
      :items="filtersFields?.languages || []"
      :is-required="false"
      :clear_all="isClearAllFilters"
      :preselected="activeFilters?.languages"
      @on-change="
        (
          isChecked: boolean,
          field: keyof Omit<IJobFilters, 'gross_salary'>,
          value: string,
        ) => emit('onCheckboxChange', isChecked, field, value)
      "
    />
    <InputCheckbox
      form-name="mobile-filters"
      field="benefits"
      :label="$t(`${translateSuffix}.filters.labels.benefits`)"
      :items="filtersFields?.benefits || []"
      :is-required="false"
      :clear_all="isClearAllFilters"
      :preselected="activeFilters?.benefits"
      @on-change="
        (
          isChecked: boolean,
          field: keyof Omit<IJobFilters, 'gross_salary'>,
          value: string,
        ) => emit('onCheckboxChange', isChecked, field, value)
      "
    />
    <InputCheckbox
      form-name="mobile-filters"
      field="work_environment"
      :label="$t(`${translateSuffix}.filters.labels.work_environment`)"
      :items="filtersFields?.work_environment || []"
      :is-required="false"
      :clear_all="isClearAllFilters"
      :preselected="activeFilters?.work_environment"
      @on-change="
        (
          isChecked: boolean,
          field: keyof Omit<IJobFilters, 'gross_salary'>,
          value: string,
        ) => emit('onCheckboxChange', isChecked, field, value)
      "
    />
  </div>
</template>

<script setup lang="ts">
import InputCheckbox from "../form/input/InputCheckbox.vue";
import InputRadio from "../form/input/InputRadio.vue";
import InputRange from "../form/input/InputRange.vue";
import type { IProps } from "~/types/components/modals/job-filters-modal";
import type { IJobFilters } from "~/types/api/job-configuration";
import type { TInitValues } from "~/types/components/input/input-range";

const { translateSuffix, filtersFields, isClearAllFilters, activeFilters } =
  defineProps<IProps>();

const emit = defineEmits<{
  (
    e: "onCheckboxChange",
    isChecked: boolean,
    field: keyof Omit<IJobFilters, "gross_salary">,
    value: string,
  ): void;
  (
    e: "onRadioChange",
    field: keyof Omit<IJobFilters, "gross_salary">,
    value: string,
  ): void;
  (e: "onRangeChange", values: TInitValues, field: keyof IJobFilters): void;
}>();
</script>
