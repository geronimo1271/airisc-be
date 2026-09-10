<template>
  <NuxtIcon
    class="flex items-stretch justify-center"
    :name="props.name"
    :filled="true"
  />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.nuxt-icon :deep(svg) {
  width: unset;
  height: unset;
  margin-bottom: unset;
  vertical-align: unset;
}

.nuxt-icon.white :deep(path) {
  stroke: #ffffff;
}
</style>
