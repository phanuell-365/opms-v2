<template>
  <li class="nav-item" v-for="(navItem, index) in navItems" :key="index">
    <CardNavItemLink
        :nav-item-link="navItem.navItemLink"
        :is-active="navItem.isActive"
        :is-disabled="navItem.isDisabled"
        :nav-item-name="navItem.navItemName">

    </CardNavItemLink>
  </li>
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
