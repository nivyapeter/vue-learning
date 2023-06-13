<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DataOne",
  setup() {
    const name = ref("viswas");

    setTimeout(() => {
      name.value = "codevolution";
      console.log({ name });
    }, 2000);

    return {
      name,
    };
  },
};
</script>

<style scoped>
</style>