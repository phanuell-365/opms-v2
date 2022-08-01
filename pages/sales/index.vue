<template>
  <NuxtLayout name="sidebar">
    <div class="container">
      <div class="card shadow border-light m-auto mt-5 w-75">
        <div class="card-header border-light">
          <TableInfo heading="Sales" helper-text="List of sales made"></TableInfo>
        </div>
        <div class="card-body">
          <table class="table table-striped table-hover table-borderless">
            <TableHead :attributes="salesAttributeAccessKeys"></TableHead>
            <TableBody :entities="sales" :entity-keys="salesAttributeKeys"></TableBody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">

let token: string = '';
let sales: unknown;

const salesAttributeKeys:Array<string> = ["id", "patient", "drug", "date", "issueUnitQuantity", "totalPrice"];
const salesAttributeAccessKeys:Array<string> = useArrayToNormalCase(salesAttributeKeys).value;

if (process.client) {
  token = localStorage.getItem('token')

  const data = await $fetch('http://localhost:4040/api/sales', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

  console.log("data", data);

  sales = data.sales;
}

</script>

<style scoped>

</style>
