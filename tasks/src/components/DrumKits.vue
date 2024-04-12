<template>
  <div>
    <h1>
      Drum kits
      <i class="fa-solid fa-drum"></i>
    </h1>
    <div class="container">
      <button
        v-for="item in data"
        :key="`${item.text}- ${index}`"
        :style="{ backgroundImage: 'url(' + item.image + ')' }"
        class="btn"
        @click="handleClick(item.sound)"
      >
        {{ item.text }}
        <audio ref="audioElement" :src="item.sound">         
        </audio>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps(["data"]);
const isPlaying  = ref(false);

const togglePlay = (sound) => {
  const audio = new Audio(sound);
  console.log(isPlaying.value);
  isPlaying.value ? audio.play() : audio.pause()
}

const handleClick = (sound) => {
  isPlaying.value = !isPlaying.value;
  togglePlay(sound)
}

</script>

<style scoped>
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 4px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  text-align: center;
  padding-top: 20px;
}

.container {
  text-align: center;
}

.btn {
  padding: 30px;
  margin: 40px;
  border-width: 1px solid black;
}

.btn {
  padding: 30px 50px;
  background-color: white;
  border: none;
  margin: 10px;
  font-size: 40px;
  font-weight: 600;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  /* background-image: url("../assets/tom.png"); */
  background-size: cover;
  color: white;
  font-family: cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,.3);
  cursor: pointer;
}

.btn:hover {
  color: pink;
}

.btn:active {
  background-size: 105%;
}
</style>
