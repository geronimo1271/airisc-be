import type { SwiperOptions } from "swiper/types";

export interface IProps {
  swiperOptions: SwiperOptions;
  // TODO: try with generic types
  items: any[];
  slideClasses?: string;
  navigationClasses?: string;
  hideNavigation?: boolean;
}
