<template>
  <filter-list />
</template>

<script>
import FilterList from './components/FilterList.vue'

export default {
  name: 'App',
  components: {
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
