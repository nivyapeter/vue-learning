<template>
    <div>
        Find all indexes of NaN of the said array:{{ FindIndex }}
    </div>
</template>

<script setup>

const array = [2, NaN, 8, 16, 32];
const FindIndex = array.map((element,index) => {
 if(isNaN(element)){
    return index
 }
}).filter((el) => el)


</script>

<style lang="scss" scoped>

</style>