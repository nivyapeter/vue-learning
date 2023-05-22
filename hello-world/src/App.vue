<template>
  <div>
    <h2>volume tracker (0-20)</h2>
    <h3>Current volume - {{ volume }}</h3>
    <div>
      <button @click="volume += 2">Increase</button>
      <button @click="volume -= 2">Decrease</button>
    </div>
    <input type="text" v-model="movie" />
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0,
      movie: "batsman",
      movieInfo: {
        title: "",
        actor: "",
      },
    };
  },
  methods: {},
  computed: {},
  watch: {
    volume(newValue) {
      if (newValue === 16) {
        alert("Volume is high");
      }
    },

    movie: {
      handler(newValue) {
        console.log(`Calling API WITH MOVIE NAME = ${newValue}`);
      },
      immadiate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `Calling API WITH MOVIE NAME = ${newValue.title} ${newValue.actor}`
        );
      },
      deep: true,
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
