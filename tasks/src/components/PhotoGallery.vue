<template>
  <div class="container">
    <h1>Photo gallery</h1>
    <h2>Enter the number of photos</h2>
    <input type="number" id="input" class="input" min="1" max="10" />
    <small class="errorMessage" id="errorMessage">Error message</small>
    <button class="btn" id="btn">Get photos</button>
    <div class="gallery" id="gallery">
      <img src="../assets/snare.png" alt="img" />
      <img src="../assets/snare.png" alt="img" />
      <img src="../assets/snare.png" alt="img" />
      <img src="../assets/snare.png" alt="img" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: black;
  background-color: white;
  width: 75% !important;
  margin: 0px auto 40px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.gallery {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.gallery img {
  width: 400px;
  height: 250px;
}

.errorMessage {
  color: red;
}

.input {
  padding: 20px 10px;
  width: 30%;
  font-size: 18px;
  background-color: white;
  border-radius: 5px;
  text-align: center;
}
</style>
