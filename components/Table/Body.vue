<template>
  <tbody>
  <tr v-for="(value , index) in entities" :key="index">
    <TableData :data-values="value" :data-keys="entityKeys"></TableData>
  </tr>
  </tbody>
</template>

<script setup lang="ts">

interface TableBodyProps {
  entities: any;
  entityKeys: Array<string>;
}

defineProps<TableBodyProps>()


</script>

<style scoped>

</style>
