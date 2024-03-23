<template>
  <div>
    <button
      class="button-section"
      @click="CheckJSONValidFoTheData('{ "prop_1": "val_1", "prop_2": "val_2" }')"
    >
      click me
    </button>
  </div>
</template>

<script setup>
const CheckJSONValidFoTheData = (data) => {
    console.log({data});
  if (typeof data !== "string"){
    console.log('not a string');
    return false;
  } 
  try {
    if (JSON.parse(data)) {
      console.log("valid");
      return true;
    }
  } catch (error) {
    console.log("not valid");
    return false;
  }
};
</script>

<style lang="scss" scoped>
.button {
  width: 56px;
  height: 56px;
  background: gray;
  color: white;
}
</style>
