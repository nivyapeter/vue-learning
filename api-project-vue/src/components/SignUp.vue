<template>
  <div class="bg-white w-1/3 mx-auto p-6 my-12">
    <h1 class="text-center text-2xl text-black m-8">Sign Up</h1>
    <div class="flex flex-col items-center">
      <input
        class="w-[300px] h-[40px] p-5 mb-7 mx-auto border border-sky-400"
        type="text"
        placeholder="Enter Name"
        v-model="userDetails.name"
      />
      <input
        class="w-[300px] h-[40px] p-5 mb-7 mx-auto border border-sky-400"
        type="text"
        placeholder="Enter E-mail"
        v-model="userDetails.email"
      />
      <input
        class="w-[300px] h-[40px] p-5 mb-7 mx-auto border border-sky-400"
        type="text"
        placeholder="Enter Password"
        v-model="userDetails.password"
      />
      <button
        class="w-[300px] h-[40px] bg-sky-400 text-white cursor-pointer"
        @click="signUp"
      >
        Sign Up
      </button>
      <p class="pt-6 text-black overflow-hidden sm:w-5">
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

const router = useRouter();

const userDetails = reactive({
  name: "",
  email: "",
  password: "",
});

const signUp = async () => {
  try {
    const response = await axios.post("http://localhost:3000/users", {
      email: userDetails.email,
      password: userDetails.password,
      name: userDetails.name,
    });

    if(response.status === 201){
        localStorage.setItem("user-info",JSON.stringify(response.data))
        router.push({name:"Home"})
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  let user = localStorage.getItem('user-info');

  if(user) {
    router.push({name:"Home"})
  
  }
})
</script>

<style lang="scss" scoped></style>
