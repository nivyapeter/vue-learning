<template>
  <div>
    Parent component
    <button @click="showChild = !showChild">Toggle child</button>
    <child-component v-if="showChild" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      showChild: true,
    };
  },
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