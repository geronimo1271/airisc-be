<!-- eslint-disable prettier/prettier -->
<template>
  <section class="justify-between bg-guildtext-500">
    <div
      class="rounded-br-3xl rounded-tr-3xl bg-guild-700 px-8 py-4 text-xs-1 font-bold text-white"
    >
      <a
        href="https://www.airisc.org"
        target="_blank"
        class="flex items-center"
      >
        <span class="text-inherit" v-html="$t('top_header.web_site')" />
        <SvgIcon class="ml-3" name="sito-web" />
      </a>
    </div>
    <div
      class="rounded-bl-3xl rounded-tl-3xl bg-guild-700 px-8 py-4 text-xs-1 font-bold text-white"
    >
      <button
        type="button"
        class="flex items-center"
        @click="scrollToNewsletterCard"
      >
        <span class="text-inherit" v-html="$t('top_header.email')" />
        <SvgIcon class="ml-3" name="email" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollToNewsletterCard } = useBlockNewsletterCard();
</script>
