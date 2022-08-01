<template>
  <NuxtLayout name="card">
    <template #bread-crumb-title>
      <BreadCrumbBody :bread-crumbs="breadCrumbs.breadCrumbs"></BreadCrumbBody>
    </template>
    <template #card-nav>
      <CardNav :nav-items="navItems.navItems"></CardNav>
    </template>
    <template #card-title>
      <h5 class="card-title display-6">Add new drug</h5>
    </template>
    <template #card-body>
    <FormBody></FormBody>
<!--      <CardEntityBody :entity="drug" :drug-attributes="drugAttributes"></CardEntityBody>-->
    </template>
    <template #card-footer>
      <NuxtLink to="/drugs" class="btn btn-primary">All Drugs</NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {CardNavProp} from "~/src/card";
import {BreadCrumbEnumAriaCurrent, BreadCrumbEnumClassName, BreadCrumbProp} from "~/src/breadcrumb";

// bread crumb content
const brProp: BreadCrumbProp = {
  itemName: "Drugs",
  itemLink: "/drugs",
}

const currPageBrProp: BreadCrumbProp = {
  itemName: "Add Drug",
  className: BreadCrumbEnumClassName.ACTIVE,
  ariaCurrent: BreadCrumbEnumAriaCurrent.PAGE
}

interface BreadCrumbArray {
  breadCrumbs: BreadCrumbProp[]
}

const breadCrumbs: BreadCrumbArray = {
  breadCrumbs: [brProp, currPageBrProp]
}

interface CardNavProps {
  navItems: CardNavProp[]
}

const navItems: CardNavProps = {
  navItems: [
    {
      navItemName: "View",
      isActive: false,
      isDisabled: true,
    },
    {
      navItemName: "Create",
      isActive: true
    },
    {
      navItemName: "Update",
      isActive: false,
      isDisabled: true,
    },
    {
      navItemName: "Inventory",
      isActive: false,
      isDisabled: true,
    }
  ]
}

const drugFormInputData = useDrugFormInputData().value;


</script>

<style scoped>

</style>
