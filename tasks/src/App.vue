<template>
  <div>
    <ArrayNumber />
    <FindIndex />
  </div>
</template>

<script>
import ArrayNumber from './components/ArrayNumber.vue';
import FindIndex from './components/FindIndex.vue';

export default {
  name: 'App',
  components: {
   ArrayNumber,
   FindIndex
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
