<template>
<div>
<h2 v-if="num === 0">The number is zero</h2>
<h2 v-else-if="num<0">The number is negative</h2>
<h2 v-else-if="num>0">The number is positive</h2>
<h2 v-else>Not a number</h2>

<div v-if='display'>
  <h2>displat the content</h2>
</div>

<h2 v-show='showElement'>using v-show property</h2>


<h2 v-for="name in names" :key="name">{{name}}</h2>

<h2 v-for="name in fullName" :key="name.first"> {{name.first}} {{name.last}}</h2>
<div v-for="actor in actors" :key="actor.name">
<h2>{{actor.name}}</h2>
<h3 v-for="movie in actor.movies" :key="movie">{{movie}}</h3>

<h2 v-for="(value,key,index) in myInfo" :key="value">{{index}} {{key}}{{value}}</h2>
</div>

<!-- conditional rendering of list -->
<!-- <template>
  <div v-for="name in names" :key="name">

<h2 v-if="name === 'Bruce'">{{name}}</h2>
</div>
</template> -->

</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      num: '',
      display:true,
      showElement: true,
      names:['Bruce','clark','Diana'],
      fullName:[{
        first:'anju',las:'thomas'
      },
      {
        first:'anju1',las:'thomas'
      },
      {
        first:'anju2',las:'thomas'
      }
      ],
      actors:[
        {
          name: 'sara',
          movies: ['nandhanam','cid']
        },
        {
          name: 'saramol',
          movies: ['nandhanam','cid']
        },
        {
          name: 'sarasusan',
          movies: ['nandhanam','cid']
        },

      ],
      myInfo: {
        name: 'nivya',
        class: 12
      }
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
