import { useToast } from "primevue/usetoast";

export const useThrowErrors = () => {
  const { t } = useI18n();
  const toast = useToast();

  function throw404Error() {
    throw showError({
      statusCode: 404,
      statusMessage: t("pages.error.404.title"),
      message: t("pages.error.404.subtitle"),
      data: {
        buttonLabel: t("pages.error.404.button_label"),
      },
    });
  }

  function throw500Error() {
    throw showError({
      statusCode: 500,
      statusMessage: t("pages.error.500.title"),
      message: t("pages.error.500.subtitle"),
      data: {
        buttonLabel: t("pages.error.500.button_label"),
      },
    });
  }

  function throw400Error(group: string, field: string) {
    return toast.add({
      severity: "error",
      summary: t(`toast.${field}.error.summary`),
      detail: t(`toast.${field}.error.detail`),
      group: `${group}-error`,
      life: 10000,
    });
  }

  return {
    throw404Error,
    throw500Error,
    throw400Error,
  };
};
