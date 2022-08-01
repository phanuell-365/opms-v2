<template>
  <NuxtLayout name="sidebar">
    <template #nav-title>
      Inventories
    </template>
    <div class="container">
      <div class="card shadow border-light m-auto mt-5 w-75">
<!--        <div class="card-header border-light">-->
<!--          <TableInfo heading="Inventories" helper-text="List of all inventory"></TableInfo>-->
<!--        </div>-->
        <table class="table table-sm table-striped table-hover">
          <TableHead :attributes="inventoriesAttributeAccessKeys"></TableHead>
          <TableBody :entities="inventories" :entity-keys="inventoriesAttributeKeys"></TableBody>
        </table>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">
let token: string = '';
let inventories: unknown;

const inventoriesAttributeKeys = ["id", "drug", "issueUnit", "issueUnitPrice", "issueUnitPerPackSize", "packSize", "packSizePrice"];

let inventoriesAttributeAccessKeys: Array<string> = useArrayToNormalCase(inventoriesAttributeKeys).value;

if (process.client) {
  token = localStorage.getItem('token')

  const data = await $fetch('http://localhost:4040/api/inventory', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

  console.log(data);

  inventories = data["inventory"];

}
</script>

<style scoped>

</style>
