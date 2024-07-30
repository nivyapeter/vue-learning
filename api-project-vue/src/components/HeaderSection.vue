<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="bg-[#6c6b6b] overflow-hidden">
    <div v-for="item in navItems" :key="index">
      <router-link
        :to="item.link"
        class="float-left text-[#f2f2f2f2] text-base py-4 px-3 hover:bg-[#ddd] hover:text-[#333]"
        @click="logout(item.text)"
        >{{ item.text }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Add Restaurant",
    link: "/add",
  },
  {
    text: "Update Restaurant",
    link: "/update",
  },
  {
    text: "Logout",
    link: "/login",
  },
];

const logout = (text) => {
  if (text == "Logout") {
    localStorage.removeItem("user-info");
  }
};
</script>

<style scoped></style>
