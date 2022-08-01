<template>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-sm-start" v-for="(drugAttribute, index) in drugAttributes" :key="index">
        <p class="lead m-0"><span>{{ drugAttributeNames[index] }}</span>: {{ entity[drugAttribute] }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

interface EntityBodyProps{
  drugAttributes:string[];
  entity: any
}

const props = defineProps<EntityBodyProps>();

let drugAttributeNames: string[] = useArrayToNormalCase(props.drugAttributes).value;


</script>

<style scoped>

</style>
