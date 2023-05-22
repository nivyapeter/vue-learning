<template>
  <div>
    <GreetSection name="Anju" hero-name="wonder woman" />
    <GreetSection name="Shilpa" hero-name="beautiful lady" />
    <GreetSection :name="name" :hero-name="channel" />
  </div>
</template>

<script>
import GreetSection from "./components/GreetSection.vue";
export default {
  name: "App",
  components: {
    GreetSection,
  },
  data() {
    return {
      name: "nimmi",
      channel: "code evolution",
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
