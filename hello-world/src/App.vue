<template>
<div>
<h2 v-if="num === 0">The number is zero</h2>
<h2 v-else-if="num<0">The number is negative</h2>
<h2 v-else-if="num>0">The number is positive</h2>
<h2 v-else>Not a number</h2>

<div v-if='display'>
  <h2>haiiiii</h2>
</div>

<h2 v-show='showElement'>using v-show property</h2>

</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: '',
      display:true,
      showElement: true
    }
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
.underline {
 text-decoration: underline;
}

.promoted {
 font-style: italic ;
}

.new {
  color:green
}
.sold-out {
  color: red
}
</style>
