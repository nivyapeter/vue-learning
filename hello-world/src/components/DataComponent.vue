<template>
  <div>
    <!-- <h2>Options - {{ o_firstName }}</h2>
    <h2>composition - {{ c_firstName }}</h2>
    <h2>composition - {{ greet }}</h2> -->
    <h2>{{ greetHero }}</h2>
    <h2>{{ reactiveHero }}</h2>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "DataComponent",
  setup() {
    const c_firstName = ref("clark");
    const c_lastName = ref("kent");
    const c_heroName = ref("superMan");

    c_firstName.value = "diana";
    const greet = `hello-${c_firstName.value}`;
    const greetHero = `Hello - ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`;

    const state = reactive({
      firstName: "Princes",
      lastName: "Diana",
      heroName: "Wonder woman",
    });

    const reactiveHero = `Hello - ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`;

    return {
      c_firstName,
      greet,
      greetHero,
      reactiveHero,
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
      o_lastName: "kent",
      o_heroName: "superMan",
    };
  },
};
</script>

<style scoped>
</style>