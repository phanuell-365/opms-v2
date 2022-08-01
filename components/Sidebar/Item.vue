<template>
  <a class="nav-link link-secondary collapsed" aria-current="page" data-bs-toggle="collapse"
     :data-bs-target="`#${itemName}-collapse`" aria-expanded="true" @click="changeActiveClass">
    <svg class="bi me-2" width="16" height="16">
      <use :xlink:href="`#${iconName}`"/>
    </svg>
    {{ itemTitle }}
  </a>
  <div class="collapse" :id="`${itemName}-collapse`">
    <SidebarLinkItems :item-links="itemLinks"></SidebarLinkItems>
  </div>
</template>

<script setup lang="ts">

interface SidebarItemProps {
  itemTitle: string;
  itemLinks: Array<string>;
  iconName: string;
  itemName: string;
}

const props = defineProps<SidebarItemProps>();


// let classArr: string[] = ["active"];
const changeActiveClass = (event) => {
  // console.log(event.target.className);
  console.log(event);
  if (process.client) {
    if (!event.target.className.includes("active")) {
      event.target.classList.add("active")
      // event.target.addClass("active")
    } else {
      // event.target.classList = event.target.classList.filter((className) => className !== "active");
      // event.target.removeClass("active");
      event.target.classList.remove("active")
    }
  }
}

</script>

<style scoped>
.active{

}

</style>
