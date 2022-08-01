<template>
  <NuxtLayout name="sidebar">
    <div class="container">
      <div>
        <div class="card shadow border-light m-auto mt-5 w-75">
          <div class="card-header border-light">
            <TableInfo heading="Suppliers" helper-text="List of all suppliers"></TableInfo>
          </div>
          <div class="card-body">
            <table class="table table-striped table-hover table-borderless">
              <TableHead :attributes="supplierAttributeAccessKeys"></TableHead>
              <TableBody :entities="suppliers" :entity-keys="supplierAttributeKeys"></TableBody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">

let token: string = '';
let suppliers: unknown;

const supplierAttributeKeys: Array<string> = ["id", "name", "email", "phone"];
const supplierAttributeAccessKeys: Array<string> = useArrayToNormalCase(supplierAttributeKeys).value

if (process.client) {

  token = localStorage.getItem('token')

  const data = await $fetch('http://localhost:4040/api/suppliers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

  suppliers = data.suppliers;
}
</script>

<style scoped>

</style>
