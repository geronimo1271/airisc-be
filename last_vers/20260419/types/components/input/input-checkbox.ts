import type { ICommonInputProps } from "./common";
import type {
  TItemConfig,
  TItemConfigValue,
} from "~/types/api/job-configuration";

export interface IProps extends ICommonInputProps {
  items: TItemConfig[];
  cbLabelClasses?: string;
  preselected?: TItemConfigValue[] | undefined;
  select_all?: boolean;
  clear_all?: boolean;
}
