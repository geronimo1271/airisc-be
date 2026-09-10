<template>
  <div ref="swiperContainer" class="swiper">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="swiper-slide"
        :class="slideClasses"
      >
        <slot :item="item" />
      </div>
    </div>
    <div class="swiper-pagination" />
    <div
      v-if="!hideNavigation"
      class="mx-auto -mt-9 flex w-[85%] justify-between"
      :class="navigationClasses"
    >
      <button ref="prevButton" class="z-30 flex cursor-pointer">
        <SvgIcon name="yellow-circle-arrow" class="rotate-180" />
      </button>
      <button ref="nextButton" class="z-30 flex cursor-pointer">
        <SvgIcon name="yellow-circle-arrow" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import { Swiper } from "swiper";
import type { IProps } from "~/types/components/swiper-slider";

const {
  swiperOptions,
  items,
  slideClasses,
  navigationClasses,
  hideNavigation = false,
} = defineProps<IProps>();

const swiperContainer = ref(null);
const prevButton = ref(null);
const nextButton = ref(null);

let swiperInstance: Swiper | null;

const emit = defineEmits<{
  (e: "onUnlock"): void;
  (e: "onLock"): void;
}>();
onMounted(() => {
  swiperInstance = new Swiper(swiperContainer.value || ".swiper", {
    ...swiperOptions,
    navigation: {
      prevEl: prevButton.value,
      nextEl: nextButton.value,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  if (swiperInstance.isLocked) {
    emit("onLock");
  } else {
    emit("onUnlock");
  }

  swiperInstance.on("unlock", () => {
    emit("onUnlock");
  });
  swiperInstance.on("lock", () => {
    emit("onLock");
  });
});
onUnmounted(() => {
  swiperInstance?.destroy();
});
</script>

<style scoped>
.swiper-button-disabled {
  @apply opacity-25;
}
.swiper-button-lock {
  @apply hidden;
}
</style>
