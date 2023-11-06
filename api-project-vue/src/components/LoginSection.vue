<template>
  <div>
    <h1 class="text-center text-2xl m-8">Login</h1>
    <div class="flex flex-col items-center">
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
        @click="login"
      >
        Log in
      </button>
      <p class="pt-6">
        <router-link to="/sign-up">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userDetails = ref({
  email: "",
  password: "",
});

const login = () => {
  
}
</script>

<style scoped></style>
