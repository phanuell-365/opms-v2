<template>
  <ul class="nav nav-tabs card-header-tabs">
<!--    <li class="nav-item" v-for="(navItem, index) in navItems" :key="index">-->
<!--      <NuxtLink class="nav-link" :to="navItem.navItemLink" :aria-current="">-->
        <CardNavItem :nav-items="navItems"></CardNavItem>
<!--      </NuxtLink>-->
<!--    </li>-->
  </ul>
</template>

<script setup lang="ts">
import {CardNavProp} from "~/src/card";

interface CardNavProps {
  navItems: CardNavProp[]
}

const props = defineProps<CardNavProps>();

</script>

<style scoped>

</style>
