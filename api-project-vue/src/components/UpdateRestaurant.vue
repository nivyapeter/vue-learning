<template>
    <div>
      <HeaderSection />
      <h1 class="text-3xl text-center text-red-800 m-5 ">{{ `Hello ${userName}, Welcome on Update Restaurant Page` }}</h1>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import {useRouter} from "vue-router";
  
  import HeaderSection from './HeaderSection.vue';
  
  const router = useRouter();
  const userName = ref('')
  
  onMounted(() => {
    let user = localStorage.getItem('user-info');
    userName.value = JSON.parse(user).name
    if(!user) {
      router.push({name:"Login"})
    
    }
  })
  </script>
  
  <style lang="scss" scoped></style>
  