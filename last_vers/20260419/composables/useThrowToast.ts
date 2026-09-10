import { useToast } from "primevue/usetoast";

export const useThrowToast = () => {
  const { t } = useI18n();
  const toast = useToast();

  function throwSuccessToast(group: string, field: string) {
    return toast.add({
      severity: "success",
      summary: t(`toast.${field}.success.summary`),
      detail: t(`toast.${field}.success.detail`),
      group: `${group}-success`,
      life: 10000,
    });
  }

  return {
    throwSuccessToast,
  };
};
