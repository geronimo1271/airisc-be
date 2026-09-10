import type { Page } from "./commons/page";

export interface ILivingInLivignoPage extends Omit<Page, "slug"> {
  title?: string;
  text?: string;
}
