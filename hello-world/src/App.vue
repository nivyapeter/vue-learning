<template>
  <div>
    <h4>App component text</h4>
    <child-styles>
      <h4>Child style component</h4>
    </child-styles>
  </div>
</template>

<script>
import ChildStyles from "./components/ChildStyles.vue";
export default {
  name: "App",
  components: {
    ChildStyles,
  },
  data() {
    return {
      name: "",
    };
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
