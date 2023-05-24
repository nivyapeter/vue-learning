<template>
  <div>
    <!-- <h4>Child styles component text</h4> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ChildStyles",
};
</script>

<style scoped>
h4 {
  color: orangered;
}
</style>