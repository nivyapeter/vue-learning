<template>
    <div>
    copy to clipboard
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const button = document.querySelector("button");

onMounted(() => {
    button.addEventListener("click", () => {
    copy("haii");
})
})

const copy = (text) => navigator.clipboard.writeText(text);

button
</script>

<style scoped>
div {
    background-color: skyblue;
}
</style>