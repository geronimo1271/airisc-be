import type { ImageData } from "../api/commons/image";
import type { ILink } from "../api/commons/link";
import type { ICommonComponentProps } from "./common";

interface Image {
  data: ImageData[];
}
export interface IProps extends ICommonComponentProps {
  title?: string;
  background_color: "bianco" | "lavanda";
  description?: string;
  img_cards_placement?: "sinistra" | "destra";
  link?: ILink;
  images?: Image;
  pdf_doc?: ImageData;
  use_image: boolean;
  use_pdf: boolean;
}
