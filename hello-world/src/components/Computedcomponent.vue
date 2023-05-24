<template>
  <div>
    <!-- Options API -->
    <input type="text" placeHolder="First Name" v-model="fName" />
    <input type="text" placeHolder="Last Name" v-model="lName" />

    <h2>Options full Name is {{ fullName }}</h2>

    <input type="text" placeHolder="First Name" v-model="refFirstName" />
    <input type="text" placeHolder="Last Name" v-model="refLastName" />

    <!-- composition api -->
    <h2>composition full Name is {{ refFullName }}</h2>

    <input type="text" placeHolder="First Name" v-model="reactiveFirstName" />
    <input type="text" placeHolder="Last Name" v-model="reactiveLastName" />

    <!-- composition api -->
    <h2>composition reactive full Name is {{ reactiveFullName }}</h2>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from "vue";
export default {
  name: "ComputedComponent",
  setup() {
    const refFirstName = ref("");
    const refLastName = ref("");

    const state = reactive({
      reactiveFirstName: "",
      reactiveLastName: "",
    });

    const reactiveFullName = computed(function () {
      return `${state.reactiveFirstName} ${state.reactiveLastName}`;
    });

    const refFullName = computed(function () {
      return `${refFirstName.value} ${refLastName.value}`;
    });

    return {
      refFirstName,
      refLastName,
      refFullName,
      ...toRefs(state),
      reactiveFullName,
    };
  },
  data() {
    return {
      fName: "",
      lName: "",
    };
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`;
    },
  },
};
</script>

<style scoped>
</style>