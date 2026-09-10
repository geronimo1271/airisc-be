import type { Page } from "./commons/page";

export interface IContactUsPage extends Omit<Page, "slug" | "blocks"> {
  title?: string;
  text?: string;
  form_title?: string;
  form_description?: string;
  form_company_title?: string;
  form_company_address?: string;
  form_company_phone_number?: string;
  form_company_email?: string;
}
