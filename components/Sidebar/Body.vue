<template>
  <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item mb-1" v-for="(sidebarObj, index) in sidebarBodyObjects" :key="index">
      <SidebarItem :item-title="sidebarObj.itemTitle" :item-name="sidebarObj.itemName"
                   :item-links="sidebarObj.itemLinks" :icon-name="sidebarObj.iconName">
      </SidebarItem>
      <hr class="m-0"/>
    </li>

  </ul>
</template>

<script setup lang="ts">

import {SidebarBodyObject} from "~/src/sidebar";

interface SidebarBodyProps {
  sidebarBodyObjects: Array<SidebarBodyObject>;
}

const props = defineProps<SidebarBodyProps>()

</script>

<style scoped>

</style>
