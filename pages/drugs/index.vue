<template>
  <NuxtLayout name="sidebar">
    <div class="container">
      <div class="card shadow border-light m-auto mt-5 w-75">
        <div class="card-header border-light">
          <TableInfo heading="Drugs" helper-text="List of drugs"></TableInfo>
        </div>
        <div class="card-body">
          <table class="table table-striped table-borderless table-hover">
            <TableHead :attributes="drugsAttributeAccessKeys"></TableHead>
            <TableBody :entities="drugs" :entity-keys="drugsAttributeKeys"></TableBody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">

let token: string = '';
let drugs: unknown;

const drugsAttributeKeys = ["id", "name", "doseForm", "strength", "levelOfUse"];
const drugsAttributeAccessKeys: Array<string> = useArrayToNormalCase(drugsAttributeKeys).value;

if (process.client) {
  token = localStorage.getItem('token')

  const data = await $fetch('http://localhost:4040/api/drugs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

  drugs = data["drugs"];
}

</script>

<style scoped>

</style>
