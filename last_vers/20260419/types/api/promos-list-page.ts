import type { Page } from "./commons/page";

export interface IPromosListPage extends Omit<Page, "slug"> {
  title?: string;
  text?: string;
}

export interface IActiveFilters {
  area: string[];
  typology: string[];
  selectAll: string[];
}
