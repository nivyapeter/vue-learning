<template>
  <div>
    <h2>parent component {{ name }}</h2>

    <button @click="incrementCount"></button>
    <ChildA />
  </div>
</template>

<script>
import { provide, ref, reactive, toRefs } from "vue";
import ChildA from "./ChildA.vue";
export default {
  name: "ProvideInject",
  components: {
    ChildA,
  },

  setup() {
    provide("c_userName", "codevolution");

    const count = ref(5);

    function incrementCount() {
      count.value++;
    }

    const state = reactive({
      firstName: "Bruce",
      lastName: "kent",
    });

    provide("c_count", count);
    provide("c_hero", state);
    provide("incrementCount", incrementCount);

    return {
      count,
      ...toRefs(state),
      incrementCount,
    };
  },

  data() {
    return {
      name: "viswas",
    };
  },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped>
</style>