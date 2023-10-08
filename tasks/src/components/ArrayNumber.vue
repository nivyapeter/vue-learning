<template>
  <div>
   Number of arrays inside another array :  {{ numberOfArraysInsideAnotherArray }}
  </div>
</template>

<script setup>

const arrayNumber = [[1, 2, 3], 4, 5, 6, [7]];

const numberOfArraysInsideAnotherArray = arrayNumber.filter(
  (array) => Array.isArray(array)).length;
</script>

<style lang="scss" scoped></style>
