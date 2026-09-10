import type { ICommonInputProps } from "./common";

export type TInitValues = [min: number, max: number] | [];

export interface IProps extends Omit<ICommonInputProps, "isRequired"> {
  min?: number;
  max?: number;
  step?: number;
  initValues?: TInitValues;
  reset?: boolean;
}
