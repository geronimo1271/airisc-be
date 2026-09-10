<template>
  <section>
    <div
      class="rounded-xl border border-solid border-blue-500/[.1] bg-white px-6 py-5"
    >
      <div
        class="flex items-center justify-between border-b border-solid border-blue-500/[.1] pb-6"
      >
        <span class="text-l-2 font-bold uppercase text-blue-500">
          {{ $t("filters_col.title") }}
        </span>
        <button
          type="button"
          class="text-xs-3 font-medium text-red-700"
          @click="emit('onResetClick')"
        >
          {{ $t("filters_col.reset") }}
        </button>
      </div>
      <div class="mt-5">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "onResetClick"): void;
}>();
</script>
