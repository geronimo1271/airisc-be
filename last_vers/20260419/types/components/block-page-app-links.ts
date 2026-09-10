import type { Image } from "../api/commons/image";
import type { ICommonComponentProps } from "./common";
import type { CtaTarget } from "~/composables/useCtaTarget";

export interface IProps extends ICommonComponentProps {
  title: string;
  text: string;
  background_image?: Image;
  background_image_alt_text?: string;
  qr_code_title?: string;
  promos_title?: string;
  promos_description?: string;
  promos_cta_label?: string;
  promos_cta_target?: CtaTarget;
}

export interface IAppLinks {
  qr_code: string;
  app_store_link: string;
  play_store_link: string;
}
