<template>
  <p class="previewer mb-0" v-html="compiledMarkdown" />
</template>

<script>
import marked from "marked";
import { mapState } from "vuex";

export default {
  name: "previewer",
  computed: {
    ...mapState(["selectedNote"]),
    compiledMarkdown() {
      return marked(this.selectedNote.content);
    }
  }
};
</script>
