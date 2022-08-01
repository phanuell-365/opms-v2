<template>
  <thead>
  <tr>
    <th scope="col" class="text-uppercase table-success text-sm-start" v-for="(attribute, index) in attributes" :key="index">
      {{ attribute }}
    </th>
  </tr>
  </thead>
</template>

<script setup lang="ts">

interface TableHead {
  attributes: string[];
}

defineProps<TableHead>()

</script>

<style scoped>

</style>
