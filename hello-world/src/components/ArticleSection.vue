<template>
  <div>
    <h2>Article component</h2>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>lines - {{ lines }}</h2>
    <h2>Published - {{ isPublished ? "yes" : No }}</h2>
  </div>
</template>

<script>
export default {
  name: "ArticleSection",
  props: {
    title: {
      type: String,
      required: true,
      default: "Article default",
    },
    lines: Number,
    isPublished: Boolean,
  },
  inheritAttrs: false,
};
</script>

<style>
</style>