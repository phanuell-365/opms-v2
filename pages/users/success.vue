<template>
  <div class="container">
    <div class="card shadow border-light m-auto mt-5 p-5">
      <div class="jumbotron">
        <h1 class="display-4">Login Success!</h1>
        <p class="lead">You Logged in Successfully</p>
        <hr class="my-4">
        <p>The log in was very successful</p>
        <p class="lead">
          <NuxtLink to="/users/login" role="button" class="btn btn-primary btn-lg">Go back to login</NuxtLink>
        </p>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "success"
}
// if (process.client)
// console.log("The local storage is: " + localStorage.getItem('token'))
</script>

<style scoped>

</style>
