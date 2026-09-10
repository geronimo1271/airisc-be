import type { Image } from "../api/commons/image";
import type { ILink } from "../api/commons/link";
import type { ICommonComponentProps } from "./common";

export interface IHeroItem {
  title?: string;
  description?: string;
  image: Image;
  links?: ILink[];
}

export interface IProps extends ICommonComponentProps {
  items: IHeroItem[];
}
