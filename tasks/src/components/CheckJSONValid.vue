<template>
  <div ref="wrapper">
    <br />
    <br /><br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// const CheckJSONValidFoTheData = (data) => {
//   console.log({ data });
//   if (typeof data !== "string") {
//     console.log("not a string");
//     return false;
//   }
//   try {
//     if (JSON.parse(data)) {
//       console.log("valid");
//       return true;
//     }
//   } catch (error) {
//     console.log("not valid");
//     return false;
//   }
// };
const wrapper = ref();

const handleScroll = () => {
  console.log(wrapper.value?.offsetHeight,window.innerHeight + window.scrollY,document.body.offsetHeight);
  if (window.innerHeight + window.scrollY >= wrapper.value.offsetHeight) {
    alert("you're at the bottom of the page");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.button {
  width: 56px;
  height: 56px;
  background: gray;
  color: white;
}
</style>
