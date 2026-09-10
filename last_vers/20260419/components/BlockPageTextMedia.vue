<template>
  <section class="my-16 px-4 lg:my-24 lg:px-8">
    <div class="mx-auto grid max-w-[1476px] grid-cols-12 gap-x-4 lg:gap-x-8">
      <div class="col-span-12">
        <div v-if="title || text" class="flex flex-col items-center">
          <h1 v-if="title" class="text-center">{{ title }}</h1>
          <div
            v-if="text"
            class="my-6 max-w-[900px] font-medium lg:text-m-3"
            v-html="text"
          />
        </div>
        <div
          v-if="media.data"
          class="relative max-h-[373px] overflow-hidden rounded-xl lg:max-h-[673px]"
        >
          <template v-if="isVideo">
            <video
              ref="videoPlayer"
              muted
              class="h-full w-full object-cover object-center"
              @play="isVideoPlaying = true"
              @pause="isVideoPlaying = false"
              @click="toggleVideo"
            >
              <source :src="mediaUrl" :type="media.data.attributes.mime" />
            </video>

            <SvgIcon
              v-if="!isVideoPlaying"
              name="play-button"
              class="absolute inset-0 m-auto flex h-[34px] cursor-pointer items-center justify-center lg:h-[138px]"
              @click="toggleVideo"
            />
          </template>
          <NuxtImg
            v-else
            :src="mediaUrl"
            class="h-full w-full object-cover object-center"
            :alt="media.data.attributes.alternativeText || ''"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { IProps } from "~/types/components/block-page-text-media";

const { text, media } = defineProps<IProps>();

const isVideo = computed(
  () => media.data?.attributes.mime.startsWith("video/"),
);
const isVideoPlaying = ref(false);
const videoPlayer = ref<HTMLVideoElement | null>(null);

const toggleVideo = () => {
  if (videoPlayer.value) {
    isVideoPlaying.value ? videoPlayer.value.pause() : videoPlayer.value.play();
  }
};

const mediaUrl = computed(() => useStrapiMedia(media.data?.attributes.url));
</script>
