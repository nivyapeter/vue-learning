<template>
  <div>
    <!-- option API -->
    <!-- <input type="text" placeholder="Name" v-model="name" />

    <input type="text" placeholder="Name" v-model="firstName" />
    <input type="text" placeholder="Name" v-model="lastName" /> -->
    <div>
      <input
        type="text"
        placeholder="reactive first name"
        v-model="firstName"
      />
      <input type="text" placeholder="reactive last name" v-model="lastName" />
      <input
        type="text"
        placeholder="reactive hero name"
        v-model="options.heroName"
      />
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from "vue";
import _ from "lodash";
export default {
  name: "WatchComponent",
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    const state = reactive({
      firstName: "",
      lastName: "",
      options: {
        heroName: "",
      },
    });

    // watch(() => {
    //   return (
    //     { ...state },
    //     function (newValue, oldValue) {
    //       console.log("FirstName", oldValue);
    //       console.log("FirstName", newValue);
    //     }
    //   );
    // });

    watch(
      () => _.cloneDeep(state.options),
      (newValue, oldValue) => {
        console.log("FirstName oldValue", oldValue);
        console.log("FirstName newValue", newValue);
      },
      {
        deep: true,
      }
    );

    watch(
      [firstName, lastName],
      (newValues, oldValues) => {
        console.log("first name old value", oldValues[0]);
        console.log("first name newValue", newValues[0]);
        console.log("last name old value", oldValues[0]);
        console.log("last name newValue", newValues[0]);
      },
      {
        immediate: true,
      }
    );

    return {
      firstName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("old value", oldValue);
      console.log("newValue", newValue);
    },
  },
};
</script>

<style scoped>
</style>