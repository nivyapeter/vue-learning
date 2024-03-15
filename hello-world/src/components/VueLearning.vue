<template>
  <form class="review-form" @submit="">
    <h1>Leave a review</h1>
    <div class="input-section">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="details.name" />
    </div>
    <div class="input-section">
      <label for="review">Review:</label>
      <textarea id="review" cols="30" rows="10"></textarea>
    </div>
    <div class="input-section">
      <label for="rating">Rating:</label>
      <select id="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </div>
    <div  class="button">
      <input type="submit" value="submit" />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const details = ref({
  name: "",
  review: "",
  rating: "",
});

const onSubmit = () => {

}
</script>

<style scoped>
.review-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.input-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.button {
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
