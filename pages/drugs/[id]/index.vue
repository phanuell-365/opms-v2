<template>
  <NuxtLayout name="card">
    <template #bread-crumb-title>
      <BreadCrumbBody :bread-crumbs="breadCrumbs.breadCrumbs"></BreadCrumbBody>
    </template>
    <template #card-nav>
      <CardNav :nav-items="navItems.navItems"></CardNav>
    </template>
    <template #card-title>
      <h5 class="card-title display-6">{{ drug.name }}</h5>
    </template>
    <template #card-body>
      <FormBody :view="true" :edit="false" :entity="drug" :entity-name="drug.name" :entity-id="routeName"></FormBody>
      <!--      <CardEntityBody :entity="drug" :drug-attributes="drugAttributes"></CardEntityBody>-->
    </template>
    <template #card-footer>
      <NuxtLink to="/drugs" class="btn btn-primary">All Drugs</NuxtLink>
    </template>
  </NuxtLayout>

</template>

<script setup lang="ts">
import {useRoute} from "#app";
import {BreadCrumbEnumClassName, BreadCrumbEnumAriaCurrent, BreadCrumbProp} from "~/src/breadcrumb";
import {CardNavProp} from "~/src/card";

interface Drug {
  id: string;
  doseForm: string;
  levelOfUse: number;
  name: string;
  strength: string;
}

const route = useRoute();
const routeName = route.params.id;

let token: string = "";
// let drug: Drug = {
//   id: '',
//   doseForm: '',
//   levelOfUse: 0,
//   name: '',
//   strength: ''
// };

// let drug: Drug = {
//   id: '',
//   doseForm: '',
//   levelOfUse: 0,
//   name: '',
//   strength: ''
// };

const drug = ref({});

// console.log("data")

if (process.client) {
  token = localStorage.getItem("token");

  const data = await useDrugById(token, routeName).value

  drug.value = {...data["drug"]};
}

// bread crumb content
const brProp: BreadCrumbProp = {
  itemName: "Drugs",
  itemLink: "/drugs",
}

const currPageBrProp: BreadCrumbProp = {
  itemName: drug["name"],
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
      isActive: true,
    },
    {
      navItemName: "Create",
      navItemLink: "/drugs/create",
      isActive: false
    },
    {
      navItemName: "Update",
      navItemLink: "/drugs/update",
      isActive: false
    },
    {
      navItemName: "Inventory",
      navItemLink: `/inventory/?drugId=${drug.id}`,
      isActive: false,
    }
  ]
}

const drugAttributes: string[] = ["id", "name", "doseForm", "strength", "levelOfUse"];

</script>

<style scoped>

</style>
