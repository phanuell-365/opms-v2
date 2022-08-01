<template>
  <NuxtErrorBoundary @error="errorLogger">
    <NuxtLayout name="error">

      <template #statusCode>
        <h1 class="text-center">400</h1>
      </template>

      <template #message>
        <h3 class="text-center">User not found!</h3>
      </template>

      <template #url>
        <p class="text-center">URL <span
            class="text-decoration-underline link-danger">https://localhost:3000{{ fullPath }}</span></p>
      </template>

      <template #button>
        <button @click="handleError" class="btn btn-outline-success rounded-pill">Clear errors</button>
      </template>

    </NuxtLayout>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">

import {useRouter} from "#app";

const router = useRouter();

const handleError = () => {

  router.back();
}
</script>

<style scoped>

</style>
