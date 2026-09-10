<template>
  <div class="mt-7">
    <div class="p-float-label">
      <PInputNumber
        v-model="value"
        :input-id="`${formName}-${field}`"
        size="large"
        :input-class="errorMessage && 'invalid'"
        :aria-describedby="`${formName}-${field}-text_error`"
        :use-grouping="false"
        :min="min"
        :max="max"
        :prefix="prefix"
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
import type { Nullable } from "primevue/ts-helpers";
import type { IProps } from "~/types/components/input/input-number";
const {
  isRequired = true,
  formName,
  field,
  label,
  min = undefined,
  max = undefined,
  minDigits = undefined,
  maxDigits = undefined,
  prefix = undefined,
} = defineProps<IProps>();

const { validateRequiredField, validateDigits } = useValidateFn(isRequired);
const { value, errorMessage } = useField(
  () => field,
  (value: Nullable<number>) =>
    !minDigits && !maxDigits
      ? validateRequiredField(value)
      : validateDigits(value, minDigits, maxDigits),
);
</script>

<style scoped>
:deep(.p-inputnumber) {
  @apply w-full;
}

:deep(.p-inputtext) {
  @apply w-full	rounded-xl border border-solid border-blue-500 bg-white px-8 py-5 focus:border-blue-500/[.6] focus:shadow-input;
}
:deep(.p-inputtext.invalid) {
  @apply border-error focus:shadow-input-invalid;
}
:deep(.p-inputwrapper-focus + label) {
  @apply opacity-0;
}

label {
  @apply left-[32px] text-xs-2 text-grey-400;
}
label.invalid {
  @apply text-red-700;
}
</style>
