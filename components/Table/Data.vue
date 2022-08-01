<template>
  <td class="text-muted" v-for="(value, index) in dataKeys" :key="index">
    {{ dataValues[value] }}
  </td>
</template>

<script setup lang="ts">

interface TableDataProps {
  dataValues: unknown;
  dataKeys: Array<string>;
}

const props = defineProps<TableDataProps>()

</script>

<style scoped>

</style>
