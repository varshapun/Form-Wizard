<script setup>
import BaseLabel from "../base/BaseLabel.vue";

import BaseSelect from "../base/BaseSelect.vue";
import { useFormStore } from "../../stores/FormStore";
let FormStore = useFormStore();
("Educational");
</script>
<template>
  <div
    action=""
    class="w-5/6 p-5 mx-auto space-y-5 text-center py-28 md:w-3/5 bg-sky-200 h-1/2 rounded-xl"
  >
    <BaseLabel>Graduation </BaseLabel>

    <div class="space-x-10">
      <BaseSelect type="graduation" v-model="FormStore.FormData.Graduate" />
    </div>

    <BaseLabel>Post Graduation </BaseLabel>
    <div class="space-x-10">
      <BaseSelect type="post" v-model="FormStore.FormData.PG" />
    </div>
  </div>
</template>
