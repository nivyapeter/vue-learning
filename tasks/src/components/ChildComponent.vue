<template>
    <div>
     child component
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const doSomething = () => {
    console.log('child');
}

onMounted(() => {
    doSomething()
})
</script>

<style lang="scss" scoped>

</style>