<template>
  <!-- <div class="hello" :ref="iframeRef"> -->
  <button type="button" @click="trackAddButtonClick()" class="hello--add">
    {{ props.text }}
  </button>
  <!-- <button
      type="button"
      @click="trackEditButtonClick()"
      class="hello--edit"
    >
      Edit
    </button>
    <button
      type="button"
      @click="trackDeleteButtonClick()"
      class="hello--delete"
    >
      Delete
    </button> -->
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { sendAnalyticsEvents } from "../utils";

// const props = withDefaults(defineProps(), {
//   text: 'hello',
// });

interface Props {
  text: string;
}
const props = withDefaults(defineProps<Props>(), {
  text: "",
});

const iframeRef = ref();

const trackAddButtonClick = () => {
  sendAnalyticsEvents("add_button");
};

// const trackEditButtonClick = () => {
//   sendAnalyticsEvents("edit_button");
// };

// const trackDeleteButtonClick = () => {
//   sendAnalyticsEvents("delete_button");
// };

onMounted(() => {
  sendAnalyticsEvents("page_view", {
    page_title: "iframe-app",
    page_path: "/iframe-app",
  });
});
</script>
<style lang="scss" scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100px;
    height: 70px;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  &--add {
    background: steelblue;
    width: 100px;
    height: 70px;
    color: white;
  }

  &--edit {
    background: green;
  }

  &--delete {
    background: red;
  }
}
</style>
