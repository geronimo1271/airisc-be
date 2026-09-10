<template>
  <component :is="component" v-bind="componentProps" />
</template>

<script setup lang="ts">
import camelCase from "lodash.camelcase";
import type { Block } from "@/types/api/commons/block";

const props = defineProps({
  blockData: {
    type: Object as PropType<Block>,
    default: () => {},
  },
});

const componentPrefixes = ["components", "shared"];

const componentName = computed(() => {
  let blockName = props.blockData?.__component ?? "";
  componentPrefixes.forEach((prefix) => {
    blockName = blockName.replace(`${prefix}.`, "");
  });
  blockName = camelCase(blockName);
  if (blockName.length) {
    blockName = blockName[0].toUpperCase() + blockName.substring(1);
  }
  return blockName;
});

const componentProps = computed(() => {
  try {
    return Object.fromEntries(
      Object.entries({
        ...props.blockData,
        component_id: props.blockData.id,
        component_name: props.blockData.__component,
      }).filter(([key, _value]) => !["id", "__component"].includes(key)),
    );
  } catch (error) {
    return {};
  }
});

const errorComponent = defineComponent({
  render() {
    return h("div");
  },
});

// TODO: check error handling as it will break if component is missing
const component = computed(() => {
  // eslint-disable-next-line no-console
  console.log(`load component ${componentName.value}`);
  return defineAsyncComponent({
    loader: () => import(`./Block${componentName.value}.vue`),
    onError: (_error, _retry, fail) => {
      // eslint-disable-next-line no-console
      console.warn(`Unable to load component ${componentName.value}`);
      fail();
    },
    errorComponent,
  });
});
</script>
