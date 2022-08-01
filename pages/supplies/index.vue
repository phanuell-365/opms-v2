<template>
  <NuxtLayout name="sidebar">
    <div class="container">
      <div class="card shadow border-light m-auto mt-5 w-75">
        <div class="card-header border-light">
          <TableInfo heading="Supplies" helper-text="List of all supplies"></TableInfo>
        </div>
        <div class="card-body">
          <table class="table table-striped table-borderless table-hover">
            <TableHead :attributes="suppliesAttributeAccessKeys"></TableHead>
            <TableBody :entities="supplies" :entity-keys="suppliesAttributeKeys"></TableBody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">
let token: string = '';
let supplies: unknown;

const suppliesAttributeKeys = ['id', 'OrderId', 'packSizeQuantity', 'pricePerPackSize', 'totalPackSizePrice'];

const suppliesAttributeAccessKeys: Array<string> = useArrayToNormalCase(suppliesAttributeKeys).value;

if (process.client) {
  token = localStorage.getItem('token')

  const data = await $fetch('http://localhost:4040/api/supplies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

  // console.log("data", data);

  supplies = data["supplies"];
}

</script>

<style scoped>

</style>
