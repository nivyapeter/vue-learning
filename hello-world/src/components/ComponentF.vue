<template>
  <div>
    <h2>component F</h2>
    <h2>component f - {{ userName }}</h2>
  </div>
</template>

<script>
export default {
  name: "component",
  inject: ["userName"],
};
</script>

<style scoped>
</style>