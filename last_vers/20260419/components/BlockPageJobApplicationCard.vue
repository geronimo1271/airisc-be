<template>
  <section
    class="my-20 px-4 lg:my-28 lg:px-8"
    :aria-labelledby="`block-highlighted-text-${component_id}`"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div
        class="col-span-12 rounded-3xl p-10"
        :class="background_color === 'lavanda' && 'bg-blue-100'"
      >
        <h2 v-if="title">{{ title }}</h2>
        <div v-if="text" class="text-wrapper mt-6" v-html="text" />
        <div v-if="cta_label" class="mt-6" :class="alignButton">
          <button
            type="button"
            class="btn-primary"
            @click="isModalOpen = !isModalOpen"
          >
            {{ cta_label }}
          </button>
        </div>
      </div>
    </div>

    <BaseModal
      :show="isModalOpen"
      :title="$t('job_application_modal.title')"
      :description="$t('job_application_modal.subtitle')"
      @close-modal="isModalOpen = !isModalOpen"
    >
      <template #content>
        <JobApplicationForm
          class="mt-8"
          @on-submit-success="
            () => {
              isModalOpen = !isModalOpen;
              throwSuccessToast(
                `job-application-${component_id}`,
                'job_application',
              );
            }
          "
          @on-submit-error="
            throw400Error(`job-application-${component_id}`, 'job_application')
          "
        />
      </template>
    </BaseModal>

    <PToast
      position="bottom-right"
      :group="`job-application-${component_id}-success`"
    >
      <template #closeicon>
        <SvgIcon name="black-bold-close-icon" />
      </template>
    </PToast>
    <PToast
      position="bottom-right"
      :group="`job-application-${component_id}-error`"
    >
      <template #closeicon>
        <SvgIcon name="white-bold-close-icon" />
      </template>
    </PToast>
  </section>
</template>

<script setup lang="ts">
import BaseModal from "./modals/BaseModal.vue";
import JobApplicationForm from "./form/JobApplicationForm.vue";
import type { IProps } from "~/types/components/block-job-application-card";

const {
  component_id,
  title,
  text,
  background_color,
  cta_label,
  link_placement,
} = defineProps<IProps>();

const alignButton = computed(() => {
  let align;

  switch (link_placement) {
    case "centro":
      align = "text-center";
      break;
    case "destro":
      align = "text-right";
      break;
    default:
      align = "text-left";
  }

  return align;
});

const isModalOpen = ref<boolean>(false);

const { throwSuccessToast } = useThrowToast();
const { throw400Error } = useThrowErrors();
</script>

<style scoped>
:deep(.text-wrapper p) {
  @apply text-xs-2;
}
</style>
