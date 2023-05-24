<template>
  <div>
    <h2>Child C component</h2>
    <h2>Child C component - {{ userName }}</h2>

    <h2>Composition Child C component - {{ childUserName }}</h2>

    <h2>Composition Child C component - {{ childCount }}</h2>
    <h2>Composition Child C component - {{ firstName }} {{ lastName }}</h2>
    <button @click="incrementCount">increment Count</button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "childC",
  setup() {
    const childUserName = inject("c_userName", "Default_userName");

    const childCount = inject("c_count", 0);
    const childHero = inject("c_hero", {});
    const incrementCount = inject("incrementCount");

    return {
      childUserName,
      childCount,
      ...toRefs(childHero),
      incrementCount,
    };
  },

  inject: ["userName"],
};
</script>

<style scoped>
</style>