import type { ICommonComponentProps } from "./common";

export interface IProps extends ICommonComponentProps {
  title: string;
  text: string;
  background_color?: "lavanda";
  cta_label?: string;
  link_placement?: "sinistra" | "centro" | "destro";
}
