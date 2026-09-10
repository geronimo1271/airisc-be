<template>
  <section>
    <form @submit.prevent="onSubmit">
      <InputText form-name="contact-us" field="name" class="!mt-5" :label="$t('form.contact.labels.name')" />
      <InputText form-name="contact-us" field="surname" class="!mt-5" :label="$t('form.contact.labels.surname')" />
      <InputText form-name="contact-us" field="email" class="!mt-5" :label="$t('form.contact.labels.email')"
        type="email" />
      <div class="mt-5 flex flex-wrap items-start xs2:flex-nowrap">
        <InputNumber form-name="contact-us" field="prefix" class="!mt-0 mr-4 w-full shrink-0 xs2:w-28"
          :label="$t('form.contact.labels.prefix')" :min-digits="1" :max-digits="3" prefix="+" />
        <InputNumber form-name="contact-us" field="phone" class="mt-5 w-full xs2:!mt-0"
          :label="$t('form.contact.labels.phone')" :min-digits="10" :max-digits="10" />
      </div>
      <InputSelect form-name="contact-us" field="type" :label="$t('form.contact.labels.type')" :items="contactUsConfiguration?.contact_assistance_types || [
        {
          value: 'richiesta_assistenza',
          label: 'Ho bisogno di assistenza'
        },
        {
          value: 'segnalazione_problema',
          label: 'Vorrei segnalare un problema'
        },
        {
          value: 'richiesta_informazioni',
          label: 'Vorrei avere più informazioni'
        },
        {
          value: 'altro',
          label: 'Altro'
        }]" />
      <InputTextarea form-name="contact-us" field="text" class="!mt-5" :label="$t('form.contact.labels.text')" />
      <div class="mt-5 text-right">
        <button type="submit" class="btn-secondary w-full lg:w-auto">
          {{ $t("form.contact.labels.submit") }}
        </button>
      </div>
    </form>

    <PToast position="bottom-right" group="contact-us-success">
      <template #closeicon>
        <SvgIcon name="black-bold-close-icon" />
      </template>
    </PToast>
    <PToast position="bottom-right" group="contact-us-error">
      <template #closeicon>
        <SvgIcon name="white-bold-close-icon" />
      </template>
    </PToast>
  </section>
</template>

<script setup lang="ts">
import type { IReCaptchaComposition } from "vue-recaptcha-v3";
import { useReCaptcha } from "vue-recaptcha-v3";
import InputText from "./input/InputText.vue";
import InputNumber from "./input/InputNumber.vue";
import InputSelect from "./input/InputSelect.vue";
import InputTextarea from "./input/InputTextarea.vue";
import type { Locale } from "~/misc/locales";
import type { IContactUsConfiguration } from "~/types/api/contact-us-configuration";

const { locale } = useI18n();
const client = useStrapiClient();
const { data: contactUsConfiguration } =
  await useAsyncData<IContactUsConfiguration>(
    "newsletters-config-options",
    () =>
      client<IContactUsConfiguration>("contact-assistances/configuration", {
        query: {
          locale: locale.value as Locale,
        },
      }),
  );

const { handleSubmit, resetForm } = useForm();

const recaptchaInstance = (useReCaptcha() as IReCaptchaComposition)?.instance;

const { throwSuccessToast } = useThrowToast();
const { throw400Error } = useThrowErrors();
const { getRecaptchaToken } = useVueRecaptcha();
const onSubmit = handleSubmit(async (values) => {
  try {
    const recaptchaToken = (await getRecaptchaToken("contactUs")) || "";
    const { prefix, phone, type, ...rest } = values;
    const formData = new FormData();
    formData.append("recaptcha", recaptchaToken);
    formData.append(
      "data",
      JSON.stringify({
        ...rest,
        phone_number: `+${prefix}${phone}`,
        type: type.value,
      }),
    );

    await client<any>("contact-assistances", {
      method: "POST",
      body: formData,
    });

    throwSuccessToast("contact-us", "contact_us");
    resetForm();
  } catch (error) {
    throw400Error("contact-us", "contact_us");
  }
});

onMounted(() => {
  recaptchaInstance?.value?.showBadge();
});
onUnmounted(() => {
  recaptchaInstance?.value?.hideBadge();
  resetForm();
});
</script>
