<template>
  <div class="mt-7">
    <div class="p-float-label">
      <PDropdown
        v-model="value"
        :input-id="`${formName}-${field}`"
        :options="items"
        option-label="label"
        size="large"
        :auto-option-focus="false"
        :class="errorMessage && 'invalid'"
        :aria-describedby="`${formName}-${field}-text_error`"
        @blur="validateOnBlur"
      />
      <label
        :for="`${formName}-${field}`"
        :class="[errorMessage && 'invalid', !!value && 'opacity-0']"
      >
        {{ label }}
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
import type {
  IProps,
  IItemSector,
} from "~/types/components/input/input-select";

const {
  isRequired = true,
  formName,
  label,
  field,
  items,
  preselectedItem = undefined,
} = defineProps<IProps>();

const { validateRequiredField } = useValidateFn(isRequired);
const { value, errorMessage } = useField(
  () => field,
  (value: IItemSector | undefined) => validateRequiredField(value),
);

function validateOnBlur() {
  if (!value.value) value.value = undefined;
}

onMounted(() => {
  if (preselectedItem) {
    value.value = items.filter((item) => item.value === preselectedItem)[0];
  }
});
</script>

<style scoped>
:deep(*) {
  @apply shadow-none;
}

:deep(.p-dropdown) {
  @apply w-full	rounded-xl border border-solid border-blue-500 bg-white px-8 py-5 focus:border-blue-500/[.6] focus:shadow-input;
}

:deep(.p-inputwrapper-focus) {
  @apply border-blue-500/[.6] shadow-input;
}
:deep(.p-inputwrapper-focus + label) {
  @apply opacity-0;
}

:deep(.p-dropdown-label) {
  @apply p-0;
}

.invalid {
  @apply border-red-700;
}

label {
  @apply left-[32px] text-xs-2 text-grey-400;
}
label.invalid {
  @apply text-red-700;
}
</style>
