<template>
  <div class="container">
    <div class="searchbar">
      <form action="">
        <input type="text" placeholder="search..." />
      </form>
      <div class="search-icons">
        <i class="fas fa-search"></i>
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div class="result-list"></div>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps();
</script>

<style scoped>
.container {
  position: relative;
}
.searchbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  font-size: 1.6rem;
}
.input {
  padding: 0 100px 0 20px;
  width: calc(100% - 120px);
  height: 60px;
  border: none;
  font-size: 2rem;
  color: white;
  background-color: #222;
}
input:focus {
  outline: none;
}

.search-icons {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #fff;
}

.search-icons i {
  margin-left: 15px;
  cursor: pointer;
}
</style>
