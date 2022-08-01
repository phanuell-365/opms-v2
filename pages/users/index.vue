<template>
  <NuxtLayout name="sidebar">
    <template #nav-title>
      Users
    </template>
    <div class="container">
      <div class="card shadow border-light m-auto mt-5 w-75">
<!--        <div class="card-header border-light">-->
<!--          <TableInfo heading="Users" helper-text="List of all users">-->
<!--          </TableInfo>-->
<!--        </div>-->
        <table class="table table-striped table-hover table-borderless">
          <caption>List of all users</caption>
          <TableHead :attributes="usersAttributeAccessKeys">
          </TableHead>
          <TableBody :entities="users" :entity-keys="usersAttributeKeys">
          </TableBody>
        </table>
      </div>
    </div>
  </NuxtLayout>


</template>

<script setup lang="ts">

let token: string = '';
let users: unknown;

const usersAttributeKeys = ["id", "username", "email", "phone", "role"];
const usersAttributeAccessKeys: Array<string> = useArrayToNormalCase(usersAttributeKeys).value;


if (process.client) {
  token = localStorage.getItem('token')

  users = await $fetch('http://localhost:4040/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });

}


</script>

<style scoped>

</style>
