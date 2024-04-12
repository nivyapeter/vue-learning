<template>
  <div>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="last Name" v-model="lastName" />
    </div>

    <PersonGreeting
      :firstName="firstName"
      :lastName="lastName"
      @callHeroes="callHeroes"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import PersonGreeting from "./PersonGreeting.vue";
export default {
  name: "PersonComponent",
  components: {
    PersonGreeting,
  },

  setup() {
    const firstName = ref("anju");
    const lastName = ref("thomas");

    function callHeroes(hero) {
      alert(`calling ${hero}`);
    }

    return {
      firstName,
      lastName,
      callHeroes,
    };
  },
};
</script>

<style scoped>
</style>