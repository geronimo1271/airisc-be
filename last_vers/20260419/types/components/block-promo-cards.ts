import type { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import type { IPromo } from "../api/promo";
import type { ICommonComponentProps } from "./common";
import type { CtaTarget } from "~/composables/useCtaTarget";

export interface IProps extends ICommonComponentProps {
  title?: string;
  text?: string;
  cta_label?: string;
  cta_target?: CtaTarget;
  promos: Strapi4ResponseMany<IPromo>;
}
