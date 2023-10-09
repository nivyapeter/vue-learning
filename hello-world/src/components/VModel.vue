<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />

    <!-- Composition API -->
    <input type="text" placeholder="Hero Name" v-model="heroName" />
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "VModel",
  //   composition API
  setup() {
    const heroName = ref("");
    const state = reactive({
      firstName: "",
      lastName: "",
    });

    return {
      heroName,
      ...toRefs(state),
    };
  },
  // Options API
  data() {
    return {
      fName: "",
      lName: "",
    };
  },
};
</script>

<style scoped>
</style>