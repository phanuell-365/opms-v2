<template>
  <NuxtLayout name="sidebar">
    <div class="container">
      <div class="card shadow border-light m-auto mt-5 w-75">
        <div class="card-header border-light">
          <TableInfo heading="Orders" helper-text="List of all orders"></TableInfo>
        </div>
        <div class="card-body">
          <table class="table table-striped table-borderless table-hover">
            <TableHead :attributes="ordersAttributeAccessKeys"></TableHead>
            <TableBody :entities="orders" :entity-keys="ordersAttributeKeys"></TableBody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">


let token: string = '';
let orders :unknown;

const ordersAttributeKeys:Array<string> = ["id", "drug", "supplier", "orderQuantity", "state"];
const ordersAttributeAccessKeys:Array<string> = useArrayToNormalCase(ordersAttributeKeys).value;

if (process.client) {
  token = localStorage.getItem('token')
  console.log("The token is: " + token)

  // const {data, pending, error, refresh} = await useFetch('http://localhost:4040/api/drugs', {
  //   key: 'users',
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': token
  //   },
  // });

  const data = await $fetch('http://localhost:4040/api/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

  console.log("The data is: " , data)

  orders = data.orders;
}
</script>

<style scoped>

</style>
