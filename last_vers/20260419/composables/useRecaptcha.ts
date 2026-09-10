import { useReCaptcha } from "vue-recaptcha-v3";

export function useVueRecaptcha() {
  const { executeRecaptcha } = useReCaptcha() || {};

  return {
    getRecaptchaToken: async (action: any) => {
      /*
        I think this is of no use,
        In case you need it, import recaptchaLoaded from useReCaptcha() and uncomment the line below
      */
      // await recaptchaLoaded?.();
      return await executeRecaptcha?.(action);
    },
  };
}
