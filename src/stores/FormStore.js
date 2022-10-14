import { defineStore } from "pinia";
import { ref } from "vue";
import FormPersonal from "../components/Form/FormPersonal.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Swal from "sweetalert2";
import swal from "sweetalert";
export const useFormStore = defineStore("FormStore", {
  state: () => ({
    activeTab: FormPersonal,
    active: [true, false, false],
    graduation: ["B.C.A", "B.Com", "B.B.A", "BscIT"],
    post: ["M.C.A", "M.Com", "M.B.A", "MscIT"],

    FormData: {
      FirstName: "",
      LastName: "",
      Gender: "",
      Phone: "",
      Email: "",
      Graduate: "",
      PG: "",
      Experience: "",
    },
    rules: {
      FirstName: { required },
      LastName: { required },
      Gender: { required },
      Phone: { required },
      Email: { required, email },
      Graduate: { required },
      PG: { required },
      Experience: { required },
    },
  }),

  actions: {
    async submitForm() {
      const v$ = useVuelidate(this.rules, this.FormData);
      v$.value.$touch();
      if (v$.value.$error) {
        Swal.fire("Error", "Please Enter Properly", "error");
      }
    },
  },
});
