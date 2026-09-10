import type { Image } from "../api/commons/image";
import type { ICommonComponentProps } from "./common";

interface Item {
  id: number;
  image?: Image;
  url?: string;
  name?: string;
}
export interface IProps extends ICommonComponentProps {
  title?: string;
  items: Item[];
}
