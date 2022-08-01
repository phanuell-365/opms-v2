<template>
  <NuxtErrorBoundary @error="errorLogger">
    <NuxtLayout name="error">

      <template #statusCode>
        <h1 class="text-center display-4">404</h1>
      </template>

      <template #message>
        <h3 class="text-center">Page not found!</h3>
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

import {useRoute} from "#app";

const route = useRoute();

const name = route.params.name;
const fullPath = route.fullPath;
const previousPath = fullPath.split("/").slice(0, -1).join("/");

const props = defineProps({
  error: Object
})

const errorLogger = (err) => {
  console.log("The error", err)
}

const handleError = () => {
  clearError({redirect: previousPath || "/"})
}


</script>

<style scoped>
h1.text-center {
  font-size: 10em;
}
</style>
