<template>
  <div class="mt-7">
    <p class="mb-2 text-m-1 font-bold text-blue-500">{{ label }}</p>
    <div
      v-for="(item, index) of items"
      :key="`${formName}-${field}-${item.label}`"
      class="flex items-start"
      :class="index > 0 && 'mt-2'"
    >
      <PRadioButton
        v-model="value"
        :input-id="`${formName}-${field}-${item.label}`"
        :name="field"
        :value="item"
        :aria-describedby="`${formName}-${field}-text_error`"
        @change="() => $emit('onChange', field, item.value)"
      />
      <label
        :for="`${formName}-${field}-${item.label}`"
        class="ml-2 text-xs-3 text-grey-900"
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
import type { IProps } from "~/types/components/input/input-radio";
import type { TItemConfig } from "~/types/api/job-configuration";

const {
  isRequired = true,
  formName,
  label,
  field,
  items,
  preselected = undefined,
  clear_all = false,
} = defineProps<IProps>();

const { validateRequiredField } = useValidateFn(isRequired);
const { value, errorMessage } = useField(
  () => field,
  (value: TItemConfig | undefined) => validateRequiredField(value),
);

watch(
  () => preselected?.length,
  (newLength) => {
    if (typeof newLength === "undefined") return;
    if (!newLength) return (value.value = undefined);

    const preselectedItems = items.filter(
      (item) => preselected?.includes(item.value),
    );

    value.value = preselectedItems[0];
  },
  {
    immediate: true,
  },
);
watch(
  () => clear_all,
  (newValue) => {
    if (newValue) value.value = undefined;
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

:deep(.p-radiobutton-box) {
  @apply border-2 border-solid border-grey-200;
}

:deep(.p-radiobutton-box.p-highlight) {
  @apply border-blue-500 bg-white;
}

:deep(.p-radiobutton-icon) {
  @apply h-[10px] w-[10px];
}

:deep(.p-radiobutton-box.p-highlight .p-radiobutton-icon) {
  @apply bg-blue-500;
}
</style>
