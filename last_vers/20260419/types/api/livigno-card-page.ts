import type { Page } from "./commons/page";

export interface ILivignoCardPage extends Omit<Page, "slug"> {
  title?: string;
  text?: string;
}
