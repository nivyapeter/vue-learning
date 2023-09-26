<template>
  <div>
    <filter-list />
    <ArrayNumber />
  </div>
</template>

<script>
import ArrayNumber from './components/ArrayNumber.vue';
import FilterList from './components/FilterList.vue';

export default {
  name: 'App',
  components: {
    ArrayNumber,
    FilterList
}
}
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
</style>
