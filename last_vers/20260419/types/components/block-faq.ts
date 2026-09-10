import type {
  Strapi4ResponseMany,
  Strapi4ResponseSingle,
} from "@nuxtjs/strapi/dist/runtime/types";
import type { IFaqCategories } from "../api/faq-categories";
import type { ICommonComponentProps } from "./common";
import type { CtaTarget } from "~/composables/useCtaTarget";

export interface IFaq {
  question: string;
  answer: string;
  faq_category: Strapi4ResponseSingle<Pick<IFaqCategories, "name">>;
}

export interface IProps extends ICommonComponentProps {
  title: string;
  description?: string;
  cta_link?: string;
  cta_label?: string;
  cta_target?: CtaTarget;
  faqs: Strapi4ResponseMany<IFaq>;
}
