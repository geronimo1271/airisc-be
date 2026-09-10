import type {
  IJobConfiguration,
  IJobFilters,
} from "~/types/api/job-configuration";

export interface IProps {
  translateSuffix: string;
  filtersFields: IJobConfiguration | null;
  isClearAllFilters: boolean;
  activeFilters: IJobFilters;
}
