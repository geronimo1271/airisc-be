<template>
  <form ref="jobApplicationForm" @submit.prevent="onSubmit">
    <InputSelect
      form-name="job_application"
      field="work_sector"
      :label="$t('form.job_application.label.work_sector')"
      :items="jobSectors || []"
      :preselected-item="preselectedWorkSector"
      :class="hideWorkSector && 'hidden'"
    />
    <InputText
      form-name="job_application"
      field="first_name"
      :label="$t('form.job_application.label.first_name')"
    />
    <InputText
      form-name="job_application"
      field="last_name"
      :label="$t('form.job_application.label.last_name')"
    />
    <InputNumber
      form-name="job_application"
      field="age"
      :min="0"
      :max="100"
      :label="$t('form.job_application.label.age')"
    />
    <InputText
      form-name="job_application"
      field="email"
      type="email"
      :label="$t('form.job_application.label.email')"
    />
    <InputFile
      ref="cvInputFile"
      form-name="job_application"
      field="cv"
      :label="$t('form.job_application.label.cv')"
      :show-file-error="showFileError"
      @on-component-mount="setIsRequiredFile"
      @on-file-selected="setFileSelected"
    />
    <InputCheckbox
      form-name="job_application"
      field="languages"
      :label="$t('form.job_application.label.languages')"
      :items="formConfig?.languages || []"
    />
    <InputRadio
      form-name="job_application"
      field="has_own_accommodation"
      :label="$t('form.job_application.label.has_own_accommodation')"
      :items="[
        {
          label: $t('yes'),
          value: true,
        },
        {
          label: $t('no'),
          value: false,
        },
      ]"
    />
    <InputRadio
      form-name="job_application"
      field="relocates_with_family"
      :label="$t('form.job_application.label.relocates_with_family')"
      :items="[
        {
          label: $t('yes'),
          value: true,
        },
        {
          label: $t('no'),
          value: false,
        },
      ]"
    />
    <InputRadio
      form-name="job_application"
      field="car_owner"
      :label="$t('form.job_application.label.car_owner')"
      :items="[
        {
          label: $t('yes'),
          value: true,
        },
        {
          label: $t('no'),
          value: false,
        },
      ]"
    />
    <InputCheckbox
      form-name="job_application"
      field="privacy"
      label=""
      :items="[
        {
          label: $t('form.job_application.label.privacy'),
          value: true,
        },
      ]"
      cb-label-classes="!text-xs-1 !font-normal"
    />
    <div class="mt-7">
      <button type="submit" class="btn-secondary">
        {{ $t("form.job_application.submit.label") }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type {
  Strapi4ResponseMany,
  Strapi4ResponseData,
} from "@nuxtjs/strapi/dist/runtime/types";
import InputSelect from "./input/InputSelect.vue";
import InputText from "./input/InputText.vue";
import InputNumber from "./input/InputNumber.vue";
import InputFile from "./input/InputFile.vue";
import InputCheckbox from "./input/InputCheckbox.vue";
import InputRadio from "./input/InputRadio.vue";
import type { IProps } from "~/types/components/job-application-form";
import type { IJobSectors } from "~/types/api/job-sector";
import type {
  IJobConfiguration,
  TItemConfig,
} from "~/types/api/job-configuration";
import type { Locale } from "~/misc/locales";

const { preselectedWorkSector = undefined, hideWorkSector = false } =
  defineProps<IProps>();

const jobApplicationForm = ref<HTMLFormElement | null>(null);

const { find } = useStrapi();
const client = useStrapiClient();
const { locale } = useI18n();
const { handleSubmit, resetForm, errors } = useForm();

// Fetch job sectors
const { data: jobSectors } = await useAsyncData(
  "job-sectors",
  () =>
    find<IJobSectors>("job-sectors", {
      locale: locale.value as Locale,
    }),
  {
    transform: (prevData: Strapi4ResponseMany<IJobSectors>) => {
      return prevData.data.map((item: Strapi4ResponseData<IJobSectors>) => ({
        label: item.attributes.name,
        value: item.id,
      }));
    },
  },
);

// Fetch languages
type TLanguagesResponse = Pick<IJobConfiguration, "languages">;
const { data: formConfig } = await useAsyncData<TLanguagesResponse>(
  "languages",
  () =>
    client<TLanguagesResponse>("job-offers/configuration", {
      query: {
        locale: locale.value as Locale,
      },
    }),
  {
    pick: ["languages"],
  },
);

const cvInputFile = ref<InstanceType<typeof InputFile> | null>(null);
const isFileRequired = ref<boolean>(true);
const showFileError = ref<boolean>(false);
const cv = ref<File | null>(null);

const emit = defineEmits<{
  (e: "onSubmitSuccess"): void;
  (e: "onSubmitError"): void;
  (e: "onFormError", errorField: HTMLInputElement | null): void;
}>();

const setIsRequiredFile = (isRequired: boolean) => {
  isFileRequired.value = isRequired;
};
const setFileSelected = (fileSelected: File) => {
  showFileError.value = false;
  cv.value = fileSelected;
};

function onFormError() {
  const firstFieldOnErrors = Object.keys(errors.value)[0];
  const input: HTMLInputElement | null | undefined =
    jobApplicationForm.value?.querySelector(`[id*="${firstFieldOnErrors}"]`);
  input?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const onSubmit = handleSubmit(async (values: any) => {
  if (!cv.value) {
    showFileError.value = true;
    cvInputFile?.value?.$el.scrollIntoView({
      behavior: "smooth",
    });
    return;
  }

  try {
    const {
      work_sector,
      languages,
      relocates_with_family,
      has_own_accommodation,
      car_owner,
      privacy,
      ...rest
    } = values;

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        ...rest,
        work_sector: work_sector.value,
        relocates_with_family: relocates_with_family.value,
        has_own_accommodation: has_own_accommodation.value,
        car_owner: car_owner.value,
        privacy: privacy[0].value,
        languages: languages.map((item: TItemConfig) => item.value),
      }),
    );
    formData.append("files.cv", cv.value, cv.value.name);

    await client<any>("job-applications", {
      method: "POST",
      body: formData,
    });

    resetForm();
    emit("onSubmitSuccess");
  } catch (error) {
    emit("onSubmitError");
  }
}, onFormError);
</script>
