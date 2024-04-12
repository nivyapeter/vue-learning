<template>
  <div class="bg-white w-1/3 mx-auto p-6 my-12 rounded container">
    <h1 class="text-center text-2xl text-black m-8 container__heading">Login</h1>
    <div class="flex flex-col items-center">
      <input
        class="w-[200px] xl:w-[300px]  h-[40px] p-5 mb-7 mx-auto border border-sky-400"
        type="text"
        placeholder="Enter E-mail"
        v-model="userDetails.email"
      />
      <input
        class="w-[200px] xl:w-[300px] h-[40px] p-5 mb-7 mx-auto border border-sky-400"
        type="text"
        placeholder="Enter Password"
        v-model="userDetails.password"
      />
      <button
        class="w-[200px] xl:w-[300px] h-[40px] bg-sky-400 text-white cursor-pointer"
        @click="login"
      >
        Log in
      </button>
      <p class="pt-6 text-black">
        <router-link to="/sign-up">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const userDetails = ref({
  email: "",
  password: "",
});

const login = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users?email=${userDetails.value.email}&password=${userDetails.value.password}`
    );

    if (response.status === 200 && response.data.length) {
      localStorage.setItem("user-info", JSON.stringify(response.data[0]));
      router.push({ name: "Home" });
    }

    return response;
  } catch (error) {
    // pass
  }
};

onMounted(() => {
  let user = localStorage.getItem("user-info");

  if (user) {
    router.push({ name: "Home" });
  }
});
</script>

<style scoped>

</style>
