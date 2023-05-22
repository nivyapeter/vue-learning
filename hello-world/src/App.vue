<template>
<div>
  <h2 v-once>{{name}}</h2>
  <button @click="name='batsman'">Change name</button>
  <h2 v-pre>{{name}}</h2>
  <h2>Full name: {{firstName}}{{lastName}}</h2>
  <h2>Computed fullName: {{fullName}}</h2>
  <!-- <h2>Total = {{items.reduce((total,current) => (total = total + current.price),0)}}</h2> -->
  <button @click="items.push({id:4,title:'watch',price:150})">Add item</button>
  <h2>Computed Total = {{total}}</h2>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'viswas',
      firstName: 'nivya',
      lastName:'peter',
      items:[
        {
          id: 1,
          title:'tv',
          price: 100,
        },
        {
          id: 1,
          title:'phone',
          price: 200,
        },
        {
          id: 1,
          title:'laptop',
          price: 300,
        }
      ]
    }
  },
  methods: {
 
  },
  computed:{
    fullName() {
      return `${this.firstName} ${this.lastName} `   
    },
    total() {
      return this.items.reduce((total,current) => (total + current.price),0)
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
