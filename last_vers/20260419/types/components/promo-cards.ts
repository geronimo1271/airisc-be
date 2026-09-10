import type { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import type { IPromo } from "../api/promo";

export interface IProps {
  cards: Strapi4ResponseMany<IPromo>;
  grid?: string;
  cols?: string;
}
