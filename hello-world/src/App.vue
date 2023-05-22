<template>
  <div>
    <article-section
      id="my-article"
      title="custom title"
      :lines="50"
      :isPublished="true"
    />
  </div>
</template>

<script>
import ArticleSection from "./components/ArticleSection.vue";
export default {
  name: "App",
  components: {
    ArticleSection,
  },
  data() {
    return {
      name: "nimmi",
      channel: "code evolution",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}
.sold-out {
  color: red;
}
</style>
