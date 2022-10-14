import { createRouter, createWebHistory } from "vue-router";
import FormWizardView from "../views/FormWizardView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/form-wizard",
      name: "form-wizard",
      component: FormWizardView,
    },
  ],
});

export default router;
