<template>
  <div id="app">
    <input
      type="text"
      placeholder="search"
      class="search-input"
      v-model="searchValue"
    />
    <div class="users-container" v-if="usersList.length">
      <div v-for="(user, index) in usersList" :key="index">
        <strong>{{ index + 1 }}</strong> {{ user.name }}
      </div>
    </div>
    <div v-else>
      No data found
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const searchValue = ref("");
const users = ref([
  {
    name: "John",
    age: 45,
  },
  {
    name: "Doe",
    age: 35,
  },
  {
    name: "Basit",
    age: 26,
  },
  {
    name: "Jason",
    age: 55,
  },
]);

const usersList = computed(() => {
  if (searchValue.value.trim().length) {
    return users.value.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchValue.value.trim().toLocaleLowerCase())
    );
  }

  return users.value;
});
</script>

<style scoped>
.search-input {
  width: 200px;
  height: 30px;
  border-radius: 2px;
}

.users-container {
  margin-top: 12px;
}
</style>
