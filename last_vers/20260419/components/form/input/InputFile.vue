<template>
  <div class="mt-7">
    <div
      :aria-describedby="`${formName}-${field}-text_error`"
      class="relative overflow-hidden rounded-xl border border-dashed bg-white p-5"
      :class="showFileError ? 'border-error' : 'border-black/[.2]'"
    >
      <PFileUpload
        :name="field"
        :accept="acceptedFormats"
        :max-file-size="maxFileSize"
        @select="onSelect"
      >
        <template #content="{ files }">
          <div
            v-if="files.length"
            class="flex items-center justify-center pb-5"
          >
            <span class="text-xs-3 font-medium text-grey-900">
              {{ files[0].name }}
            </span>
            <SvgIcon name="pdf" class="ml-2" />
          </div>
        </template>
        <template #empty>
          <div
            class="flex h-full w-full flex-col items-center justify-start pb-5 text-center"
          >
            <span class="text-xs-3 font-medium text-grey-900">{{ label }}</span>
            <span class="mt-3 text-xs-1 font-bold text-black">
              {{ $t("form.job_application.file.cv_subtitle") }}
            </span>
          </div>
        </template>
        <template #header="{ chooseCallback }">
          <div>
            <button
              type="button"
              class="btn-primary white z-40"
              @click="chooseCallback()"
            >
              {{ $t("form.job_application.file.cv_button") }}
            </button>
          </div>
        </template>
      </PFileUpload>
    </div>

    <small
      v-if="showFileError"
      :id="`${formName}-${field}-text_error`"
      class="text-red-700"
      v-html="$t('form.error_messages.required')"
    />
  </div>
</template>

<script setup lang="ts">
import type { FileUploadSelectEvent } from "primevue/fileupload";
import type { IProps } from "~/types/components/input/input-file";

const {
  isRequired = true,
  formName,
  field,
  label,
  acceptedFormats = ".pdf",
  maxFileSize = 1000000,
  showFileError,
} = defineProps<IProps>();

const emit = defineEmits<{
  (e: "onComponentMount", isRequired: boolean): void;
  (e: "onFileSelected", fileSelected: File): void;
}>();
onMounted(() => {
  emit("onComponentMount", isRequired);
});

const onSelect = ($event: FileUploadSelectEvent) => {
  emit("onFileSelected", $event.files[0]);
};
</script>

<style scoped>
:deep(.p-fileupload) {
  @apply flex flex-col;
}

:deep(.p-fileupload-buttonbar) {
  @apply justify-center bg-white p-0;
}

:deep(.p-fileupload-content) {
  @apply order-first p-0;
}

:deep(.p-fileupload-empty) {
  @apply h-full w-full;
}
</style>
