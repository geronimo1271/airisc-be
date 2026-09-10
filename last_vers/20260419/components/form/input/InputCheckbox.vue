<template>
  <div class="mt-7">
    <p class="mb-2 text-m-1 font-bold text-blue-500">{{ label }}</p>
    <div
      v-for="(item, index) of items"
      :key="`${formName}-${field}-${item.label}`"
      class="flex items-start"
      :class="index > 0 && 'mt-2'"
    >
      <PCheckbox
        v-model="value"
        :input-id="`${formName}-${field}-${item.label}`"
        :name="field"
        :value="item"
        :aria-describedby="`${formName}-${field}-text_error`"
        @change="
          ($event: Event) =>
            $emit(
              'onChange',
              ($event.target as HTMLInputElement)?.checked,
              field,
              item.value,
            )
        "
      />
      <label
        :for="`${formName}-${field}-${item.label}`"
        class="-mt-[2px] ml-2 text-xs-3 text-grey-900"
        :class="cbLabelClasses"
      >
        {{ item.label }}
      </label>
    </div>
    <small
      v-if="errorMessage"
      :id="`${formName}-${field}-text_error`"
      class="text-red-700"
      v-html="errorMessage"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/input/input-checkbox";
import type { TItemConfig } from "~/types/api/job-configuration";
const {
  isRequired = true,
  formName,
  label,
  field,
  items,
  cbLabelClasses = "",
  preselected = undefined,
  select_all = false,
  clear_all = false,
} = defineProps<IProps>();

const { validateRequiredField } = useValidateFn(isRequired);
const { value, errorMessage } = useField(
  () => field,
  (value: TItemConfig[]) => validateRequiredField(value),
);

watch(
  () => preselected?.length,
  (newLength) => {
    if (typeof newLength === "undefined") return;
    if (!newLength) return (value.value = []);

    const preselectedItems = items.filter(
      (item) => preselected?.includes(item.value),
    );

    value.value = preselectedItems;
  },
  {
    immediate: true,
  },
);
watch(
  () => select_all,
  (newValue) => {
    if (newValue) value.value = items;
  },
  {
    immediate: true,
  },
);
watch(
  () => clear_all,
  (newValue) => {
    if (newValue) value.value = [];
  },
  {
    immediate: true,
  },
);
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
