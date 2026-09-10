<template>
  <div class="relative">
    <button
      type="button"
      class="ml-10 flex items-center text-xs-3 font-medium text-blue-500"
      @click="showOptions = !showOptions"
    >
      <span class="font-inherit text-inherit">
        {{ $t(`${langSuffix}.sort.label`) }} {{ currentSelected.label }}
      </span>
      <SvgIcon name="chevron-down" class="ml-3" />
    </button>

    <div
      v-if="showOptions"
      class="w-max-content absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <ul>
        <li v-for="option in options" :key="option.mode" class="my-2">
          <button
            type="button"
            class="text-xs-3 font-medium text-blue-500"
            @click="setSortMode(option.mode)"
          >
            {{ option.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  IProps,
  ISortOptions,
  ISortItem,
  TSortMode,
} from "~/types/components/sort-job-offerts";

const { langSuffix } = defineProps<IProps>();

const { t } = useI18n();

const options = reactive<ISortOptions>({
  recent: {
    label: t(`${langSuffix}.sort.by.recent`),
    mode: "recent",
  },
  older: {
    label: t(`${langSuffix}.sort.by.older`),
    mode: "older",
  },
  alphaAZ: {
    label: t(`${langSuffix}.sort.by.alphaAZ`),
    mode: "alphaAZ",
  },
  alphaZA: {
    label: t(`${langSuffix}.sort.by.alphaZA`),
    mode: "alphaZA",
  },
});

const currentSelected = ref<ISortItem>(options.recent);
const showOptions = ref<boolean>(false);

const emit = defineEmits<{
  (e: "onSetFilter", mode: TSortMode): void;
}>();

function setSortMode(mode: TSortMode) {
  currentSelected.value = options[mode];
  emit("onSetFilter", mode);
  showOptions.value = false;
}
</script>
