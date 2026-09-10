import type { SwiperOptions } from "swiper/types";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { breakpointsTailwind } from "@vueuse/core";

export const sliderHeroOptions: SwiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
};

export const jobOffersSliderOptions: SwiperOptions = {
  modules: [Pagination, Navigation],
  slidesPerView: 1.5,
  spaceBetween: 10,
  centerInsufficientSlides: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    [breakpointsTailwind.sm]: {
      slidesPerView: 2.5,
    },
    [breakpointsTailwind.lg]: {
      slidesPerView: 3.8,
      spaceBetween: 20,
    },
  },
};

export const sliderCardsOptions: SwiperOptions = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  centerInsufficientSlides: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    [breakpointsTailwind.sm]: {
      slidesPerView: 2,
    },
    [breakpointsTailwind.lg]: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};

export const sliderTestimonialOptions: SwiperOptions = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  centerInsufficientSlides: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    [breakpointsTailwind.sm]: {
      slidesPerView: 2,
    },
    [breakpointsTailwind.lg]: {
      slidesPerView: 4,
    },
  },
};

export const sliderLogosOptions: SwiperOptions = {
  modules: [Autoplay],
  slidesPerView: 1.8,
  spaceBetween: 10,
  speed: 5200,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 25,
    disableOnInteraction: false,
  },
  breakpoints: {
    [breakpointsTailwind.lg]: {
      slidesPerView: 6.5,
      spaceBetween: 30,
    },
  },
};
