<template>
  <div>
    <card-section></card-section>
    <CardSection>Card content</CardSection>
    <CardSection><h2>card content</h2></CardSection>
    <card-section>
      <img src="" alt="" />
    </card-section>

    <card-section>
      <template v-slot:header>
        <h3>header</h3>
      </template>
      <template v-slot:default> <img src="" alt="" /></template>
      <template v-slot:footer>
        <h3>View details</h3>
      </template>
    </card-section>
  </div>
</template>

<script>
import CardSection from "./components/CardSEction.vue";
export default {
  name: "App",
  components: {
    CardSection,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {},
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
