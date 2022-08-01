<template>
  <NuxtLink class="nav-link" :to="navItemLink" :aria-current="ariaIsActive"
            :class="classNames">
    {{navItemName}}
  </NuxtLink>
</template>

<script setup lang="ts">

import {computed} from "vue";
// import {CardNavProp} from "~/src/card";

interface CardNavProp {
  navItemName: string;
  navItemLink?: string;
  isActive: boolean;
  isDisabled?: boolean;
}


const props = defineProps<CardNavProp>()


const classNames = computed(() => {
  return {
    active: props.isActive,
    disabled: props.isDisabled,
  }
})

const ariaIsActive = computed(() => {
  return props.isActive ? 'true' : 'false';
})
</script>

<style scoped>

</style>
