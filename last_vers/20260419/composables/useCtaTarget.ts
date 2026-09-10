export type CtaTarget = "nuova_scheda" | "stessa_scheda" | undefined;

export const useCtaTarget = (target: CtaTarget): string => {
  return target === "nuova_scheda" ? "_blank" : "_self";
};
