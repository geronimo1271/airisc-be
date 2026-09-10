<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white/[.7]"
    >
      <PProgressSpinner />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { show } = defineProps<{
  show: boolean;
}>();
</script>
