<script setup>
import FormHeader from "../components/Form/FormHeader.vue";
import FormTabs from "../components/Form/FormTabs.vue";
import Personal from "../components/Form/FormPersonal.vue";
import Educational from "../components/Form/FormEducational.vue";
import Work from "../components/Form/FormWork.vue";

import { useFormStore } from "../stores/FormStore";
import { ref } from "vue";
let FormStore = useFormStore();
</script>
<template>
  <main class="">
    <FormHeader />
    <FormTabs />
    <form class="grid w-full place-items-center" style="height: 85vh">
      <KeepAlive>
        <component :is="FormStore.activeTab" />
      </KeepAlive>
    </form>
  </main>
</template>
