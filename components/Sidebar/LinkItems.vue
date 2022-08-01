<template>
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li class="rounded" v-for="(itemLink, index) in itemLinks" :key="index">
        <NuxtLink class="text-muted" :to="itemLink.linkHref">{{ itemLink.linkName }}</NuxtLink>
      </li>
    </ul>
</template>

<script setup lang="ts">
import {ItemLinkMap} from "~/src/sidebar";

interface LinkItemsProps{
  itemLinks:Array<ItemLinkMap>;
}

const props = defineProps<LinkItemsProps>()

</script>

<style scoped>

</style>
