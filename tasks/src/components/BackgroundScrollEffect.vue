<template>
  <div class="wrapper">
    <div class="container" :style="{ backgroundImage }">
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
      <div class="text-section">
        <h1 ref="imageStyle" class="container--title">
          Welcome to our website
        </h1>
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
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const imageStyle = ref();

const backgroundImage = computed(() => {
  return `url(${require("../assets/scenary.png")})`;
});

const updateImage = () => {
  if (window.scrollY >= 300) {
    imageStyle.value.style.color = "red";
  }
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
  max-width: 30%;
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
</style>
