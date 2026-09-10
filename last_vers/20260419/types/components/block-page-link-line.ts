import type { ICommonComponentProps } from "./common";

export interface IProps extends ICommonComponentProps {
  prev_page_label?: string;
  prev_page_link?: string;
  next_page_label?: string;
  next_page_link?: string;
}
