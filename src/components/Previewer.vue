<template>
  <p class="previewer mb-0" v-html="compiledMarkdown"></p>
</template>

<script>
import marked from "marked";

export default {
  name: "previewer",
  props: {
    markdown: {
      type: String,
      default: ""
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown);
    }
  }
};
</script>
