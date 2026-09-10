import type { ICommonInputProps } from "./common";

export interface IProps extends ICommonInputProps {
  min?: number;
  max?: number;
  minDigits?: number;
  maxDigits?: number;
  prefix?: string;
}
