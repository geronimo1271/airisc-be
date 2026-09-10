import type { Page } from "./commons/page";

export interface IJobFinderPage extends Omit<Page, "slug"> {
  title?: string;
  text?: string;
  search_input_placeholder?: string;
}
