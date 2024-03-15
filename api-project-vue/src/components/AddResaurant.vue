<template>
  <div>
    <HeaderSection />
    <h1 class="text-3xl text-center text-red-800 m-5">
      {{ `Hello ${userName}, Welcome on Add Restaurant Page` }}
    </h1>
    <form class="bg-white mx-auto w-2/5 p-8 flex flex-col items-center rounded-2xl">
      <div class="flex w-full" v-for="item in formItems" :key="item.id">
        <label class="w-2/5" for="form">{{ item.name }}: </label>
        <input class="w-3/5 h-[40px] p-5 mb-7 border border-sky-400 mx-auto" type="text" :placeholder="item.placeholder" />
      </div>
      <button class="w-[200px] xl:w-[300px] h-[40px] bg-sky-400 text-white cursor-pointer">Add Restaurant</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import HeaderSection from "./HeaderSection.vue";

const router = useRouter();

const userName = ref("");
const formItems = [
  {
    id: 1,
    name:"Name of Restaurant",
    placeholder: "Enter Name",
  },
  {
    id: 2,
    name:"Contact Number",
    placeholder: "Enter Contact Number",
  },
  {
    id: 3,
    name:"Address",
    placeholder: "Enter Address",
  },
];

onMounted(() => {
  let user = localStorage.getItem("user-info");
  userName.value = JSON.parse(user).name;
  if (!user) {
    router.push({ name: "Login" });
  }
});
</script>

<style lang="scss" scoped></style>
