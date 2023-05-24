<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="changeName">Change Name</button>

    <h2>{{ count }}</h2>
    <button @click="incrementCount">Increment count</button>

    <h2>{{ first }} {{ last }}</h2>
    <button @click="changeHero">Change Name</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "MethodsComponent",
  setup() {
    const count = ref(0);
    const state = reactive({
      first: "Bruce",
      last: "wayne",
    });

    function incrementCount() {
      count.value++;
    }

    function changeHero() {
      (state.first = "clark"), (state.last = "kent");
    }

    return {
      count,
      incrementCount,
      ...toRefs(state),
      changeHero,
    };
  },
  data() {
    return {
      name: "viswas",
    };
  },
  methods: {
    changeName() {
      this.name = "codevolution";
    },
  },
};
</script>

<style scoped>
</style>