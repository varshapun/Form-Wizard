<script setup>
import BaseLabel from "../base/BaseLabel.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseButton from "../base/BaseButton.vue";

import { useFormStore } from "../../stores/FormStore";
let FormStore = useFormStore();
("Work");
</script>
<template>
  <div
    action=""
    class="w-5/6 p-5 pt-40 mx-auto space-y-5 text-center md:w-3/5 center h-1/2 bg-sky-200 rounded-xl"
  >
    <BaseLabel>How many Years of Work Experience </BaseLabel>
    <div class="space-x-10">
      <BaseInput
        type="number"
        InputSize="verySmall"
        InputPlaceHolder="Year of Experience"
        v-model="FormStore.FormData.Experience"
      />
    </div>
    <div>
      <BaseButton type="submit" @click.prevent="FormStore.submitForm"
        >Submit</BaseButton
      >
    </div>
  </div>
</template>
