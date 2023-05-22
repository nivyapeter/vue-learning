<template>
<div>
  <h2 v-once>{{name}}</h2>
  <button @click="name='batsman'">Change name</button>
  <h2 v-pre>{{name}}</h2>
  <h2>Full name: {{firstName}}{{lastName}}</h2>
  <h2>Computed fullName: {{fullName}}</h2>

  <button @click="changeFullName">Change fullName</button>

  <!-- <h2>Total = {{items.reduce((total,current) => (total = total + current.price),0)}}</h2> -->
  <button @click="items.push({id:4,title:'watch',price:150})">Add item</button>
  <h2>Computed Total = {{total}}</h2>
  <h2>Method Tota = {{getTotal()}}</h2>
  <input type="text" v-modal="country" />

    <div  v-for="item in items" :key="item.id">
     <h2 v-if="item.price > 100">{{item.title}} - {{item.price}}</h2>
    </div>
     <h2 v-for="item in expensiveItems" :key="item.id">{{item.title}} - {{item.price}}</h2>
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
      ],
      country:''
    }
  },
  methods: {
  getTotal() {
    console.log('getTotal method');
      return this.items.reduce((total,current) => (total + current.price),0)
    },
  changeFullName() {
   this.fullName = 'anju thomas'
  }
  },
  computed:{
    fullName: {
      get() {
      return `${this.firstName} ${this.lastName} `   
      },
      set(value) {
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    },

    total() {
      console.log('computed total');
      return this.items.reduce((total,current) => (total + current.price),0)
    },
    expensiveItems() {
      return this.items.filter(item => item.price > 100)
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
