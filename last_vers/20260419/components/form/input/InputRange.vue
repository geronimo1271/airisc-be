<template>
  <div class="mt-7">
    <label
      :id="`${formName}-${field}`"
      class="mb-2 text-m-1 font-bold text-blue-500"
    >
      {{ label }} {{ formatOnCurrencyNumber(value?.[0]) }} -
      {{ formatOnCurrencyNumber(value?.[1]) }}
    </label>
    <div class="justify-content-center mt-5 flex">
      <PSlider
        v-model="value"
        :aria-labelledby="`${formName}-${field}`"
        range
        :min="min"
        :max="max"
        :step="step"
        class="w-full"
        @change="emitValue($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProps, TInitValues } from "~/types/components/input/input-range";
import type { IJobFilters } from "~/types/api/job-configuration";

const {
  formName,
  field,
  label,
  min = 15000,
  max = 150000,
  step = 1000,
  initValues = [15000, 150000],
  reset = false,
} = defineProps<IProps>();

const value = ref(initValues);

function formatOnCurrencyNumber(num: number | undefined) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    maximumFractionDigits: 0,
    currency: "EUR",
  }).format(num || 0);
}

const emit = defineEmits<{
  (e: "onChange", values: TInitValues, field: keyof IJobFilters): void;
}>();
const emitValue = useDebounceFn(
  (value) => {
    emit("onChange", value, field as keyof IJobFilters);
  },
  300,
  { maxWait: 5000 },
);

watch(
  () => reset,
  (newValue) => {
    if (newValue) value.value = initValues;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped>
:deep(.p-slider-handle) {
  @apply h-[16px] w-[16px] rounded-[50%] bg-yellow-500;
}

:deep(.p-slider-range) {
  @apply bg-yellow-500;
}
</style>
