<template>
  <div class="wrapper">
    <div class="container" :style="{ backgroundImage }">
      <div id="background-color" class="text-section">
        <h1 class="container--title">Welcome to our website</h1>
        <p class="container--paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          quisquam mollitia, repellendus repellat consequatur alias dolore
          maxime magnam ipsa eum, rerum voluptate nulla laboriosam officiis
          placeat atque amet enim itaque eveniet a minus? Eos eum quisquam ea
          illo eius vitae adipisci nemo ex deserunt? Labore veritatis odio
          maiores iusto fugiat. Autem earum quia obcaecati quaerat labore
          aliquid? Nisi itaque veniam distinctio aliquam officia libero ea
          impedit! Laudantium, quo voluptates qui hic rem neque omnis unde? Quo
          quos in at harum deleniti vel dolore similique, repudiandae qui
          voluptates quas temporibus ducimus, nihil ut, aspernatur sint
          reprehenderit consequatur a? Aut, quod facere.
        </p>
        <p class="container--paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum
          rerum quis modi nisi consectetur ex id. Illum soluta in consequuntur
          repudiandae adipisci vero harum quae tempora tempore. Possimus aliquid
          numquam eius, placeat atque libero nostrum ipsum molestias laboriosam
          voluptatem harum minus deserunt omnis autem labore facere iste quo ut,
          cum
        </p>
      </div>
      <div class="text-section">
        <h1 class="container--title">Welcome to our website</h1>
        <p class="container--paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          quisquam mollitia, repellendus repellat consequatur alias dolore
          maxime magnam ipsa eum, rerum voluptate nulla laboriosam officiis
          placeat atque amet enim itaque eveniet a minus? Eos eum quisquam ea
          illo eius vitae adipisci nemo ex deserunt? Labore veritatis odio
          maiores iusto fugiat. Autem earum quia obcaecati quaerat labore
          aliquid? Nisi itaque veniam distinctio aliquam officia libero ea
          impedit! Laudantium, quo voluptates qui hic rem neque omnis unde? Quo
          quos in at harum deleniti vel dolore similique, repudiandae qui
          voluptates quas temporibus ducimus, nihil ut, aspernatur sint
          reprehenderit consequatur a? Aut, quod facere.
        </p>
        <p class="container--paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum
          rerum quis modi nisi consectetur ex id. Illum soluta in consequuntur
          repudiandae adipisci vero harum quae tempora tempore. Possimus aliquid
          numquam eius, placeat atque libero nostrum ipsum molestias laboriosam
          voluptatem harum minus deserunt omnis autem labore facere iste quo ut,
          cum
        </p>
      </div>
      <div class="drum-kit-container">
        <DrumKits :data ="buttonData"/>
      </div>
      <div>
        <PhotoGallery />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import SnareImage from '../assets/snare.png';
import KickImage from '../assets/kick.png';
import CrashImage from '../assets/crash.png';
import TomImage from '../assets/tom.png';
import SnareSound from '../sounds/simpleBgm.mp3';
import KickSound from '../sounds/kick.mp3';
import CrashSound from '../sounds/crash.mp3';
import TomSound from '../sounds/tom.mp3';

import DrumKits from "./DrumKits.vue";
import PhotoGallery from "./PhotoGallery.vue";

const buttonData = [
  {
    text: "snare",
    // eslint-disable-next-line no-undef
    image: SnareImage,
    sound: SnareSound 
  },
  {
    text: "kick",
    image: KickImage,
    sound: KickSound
  },
  {
    text: "crash",
    image: CrashImage,
    sound: CrashSound
  },
  {
    text: "tom",
    image: TomImage,
    sound: TomSound
  },
];

const backgroundImage = computed(() => {
  return `url(${require("../assets/dark_scenary.jpeg")})`;
});

const headingStyle = document.getElementById("background-color");

const updateImage = () => {
  headingStyle.style.backgroundColor = "red";
};

onMounted(() => {
  window.addEventListener("scroll", updateImage());
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateImage());
});
</script>

<style scoped>
.wrapper {
  background-color: black;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  position: fixed;
}
.container {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: left;
}
.text-section {
  max-width: 80%;
  margin: auto;
}

.container--title {
  padding-top: 60px;
  margin: unset !important;
  font-size: 40px;
  color: white;
}
.container--paragraph {
  font-size: 20px;
  font-weight: 500;
  color: white;
}
.drum-kit-container {
  width: 100%;
  max-width: 80%;
  margin: auto;
  margin-top: 60px;
  height: 60vh;
}
</style>
