<template>
  <div>parent component</div>
  <ChildComponent />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ChildComponent from '../components/ChildComponent.vue'

const childComponentRef = ref();

onMounted(() => {
    childComponentRef.value = doSomething()
})
</script>

<style lang="scss" scoped></style>
