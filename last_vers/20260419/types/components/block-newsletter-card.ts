import type { ICommonComponentProps } from "./common";

export interface IProps extends ICommonComponentProps {
  title: string;
  description: string;
  background_color?: "lavanda";
}
