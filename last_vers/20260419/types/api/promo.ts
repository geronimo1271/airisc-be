import type {
  Strapi4ResponseMany,
  Strapi4ResponseSingle,
} from "@nuxtjs/strapi/dist/runtime/types";
import type { Locale } from "~/misc/locales";

type TNameLocalization = Record<Locale, string>;

export interface ITypology {
  code: "additional_service" | "discount";
  name: TNameLocalization;
}

interface ISubCategory {
  code: string;
  name: TNameLocalization;
}

export interface ICategory {
  code: "Ristorante" | "Scuole_Sci" | "Shopping";
  name: TNameLocalization;
  subcategories?: Strapi4ResponseMany<ISubCategory>;
}

export interface IPromo {
  name: TNameLocalization;
  address?: string;
  code: string;
  typologies?: Strapi4ResponseMany<ITypology>;
  category?: Strapi4ResponseSingle<Omit<ICategory, "subcategories">>;
  subcategories?: Strapi4ResponseMany<ISubCategory>;
}
