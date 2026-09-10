import type { CtaTarget } from "~/composables/useCtaTarget";

export interface IPdf {
  cta_label: string;
  cta_link: string;
  cta_target: CtaTarget;
  background_color: "giallo" | "blu";
}
