<template>
  <div>
    <ComponentC />
  </div>
</template>

<script>
import ComponentC from "./components/ComponentC.vue";
export default {
  name: "App",
  components: {
    ComponentC,
  },
  data() {
    return {
      name: "vswas",
    };
  },
  // provide: {
  //   userName: this.name,
  // },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}
.sold-out {
  color: red;
}
</style>
