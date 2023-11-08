<template>
  <div>
    <HeaderSection />
    <h1 class="text-3xl text-center text-red-800 m-5">
      {{ `Hello ${userName}, Welcome on Home Page` }}
    </h1>
    <div class="w-11/12 m-auto">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">SI.No</th>
          <th class="text-left">Name of Restaurant</th>
          <th class="text-left">Contact Number</th>
          <th class="text-left">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in restaurants" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item?.name }}</td>
          <td>{{ item?.contact }}</td>
          <td>{{ item?.address }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

import { useRouter } from "vue-router";

import HeaderSection from "./HeaderSection.vue";

const router = useRouter();

const userName = ref("");
const restaurants = ref([]);

onMounted(async () => {
  let user = localStorage.getItem("user-info");
  userName.value = JSON.parse(user)?.name;
  if (!user) {
    router.push({ name: "Login" });
  }

  try {
    const response = await axios.get("http://localhost:3000/restaurants");
    restaurants.value = response.data;
  } catch (error) {
    // pass
  }
});
</script>

<style lang="scss" scoped></style>
