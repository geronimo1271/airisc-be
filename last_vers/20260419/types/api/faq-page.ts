import type { Page } from "./commons/page";

export interface IFaqPage extends Omit<Page, "slug" | "blocks"> {
  title?: string;
  text?: string;
  search_input_placeholder?: string;
}
