<template>

  <div class="container">

    <div class="card shadow">
      <div class="">
        <slot name="statusCode"/>
        <!--          <h1 class="text-center">404</h1>-->
      </div>

      <div class="card-body">
        <div class="card-text pb-3">
          <slot name="message"></slot>
          <!--            <h3 class="text-center">Page not found!</h3>-->
          <slot name="url"></slot>
          <!--            <p class="text-center">URL <span-->
          <!--                class="text-decoration-underline link-danger">https://localhost:3000{{ fullPath }}</span></p>-->
        </div>
        <div class="text-center border-top pt-5">
          <slot name="button"></slot>
          <!--            <button @click="handleError" class="btn btn-outline-success rounded-pill">Clear errors</button>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>

div.container {
  margin: 0 auto;
//width: 100%; //height: 100vh;
}

div.card {
  margin: 6rem auto;
  width: 70%;
  /*height: 70%;*/
  padding: 2em;
  border-color: #f5f5f5;
}
</style>
