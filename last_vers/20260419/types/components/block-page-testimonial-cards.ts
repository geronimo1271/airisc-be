import type { Image } from "../api/commons/image";
import type { ICommonComponentProps } from "./common";

interface Attribute {
  name?: string;
  description?: string;
  job?: string;
  picture?: Image;
}

interface Data {
  id: number;
  attributes: Attribute;
}

interface Testimonial {
  data: Data[];
}
export interface IProps extends ICommonComponentProps {
  title?: string;
  description?: string;
  testimonials?: Testimonial;
}
