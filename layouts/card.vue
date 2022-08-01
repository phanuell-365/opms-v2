<template>
  <NuxtLayout name="sidebar">
    <template #nav-title>
      <slot name="bread-crumb-title"></slot>
    </template>
    <div class="container">
      <div class="card text-center shadow border-light m-auto mt-5 w-75">
        <div class="card-header">
          <slot name="card-nav"></slot>
        </div>
        <div class="card-body text-start">
          <slot name="card-title"></slot>
          <div class="card border-light">
            <slot name="card-body"></slot>
          </div>
          <div class="card-footer bg-transparent">
            <slot name="card-footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  name: "card"
}
</script>

<style scoped>

</style>
