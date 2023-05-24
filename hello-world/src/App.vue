<template>
  <div>
    <DataOne />
    <DemoTwo />
  </div>
</template>

<script>
import DataOne from "./components/DataOne.vue";
import DemoTwo from "./components/DemoTwo.vue";
export default {
  name: "App",
  components: {
    DataOne,
    DemoTwo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
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
h4 {
  color: green;
}
</style>
