<template>
  <NuxtLayout name="sidebar">
    <div class="container">
      <div class="card shadow border-light m-auto mt-5 w-75">
        <div class="card-header border-light">
          <TableInfo heading="Patients" helper-text="List of all patients"></TableInfo>
        </div>
        <div class="card-body">
          <table class="table table-striped table-borderless table-hover">
            <TableHead :attributes="patientsAttributeAccessKeys"></TableHead>
            <TableBody :entities="patients" :entity-keys="patientsAttributeKeys"></TableBody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">

let token: string = '';
let patients: unknown;

const patientsAttributeKeys:Array<string>=["id", "name", "email", "phone"];
const patientsAttributeAccessKeys:Array<string>=useArrayToNormalCase(patientsAttributeKeys).value;


if (process.client) {
  token = localStorage.getItem('token')

  const data = await $fetch('http://localhost:4040/api/patients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

  patients = data.patients;
}
</script>

<style scoped>

</style>
