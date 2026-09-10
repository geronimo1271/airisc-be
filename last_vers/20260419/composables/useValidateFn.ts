import type { Nullable } from "primevue/ts-helpers";
import type { TItemConfig } from "~/types/api/job-configuration";

type TValueParam =
  | string
  | Nullable<number>
  | TItemConfig[]
  | TItemConfig
  | undefined;
type TFunctionReturn = string | boolean;
interface IValidateFn {
  [key: string]: (
    value: TValueParam,
    min?: number,
    max?: number,
  ) => TFunctionReturn;
}

export const useValidateFn = (isRequired: boolean): IValidateFn => {
  const { t } = useI18n();

  // UTILS
  function isEmptyArray(value: TValueParam) {
    return value instanceof Array && !value.length;
  }

  // VALIDATIONS
  function validateRequiredField(value: TValueParam) {
    if ((!value || isEmptyArray(value)) && isRequired) {
      return t("form.error_messages.required");
    }

    return true;
  }

  function validateEmailField(value: TValueParam) {
    if (isRequired) {
      if (!value) return validateRequiredField(value as undefined);

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value as string)) {
        return t("form.error_messages.email");
      }
    }

    return true;
  }

  function validateDigits(value: TValueParam, min?: number, max?: number) {
    if (!value) return !isRequired || validateRequiredField(value);

    const length = value.toString().length;

    if (min && max) {
      if (min === max && length !== max) {
        return t("form.error_messages.strict_digits", { max });
      } else if (length < min || length > max) {
        return t("form.error_messages.between_digits", { min, max });
      }
    }

    if (min && length < min) {
      return t("form.error_messages.min_digits", { min });
    }

    if (max && length > max) {
      return t("form.error_messages.max_digits", { max });
    }

    return true;
  }

  return {
    validateRequiredField,
    validateEmailField,
    validateDigits,
  };
};
