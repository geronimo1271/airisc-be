<template>
  <div class="mt-7">
    <div class="p-float-label">
      <PInputText
        :id="`${formName}-${field}`"
        v-model="value"
        :type="type"
        size="large"
        :class="errorMessage && 'invalid'"
        :aria-describedby="`${formName}-${field}-text_error`"
        @input="emit('onInput', ($event.target as HTMLInputElement)?.value)"
        @blur="validateOnBlur"
      />
      <label
        :for="`${formName}-${field}`"
        :class="[errorMessage && 'invalid', !!value && 'opacity-0']"
      >
        {{ label }}
      </label>
      <slot name="right-input" />
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
import type { IProps } from "~/types/components/input/input-text";
const {
  isRequired = true,
  formName,
  type = "text",
  field,
  label,
  resetInput = false,
} = defineProps<IProps>();

const { validateRequiredField, validateEmailField } = useValidateFn(isRequired);

const isEmail = computed(() => type === "email");
const validateFn = computed(() =>
  isEmail.value ? validateEmailField : validateRequiredField,
);

const { value, errorMessage } = useField(
  () => field,
  (value: Nullable<string>) => validateFn.value(value),
);

function validateOnBlur() {
  if (!value.value) value.value = "";
}

watch(
  () => resetInput,
  (newValue) => {
    if (newValue) value.value = "";
  },
);

const emit = defineEmits<{
  (e: "onInput", value: string): void;
}>();
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
  @apply left-[32px] text-xs-2 text-grey-400;
}
label.invalid {
  @apply text-red-700;
}
</style>
