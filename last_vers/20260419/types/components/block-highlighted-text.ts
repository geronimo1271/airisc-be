import type { ICommonComponentProps } from "./common";
import type { CtaTarget } from "~/composables/useCtaTarget";

export interface IProps extends ICommonComponentProps {
  title: string;
  text: string;
  background_color?: "lavanda";
  cta_label?: string;
  cta_link?: string;
  cta_target?: CtaTarget;
  link_placement?: "sinistra" | "centro" | "destro";
}
