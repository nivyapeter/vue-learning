<template>
  <div>{{ firstName }} {{ lastName }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "DemoTwo",
  setup() {
    const state = reactive({
      firstName: "Bruce",
      lastName: "kent",
    });

    setTimeout(() => {
      (state.firstName = "clark"), (state.lastName = "wayne");
    }, 2000);

    return toRefs(state);
  },
};
</script>

<style scoped>
</style>