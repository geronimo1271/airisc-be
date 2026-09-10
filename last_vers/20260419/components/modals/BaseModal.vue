<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="modal">
        <section
          v-if="show"
          class="fixed left-0 top-0 z-50 h-full w-screen items-center justify-center bg-black/[.5] transition-all duration-500 ease-in-out lg:flex"
          :class="fullScreenMobileClasses.container"
        >
          <section
            class="relative h-full w-full bg-white lg:pb-14"
            :class="fullScreenMobileClasses.modal"
            :style="{
              paddingTop: fullScreenOnMobile
                ? `${headerHeight + 27}px`
                : `${headerHeight + 40}px`,
            }"
          >
            <div class="h-full w-full overflow-auto px-5 lg:px-14">
              <header
                ref="headerModal"
                class="absolute left-5 right-5 z-40 bg-white pb-3 lg:left-14 lg:right-14"
                :class="[
                  fullScreenMobileClasses.header,
                  headerBordered &&
                    'border-b border-solid border-blue-500/[.1]',
                ]"
              >
                <div class="flex items-center justify-between">
                  <span v-if="title" class="text-xl-1 font-bold text-blue-500">
                    {{ title }}
                  </span>
                  <button
                    type="button"
                    :aria-label="$t('modal.close_aria_label')"
                    @click="$emit('closeModal')"
                  >
                    <SvgIcon name="close-menu" />
                  </button>
                </div>
                <slot name="message-box" />
                <p
                  v-if="description"
                  class="mt-4 text-xs-2"
                  v-html="description"
                />
              </header>
              <slot name="content" />
              <slot name="footer" />
            </div>
          </section>
        </section>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/modals/base-modal";

const headerModal = ref<HTMLElement | null>(null);
const { height: headerHeight } = useElementSize(headerModal);

const {
  show,
  title,
  description,
  fullScreenOnMobile = false,
  headerBordered = false,
} = defineProps<IProps>();

const fullScreenMobileClasses = computed(() => {
  return {
    container: fullScreenOnMobile ? "p-0 lg:px-4 lg:py-11" : "px-4 py-11",
    modal: fullScreenOnMobile
      ? "lg:max-w-[800px] pb-5"
      : "max-w-[800px] rounded-[40px] pb-14",
    header: fullScreenOnMobile ? "top-5 lg:top-11" : "top-11",
  };
});
</script>
