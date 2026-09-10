import type { Image } from "../api/commons/image";
import type { ICommonComponentProps } from "./common";

export interface IProps extends ICommonComponentProps {
  text?: string;
  title?: string;
  media: Image;
}
