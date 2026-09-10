import type { ICommonInputProps } from "./common";

export interface IItemSector {
  label: string;
  value: number;
}

export interface IProps extends ICommonInputProps {
  items: IItemSector[];
  preselectedItem?: number;
}
