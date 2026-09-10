<template>
  <div class="flex items-start">
    <PCheckbox
      v-model="value"
      :name="group"
      :input-id="inputId"
      :value="inputValue"
      @change="emit('onChange', groupValue, inputValue)"
    />
    <label :for="inputId" class="-mt-[2px] ml-2 text-xs-3 text-grey-900">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/input/promo-filter-checkbox";
import type { IActiveFilters } from "~/types/api/promos-list-page";

const {
  inputId,
  group,
  groupValue,
  inputValue,
  label,
  clearValue,
  seletcAllByCategory,
  clearAllByCategory,
  preselected,
} = defineProps<IProps>();

const value = ref<string[]>();

watch(
  () => clearValue,
  (newValue) => {
    if (newValue) {
      value.value = [];
    }
  },
);
watch(
  () => seletcAllByCategory,
  (newValue) => {
    if (newValue) {
      value.value = [inputValue];
    }
  },
);
watch(
  () => clearAllByCategory,
  (newValue) => {
    if (newValue) {
      value.value = [];
    }
  },
);
watch(
  () => preselected,
  (newValue) => {
    if (newValue) {
      value.value = [inputValue];
    } else {
      value.value = [];
    }
  },
  { immediate: true },
);

const emit = defineEmits<{
  (e: "onChange", groupValue: keyof IActiveFilters, value: string): void;
}>();
</script>

<style scoped>
:deep(*) {
  @apply shadow-none;
}

:deep(.p-checkbox-box) {
  @apply h-[14px] w-[14px] border border-solid border-grey-100;
}

:deep(.p-checkbox) {
  @apply h-[14px] w-[14px] focus:shadow-input;
}

:deep(.p-checkbox-box.p-highlight) {
  @apply bg-blue-500;
}

:deep(.p-checkbox-icon) {
  @apply scale-50;
}

:deep(.p-checkbox-icon path) {
  @apply fill-white;
}
</style>
