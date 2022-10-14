<script setup>
import BaseLabel from "../base/BaseLabel.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseRadio from "../base/BaseRadio.vue";
import { useFormStore } from "../../stores/FormStore";
let FormStore = useFormStore();
("Personal");
</script>
<template>
  <div
    action=""
    class="w-5/6 p-3 mx-auto space-y-3 md:w-3/5 center h-1/2 bg-sky-200 4 rounded-xl"
  >
    <BaseLabel>Name: </BaseLabel>
    <div class="space-x-10">
      <BaseInput
        type="tel"
        InputSize="small"
        InputPlaceHolder="Name"
        v-model="FormStore.FormData.FirstName"
      />
      <BaseInput
        InputSize="small"
        InputPlaceHolder="Last Name"
        v-model="FormStore.FormData.LastName"
      />
    </div>
    <BaseLabel>Phone </BaseLabel>
    <div>
      <BaseInput
        type="tel"
        pattern=" [0-9]{3}-[0-9]{2}-[0-9]{3}"
        InputPlaceHolder="### ### ####"
        InputMaxLength="10"
        v-model="FormStore.FormData.Phone"
      />
    </div>
    <BaseLabel>Email </BaseLabel>
    <div>
      <BaseInput
        type="Email"
        InputPlaceHolder="abc@xyz.com"
        v-model="FormStore.FormData.Email"
      />
    </div>
    <BaseLabel>Gender </BaseLabel>
    <div class="flex w-5/6 space-x-2">
      <BaseRadio
        name="gender"
        v-model="FormStore.FormData.Gender"
        value="Male"
      />
      <BaseRadio
        name="gender"
        value="Female"
        v-model="FormStore.FormData.Gender"
      />
    </div>
  </div>
</template>
