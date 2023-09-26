<template>
  <div>
    <h2>child B component</h2>
    <ChildC />
  </div>
</template>

<script>
import ChildC from "./ChildC.vue";
export default {
  name: "ChildB",
  components: {
    ChildC,
  },
};
</script>

<style scoped>
</style>