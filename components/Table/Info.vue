<template>
  <div class="jumbotron">
    <h1 class="display-5">{{ heading }}</h1>
    <p class="lead">{{ helperText }}</p>
    <hr class="my-1">
  </div>
</template>

<script setup lang="ts">

interface TableHeader {
  heading: string;
  helperText: string;
}

defineProps<TableHeader>()

</script>

<style scoped>

</style>
