<template>
  <NuxtLayout>
    <div class="flex min-h-[inherit] flex-col items-center justify-center">
      <h1 class="text-xxl-3">{{ error.statusCode }}</h1>
      <p class="mt-10 text-xxl-1 font-bold text-blue-500">
        {{ error.statusMessage }}
      </p>
      <p class="my-5 text-l-3 font-medium">
        {{ error.message }}
      </p>
      <button type="button" class="btn-secondary" @click="handleError">
        {{ error.data?.buttonLabel || "HOMEPAGE" }}
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { IError } from "./types/api/commons/error";

const { error } = defineProps<IError>();

const handleError = () => clearError({ redirect: "/" });
</script>
