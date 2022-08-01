<template>
  <nav class="navbar navbar-dark bg-dark py-3">
    <div class="container-fluid lead">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
nav{
}
</style>
