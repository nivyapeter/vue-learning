<template>
  <div>
    <h2>This is a Popup</h2>
    <button @click="$emit('close', 'vswas')">Close popup</button>
  </div>
</template>

<script>
export default {
  name: "PopupSection",
  emits: ["close"],
};
</script>

<style scoped>
</style>