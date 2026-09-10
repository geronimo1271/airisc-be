<template>
  <section
    :id="`block-newsletter-card-${component_id}`"
    ref="newsletterCard"
    class="my-20 px-4 lg:my-28 lg:px-8"
    :aria-labelledby="`block-newsletter-card-${component_id}`"
  >
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div
        class="col-span-12 grid grid-cols-12 gap-x-4 rounded-3xl p-10 lg:col-span-10 lg:col-start-2 lg:gap-x-8"
        :class="background_color === 'lavanda' && 'bg-blue-100'"
      >
        <div class="col-span-12 lg:col-span-6">
          <h2 v-if="title" :id="`block-newsletter-card-${component_id}`">
            {{ title }}
          </h2>
          <div
            v-if="description"
            class="text-wrapper mt-6 text-xs-3 font-medium"
            v-html="description"
          />
        </div>
        <div class="col-span-12 mt-10 lg:col-span-6 lg:mt-0">
          <p class="text-xs-2 font-bold text-blue-500">
            {{ $t("form.news_letter.banner_subtitle") }}
          </p>
          <form @submit.prevent="onSubmit">
            <InputText
              form-name="newsletter"
              field="email"
              :label="$t('form.news_letter.label.email')"
              type="email"
              class="!mt-1"
            >
              <template #right-input>
                <div
                  class="absolute right-[24px] top-1/2 h-[38px] -translate-y-1/2"
                >
                  <button type="submit">
                    <SvgIcon name="yellow-circle-arrow" />
                  </button>
                </div>
              </template>
            </InputText>
            <InputCheckbox
              form-name="newsletter"
              field="news"
              label=""
              class="!mt-1"
              cb-label-classes="!text-xs-1"
              :items="[
                {
                  value: true,
                  label: $t('form.news_letter.label.news'),
                },
              ]"
            />
          </form>
        </div>
      </div>
    </div>

    <BaseModal
      :show="isModalOpen"
      :title="$t('newsletter_modal.title')"
      :description="$t('newsletter_modal.subtitle')"
      @close-modal="isModalOpen = !isModalOpen"
    >
      <template #message-box>
        <div
          class="my-5 flex items-center justify-between rounded-lg bg-blue-100 p-5 lg:my-11"
        >
          <SvgIcon name="check-circle" class="mr-5 shrink-0" />
          <p
            class="text-xs-2 lg:text-xs-3"
            v-html="$t('newsletter_modal.success_message')"
          />
        </div>
      </template>
      <template #content>
        <NewsletterTopicForm
          @on-skip="isModalOpen = !isModalOpen"
          @on-submit-success="
            () => {
              isModalOpen = !isModalOpen;
              throwSuccessToast(
                `topics-${component_id}`,
                'update_subscription',
              );
            }
          "
          @on-submit-error="
            throw400Error(`topics-${component_id}`, 'update_subscription')
          "
        />
      </template>
    </BaseModal>

    <PToast
      position="bottom-right"
      :group="`newsletter-${component_id}-success`"
    >
      <template #closeicon>
        <SvgIcon name="black-bold-close-icon" />
      </template>
    </PToast>
    <PToast position="bottom-right" :group="`newsletter-${component_id}-error`">
      <template #closeicon>
        <SvgIcon name="white-bold-close-icon" />
      </template>
    </PToast>
    <PToast position="bottom-right" :group="`topics-${component_id}-success`">
      <template #closeicon>
        <SvgIcon name="black-bold-close-icon" />
      </template>
    </PToast>
    <PToast position="bottom-right" :group="`topics-${component_id}-error`">
      <template #closeicon>
        <SvgIcon name="white-bold-close-icon" />
      </template>
    </PToast>
  </section>
</template>

<script setup lang="ts">
import type { IReCaptchaComposition } from "vue-recaptcha-v3";
import { useReCaptcha } from "vue-recaptcha-v3";
import InputText from "./form/input/InputText.vue";
import InputCheckbox from "./form/input/InputCheckbox.vue";
import BaseModal from "./modals/BaseModal.vue";
import NewsletterTopicForm from "./form/NewsletterTopicForm.vue";
import type { IProps } from "~/types/components/block-newsletter-card";

const newsletterCard = ref<HTMLElement | null>(null);

const { component_id, title, description, background_color } =
  defineProps<IProps>();

const { locale } = useI18n();
const client = useStrapiClient();

const { handleSubmit, resetForm } = useForm();

const isModalOpen = ref<boolean>(false);

const recaptchaInstance = (useReCaptcha() as IReCaptchaComposition)?.instance;
const targetIsVisible = useElementVisibility(newsletterCard);
watch(targetIsVisible, (newValue: boolean) => {
  if (newValue) recaptchaInstance?.value?.showBadge();
  else recaptchaInstance?.value?.hideBadge();
});
onUnmounted(() => {
  recaptchaInstance?.value?.hideBadge();
  resetForm();
});

const { throwSuccessToast } = useThrowToast();
const { throw400Error } = useThrowErrors();

const { getRecaptchaToken } = useVueRecaptcha();
const onSubmit = handleSubmit(async (values: any) => {
  try {
    const recaptchaToken = (await getRecaptchaToken("newsletterCard")) || "";

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        email: values.email,
        news: values.news[0].value,
        locale: locale.value,
      }),
    );
    formData.append("recaptcha", recaptchaToken);

    const { id } = await client<any>("newsletters", {
      method: "POST",
      body: formData,
    });

    sessionStorage.setItem("newsletterId", JSON.stringify(id));

    isModalOpen.value = true;
    resetForm();
  } catch (error) {
    throw400Error(`newsletter-${component_id}`, "subscription");
  }
});
</script>

<style scoped>
:deep(.text-wrapper *) {
  @apply text-xs-3 font-medium;
}
</style>
