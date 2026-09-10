<template>
  <form @submit.prevent="onSubmit">
    <InputCheckbox
      ref="selectAll"
      :is-required="false"
      form-name="newsletter"
      label=""
      field="select_all"
      :items="[
        {
          label: $t('form.news_letter.label.select_all'),
          value: true,
        },
      ]"
      @on-change="onCheckboxChange"
    />

    <InputCheckbox
      :is-required="false"
      form-name="newsletter"
      label=""
      field="selected_options"
      :items="formConfigOptions?.options || []"
      class="!mt-2 mb-3"
      :select_all="selectAllCheckboxes"
      :clear_all="clearAllCheckboxes"
      @on-change="onCheckboxChange"
    />

    <div class="border-t border-solid border-blue-500/[.1]">
      <InputCheckbox
        :is-required="false"
        form-name="newsletter"
        label=""
        field="no_preference"
        :items="[
          {
            label: $t('form.news_letter.label.no_preference'),
            value: true,
          },
        ]"
        class="!mt-3"
        @on-change="onCheckboxChange"
      />
    </div>

    <div class="mt-6 flex items-center justify-end">
      <button
        type="button"
        class="mr-14 text-m-1 font-bold text-grey-900"
        @click="emit('onSkip')"
      >
        {{ $t("form.news_letter.label.skip_button") }}
      </button>
      <button type="submit" class="btn-primary">
        {{ $t("form.news_letter.label.submit") }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import InputCheckbox from "./input/InputCheckbox.vue";
import type { INewslettersConfiguration } from "~/types/api/newsletters-configuration";
import type { Locale } from "~/misc/locales";
import type { TItemConfig } from "~/types/api/job-configuration";

const client = useStrapiClient();
const { t, locale } = useI18n();
const selectAllCheckboxes = ref<boolean>(false);
const clearAllCheckboxes = ref<boolean>(false);

const { handleSubmit } = useForm();

const { data: formConfigOptions } =
  await useAsyncData<INewslettersConfiguration>(
    "newsletters-config-options",
    () =>
      client<INewslettersConfiguration>("newsletters/configuration", {
        query: {
          locale: locale.value as Locale,
        },
      }),
  );

function onCheckboxChange(
  value: boolean,
  field: "select_all" | "selected_options" | "no_preference",
) {
  const selectAllCheckbox = document.getElementById(
    `newsletter-select_all-${t("form.news_letter.label.select_all")}`,
  ) as HTMLInputElement;
  const noPreferenceCheckbox = document.getElementById(
    `newsletter-no_preference-${t("form.news_letter.label.no_preference")}`,
  ) as HTMLInputElement;

  if (field === "select_all") {
    noPreferenceCheckbox?.checked && noPreferenceCheckbox.click();
    if (value) {
      selectAllCheckboxes.value = value;
      clearAllCheckboxes.value = !value;
    } else {
      selectAllCheckboxes.value = value;
      clearAllCheckboxes.value = !value;
    }
  } else if (field === "no_preference") {
    selectAllCheckbox?.checked && selectAllCheckbox.click();
    if (value) {
      selectAllCheckboxes.value = !value;
      clearAllCheckboxes.value = value;
    }
  } else if (field === "selected_options") {
    noPreferenceCheckbox?.checked && noPreferenceCheckbox.click();
    clearAllCheckboxes.value = false;
  }
}

const emit = defineEmits<{
  (e: "onSubmitSuccess"): void;
  (e: "onSubmitError"): void;
  (e: "onSkip"): void;
}>();

const onSubmit = handleSubmit(async (values: any) => {
  try {
    const newsLetterId = JSON.parse(
      sessionStorage.getItem("newsletterId") || "",
    );

    const confirmedFields = values.selected_options?.map(
      (option: TItemConfig) => {
        return option.value;
      },
    );

    interface IAcc {
      [key: string]: boolean;
    }
    const resultData = formConfigOptions.value?.options.reduce(
      (acc: IAcc, item: TItemConfig) => {
        acc[item.value as string] = confirmedFields.includes(item.value);
        return acc;
      },
      {},
    );

    const formData = new FormData();
    formData.append("data", JSON.stringify(resultData));

    await client<any>(`newsletters/${newsLetterId}`, {
      method: "PUT",
      body: formData,
    });
    emit("onSubmitSuccess");
  } catch (error) {
    emit("onSubmitError");
  }
});
</script>
