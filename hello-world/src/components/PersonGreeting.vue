<template>
  <div>
    <div>hello {{ fullName }}</div>
    <button @click="sendEvent">Click heros</button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreeting",
  props: ["firstName", "lastName"],

  setup(props, context) {
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function sendEvent() {
      context.emit("callHeros", fullName.value);
    }

    return {
      fullName,
      sendEvent,
    };
  },

  //   computed: {
  //     fullName() {
  //       return `${this.firstName} ${this.lastName}`;
  //     },
  //   },
};
</script>

<style scoped>
</style>