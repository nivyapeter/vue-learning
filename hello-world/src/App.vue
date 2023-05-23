<template>
  <div>
    <button @click="handleShowPopup">Show popup</button>
    <PopupSection v-show="showPopup" @close="showPopup = false" />
  </div>
</template>

<script>
import PopupSection from "./components/PopupSection.vue";
export default {
  name: "App",
  components: {
    PopupSection,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    handleShowPopup() {
      return (this.showPopup = true);
    },
    closePopup(name) {
      this.showPopup = false;
      console.log("name", name);
    },
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
