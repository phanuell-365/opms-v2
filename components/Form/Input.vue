<template>
  <div v-if="!formInputProps.readonly" class="col-md-4">
    <label :for="`validation0${formInputProps.name}`" class="form-label">{{ formInputProps.label }}</label>
    <input :type="formInputProps.type" class="form-control"
           :id="`validation0${formInputProps.name}`"
           @input="setValue($event.target.value)"
           :value="myValue" :name="formInputProps.name" required>
    <!--    <div class="valid-feedback">-->
    <!--      {{ formInputProps.feedback }}-->
    <!--    </div>-->
    <div class="invalid-feedback">
      {{ formInputProps.invalidFeedback }}
    </div>
  </div>
  <div v-else-if="formInputProps.readonly" class="col-md-4">
    <label :for="`validation0${formInputProps.name}`" class="form-label">{{ formInputProps.label }}</label>
    <input :type="formInputProps.type" class="form-control-plaintext"
           :id="`validation0${formInputProps.name}`"
           :value="formInputProps.value" :name="formInputProps.name" disabled readonly>
  </div>


</template>

<script setup lang="ts">

import {reactive, ref, Ref, toRefs} from 'vue'
import {InputType} from "~/src/inputForm";

interface FormInputProps {
  label: string;
  InputId: string;
  id?: string;
  name: string;
  type: InputType;
  readonly?: boolean;
  value?: string | number;
  feedback?: string;
  invalidFeedback?: string;
}

interface FormInputObj {
  formInputProps: FormInputProps;
}

const props = defineProps<FormInputObj>()

let myValue = ref("");

const drugData = useDrugData().value;

const setValue = (value) => {
  myValue.value = value;
  drugData[props.formInputProps.name] = value;
}

</script>

<style scoped>

</style>
