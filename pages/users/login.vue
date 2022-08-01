<template>
  <div class="container">
    <div class="card shadow border-light mt-5 p-3 w-50 m-auto">
      <form class="card-body" action="" @submit.prevent="submitData">
        <div class="card-header border-light text-center rounded-pill">
          <h3 class="card-title">Please login</h3>
        </div>
        <div class="form-control border-light my-2">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" class="form-control w-75 rounded-pill" v-model="username"
                 placeholder="Username" required>
        </div>
        <div class="form-control border-light my-2">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" class="form-control w-75 rounded-pill" v-model="password"
                 placeholder="Password" required>
        </div>
        <div class="form-control border-light my-2">
          <button type="submit" class="btn btn-primary w-75 rounded-pill">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {navigateTo, useFetch} from "#app";

interface User {
  username: string;
  password: string;
}

const username = ref('')
const password = ref('')

const user: User = {
  username: '',
  password: '',
}

const submitData = async () => {
  console.log("username: " + username.value)
  console.log("password: " + password.value)

  user.password = password.value;
  user.username = username.value;

  console.log(user);

  const {data, error} = await useFetch('http://localhost:4040/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
  })

  console.log("data: ", data);
  console.log("Data value : ", data.value);
  console.log("Data value success : ", data.value.success);

  // if (error) {
  //   return navigateTo({path: '/errors/400'});
  // }

  if(process.client){
    localStorage.setItem('token', data.value.token);
  }

  if (data.value.success) {
    return navigateTo({path: '/users/success'});
  } else {
    return navigateTo({
      path: '/errors/400',
    })
  }

  password.value = '';
  username.value = '';
}

</script>

<style scoped>

</style>
