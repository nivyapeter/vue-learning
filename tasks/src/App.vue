<template>
  <div>
    <!-- <filter-list />
    <ArrayNumber />
    <FindIndex /> -->
    <!-- <BackgroundScrollEffect /> -->
    <!-- <CopyToClipBoard /> -->
    <!-- <accordion-section /> -->
    <!-- <ComputedProperty /> -->
    <CheckJSONValid />
  </div>
</template>

<script>
// import ArrayNumber from './components/ArrayNumber.vue';
// import FilterList from './components/FilterList.vue';
// import BackgroundScrollEffect from "./components/BackgroundScrollEffect.vue";
// import CopyToClipBoard from './components/CopyToClipBoard.vue';

// import AccordionSection from "./components/AccordionSection.vue";
import CheckJSONValid from './components/CheckJSONValid.vue'

// import ComputedProperty from './components/ComputedProperty.vue';
export default {
  name: "App",
  components: {
    // ArrayNumber,
    // FilterList
    // BackgroundScrollEffect,
    // CopyToClipBoard,
    // AccordionSection
    // ComputedProperty
    CheckJSONValid
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
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
