import type { Strapi4ResponseSingle } from "@nuxtjs/strapi/dist/runtime/types";

export interface IFaqCategories {
  name: string;
  faqs: Strapi4ResponseSingle<{ count: number }>;
}
