<template>
  <div>
    <h1 class="text-3xl text-center text-red-800 m-5 ">Hello User, Welcome on Home Page</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();

onMounted(() => {
  let user = localStorage.getItem('user-info');

  if(!user) {
    router.push({name:"SignUp"})
  
  }
})
</script>

<style lang="scss" scoped></style>
