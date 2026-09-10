import type { ICommonInputProps } from "./common";

export interface IProps extends ICommonInputProps {
  type?: "text" | "email" | "password";
  resetInput?: boolean;
}
