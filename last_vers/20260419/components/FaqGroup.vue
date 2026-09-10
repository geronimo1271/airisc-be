<template>
  <section class="mt-10 lg:mt-0">
    <TransitionGroup class="relative mt-6" name="list" tag="ul">
      <li v-for="faq in faqs.data" :key="faq.id" class="mt-6">
        <button
          :id="`faq-${faq.id}-action`"
          type="button"
          class="flex w-full flex-row flex-nowrap items-center justify-between rounded-xl bg-blue-100 px-5 py-7 text-left transition-all duration-300 ease-in-out"
          :class="[
            {
              'border-b-2 border-solid border-blue-500': openFaqs.includes(
                faq.id,
              ),
            },
          ]"
          :aria-controls="`faq-${faq.id}`"
          :aria-expanded="openFaqs.includes(faq.id)"
          @click="toggleFaq(faq.id)"
        >
          <span class="text-m-1 font-bold text-blue-500 lg:text-l-2">{{
            faq.attributes.question
          }}</span>
          <SvgIcon
            name="arrow-down"
            class="ml-5 shrink-0 transition-all duration-500 ease-in-out"
            :class="[
              {
                'rotate-180 transform': openFaqs.includes(faq.id),
              },
            ]"
          />
        </button>
        <div
          :id="`faq-${faq.id}`"
          :aria-labelledby="`faq-${faq.id}-action`"
          role="region"
          class="h-auto overflow-hidden transition-all duration-500 ease-in-out"
          :class="openFaqs.includes(faq.id) ? 'max-h-[1000px]' : 'max-h-[0px]'"
        >
          <div
            class="p-7 text-left text-xs-3 text-grey-900"
            v-html="faq.attributes.answer"
          />
        </div>
      </li>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import type { IProps } from "~/types/components/faq-group";

const { faqs } = defineProps<IProps>();

const openFaqs = ref<number[]>([]);

const toggleFaq = (question: number) => {
  if (openFaqs.value.includes(question)) {
    openFaqs.value = openFaqs.value.filter((faq) => faq !== question);
  } else {
    openFaqs.value = [...openFaqs.value, question];
  }
};

watch(
  () => faqs,
  (newFaqs) => {
    openFaqs.value = openFaqs.value.filter((faq) =>
      newFaqs.data.map((faq) => faq.id).includes(faq),
    );
  },
);
</script>
