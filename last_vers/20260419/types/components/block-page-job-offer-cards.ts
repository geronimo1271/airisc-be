import type { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import type { ICommonComponentProps } from "./common";
import type { IProps as JobOffertCardProps } from "./job-offer-card";
import type { CtaTarget } from "~/composables/useCtaTarget";

export interface IProps extends ICommonComponentProps {
  title?: string;
  description?: string;
  cta_label?: string;
  cta_link?: string;
  cta_target?: CtaTarget;
  job_offers?: Strapi4ResponseMany<JobOffertCardProps>;
}
