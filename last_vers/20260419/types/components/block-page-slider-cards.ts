import type { Image } from "../api/commons/image";
import type { ICommonComponentProps } from "./common";

interface Item {
  id: number;
  title?: string;
  description?: string;
  icon_placement?: "sinistra" | "centro" | "destro";
  icon?: Image;
}

export interface IProps extends ICommonComponentProps {
  background_color?: "lavanda" | "bianco";
  title?: string;
  description?: string;
  cta_label?: string;
  cta_link?: string;
  cta_placement?: "sinistra" | "centro" | "destro";
  items: Item[];
}
