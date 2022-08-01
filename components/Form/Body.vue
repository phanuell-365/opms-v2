<template>
  <div class="card-body">
    <form v-if="!view || !edit" class="row g-3 needs-validation" @submit.prevent="submitEventHandler($event)"
          novalidate>
      <FormInput v-for="drugFormInput in drugFormInputData" :key="drugFormInput.id" :form-input-props="drugFormInput">
      </FormInput>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Add Drug</button>
      </div>
    </form>
    <form v-else-if="view" class="row g-3 needs-validation">
      <FormInput v-for="drugFormInput in drugFormInputData" :key="drugFormInput.id" :form-input-props="drugFormInput">
      </FormInput>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Edit Drug</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import {InputType} from "~/src/inputForm";

interface FormBodyProps {
  entityId?: string;
  entityName?: string;
  // entit
  entity?: any;
  view: boolean;
  edit: boolean;
}

const props = defineProps<FormBodyProps>()

let drugData: any;

const drugFormInputData = useDrugFormInputData().value;

if (props.entityId) {
  drugFormInputData.id = {
    label: "ID",
    name: "id",
    id: "id",
    type: InputType.TEXT,
    readonly: true,
    value: props.entityId,
  }
}

if (props.entity) {
  drugFormInputData.name = {
    label: "Name",
    name: "name",
    id: "name",
    type: InputType.TEXT,
    readonly: true,
    value: props.entity.name,
  }
  drugFormInputData.doseForm = {
    label: "Dose Form",
    name: "doseForm",
    id: "doseForm",
    type: InputType.TEXT,
    readonly: true,
    value: props.entity.doseForm,
  }
  drugFormInputData.strength = {
    label: "Strength",
    name: "strength",
    id: "strength",
    type: InputType.TEXT,
    readonly: true,
    value: props.entity.strength,
  }
  drugFormInputData.levelOfUse = {
    label: "Level of Use",
    name: "levelOfUse",
    id: "levelOfUse",
    type: InputType.NUMBER,
    readonly: true,
    value: props.entity.levelOfUse,
  }
}

const submitEventHandler = (event) => {

  if (!event.target.checkValidity()) {
    event.target.classList.add("was-validated");
  } else {
    drugData = useDrugData();
    event.target.reset();
  }
}

</script>

<style scoped>

</style>
