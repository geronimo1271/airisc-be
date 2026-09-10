<template>
  <div class="mt-7">
    <div class="p-float-label">
      <PTextarea
        :id="`${formName}-${field}`"
        v-model="value"
        size="large"
        class="resize-none"
        :class="errorMessage && 'invalid'"
        :rows="rows"
        :cols="cols"
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
import type { IProps } from "~/types/components/input/input-textarea";
const {
  isRequired = true,
  formName,
  field,
  label,
  rows = 5,
  cols = 5,
} = defineProps<IProps>();

const { validateRequiredField } = useValidateFn(isRequired);

const { value, errorMessage } = useField(
  () => field,
  (value: string) => validateRequiredField(value),
);

function validateOnBlur() {
  if (!value.value) value.value = "";
}
</script>

<style scoped>
:deep(.p-inputtext) {
  @apply w-full	rounded-xl border border-solid border-blue-500 bg-white px-8 py-5 focus:border-blue-500/[.6] focus:shadow-input;
}
:deep(.p-inputtext.invalid) {
  @apply border-error focus:shadow-input-invalid;
}

:deep(.p-inputtext:focus + label) {
  @apply opacity-0;
}

label {
  @apply left-[32px] top-8 text-xs-2 text-grey-400;
}
label.invalid {
  @apply text-red-700;
}
</style>
