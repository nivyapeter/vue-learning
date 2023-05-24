<template>
  <div>
    <h3 v-for="name in names" :key="name.firstName">
      <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "NameList",
  data() {
    return {
      names: [
        {
          firstName: "Anju",
          lastName: "Thomas",
        },
        {
          firstName: "Aju",
          lastName: "Thomas",
        },
        {
          firstName: "johan",
          lastName: "Thomas",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>