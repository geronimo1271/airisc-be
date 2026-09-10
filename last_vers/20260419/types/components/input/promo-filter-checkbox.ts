import type { IActiveFilters } from "~/types/api/promos-list-page";

export interface IProps {
  inputId: string;
  group: string;
  inputValue: string;
  groupValue: keyof IActiveFilters;
  label: string;
  clearValue?: boolean;
  seletcAllByCategory?: boolean;
  clearAllByCategory?: boolean;
  preselected?: boolean;
}
