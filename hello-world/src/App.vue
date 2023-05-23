<template>
  <div>
    <name-list>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }} {{ slotProps.lastName }}
      </template>
    </name-list>

    <name-list>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
      </template>
    </name-list>

    <name-list>
      <template v-slot:default="slotProps">
        {{ slotProps.lastName }}
      </template>
    </name-list>
  </div>
</template>

<script>
import NameList from "./components/NameList.vue";
export default {
  name: "App",
  components: {
    NameList,
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
