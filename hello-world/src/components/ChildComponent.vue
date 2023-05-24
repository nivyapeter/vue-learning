<template>
  <div>Child component</div>
</template>

<script>
export default {
  name: "ChildComponent",
  beforeCreated() {
    console.log("child beforeCreated()");
  },
  created() {
    console.log("child created()");
  },
  beforeMount() {
    console.log("child beforeMount()");
  },
  mounted() {
    console.log("Child mounted()");
  },
  beforeUpdated() {
    console.log("child beforeUpdated()");
  },
  updated() {
    console.log("child updated()");
  },
  beforeUnmount() {
    console.log("child beforeUnmount()");
  },
  unmounted() {
    console.log("child unmounted()");
  },
};
</script>

<style scoped>
</style>