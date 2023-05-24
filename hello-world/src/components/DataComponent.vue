<template>
  <div>
    <h2>Options - {{ o_firstName }}</h2>
    <h2>composition - {{ c_firstName }}</h2>
    <h2>composition - {{ greet }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DataComponent",
  setup() {
    const c_firstName = ref("clark");
    c_firstName.value = "diana";
    const greet = `hello-${c_firstName.value}`;
    return {
      c_firstName,
      greet,
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
    };
  },
};
</script>

<style scoped>
</style>