<template>
  <div>
    <h2>Hello {{ name }} {{ heroName }}</h2>
  </div>
</template>

<script>
export default {
  name: "GreetSection",
  props: ["name", "heroName"],
};
</script>
