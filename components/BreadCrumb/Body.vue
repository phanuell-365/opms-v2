<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(breadCrumb, index) in breadCrumbs" :key="index" :class="breadCrumb.className"
          :aria-current="breadCrumb.ariaCurrent">
        <NuxtLink :to="breadCrumb.itemLink">{{ breadCrumb.itemName }}</NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import {BreadCrumbProp} from "~/src/breadcrumb";

interface BreadCrumbArray {
  breadCrumbs: BreadCrumbProp[]
}

const props = defineProps<BreadCrumbArray>()

// const props = defineProps<BreadCrumbArray>()
</script>

<style scoped>

</style>
