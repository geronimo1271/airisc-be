import type { ICommonInputProps } from "./common";
import type {
  TItemConfig,
  TItemConfigValue,
} from "~/types/api/job-configuration";

export interface IProps extends ICommonInputProps {
  items: TItemConfig[];
  preselected?: TItemConfigValue[] | undefined;
  clear_all?: boolean;
}
