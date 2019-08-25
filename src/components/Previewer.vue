<template>
  <p class="previewer mb-0" v-html="compiledMarkdown"></p>
</template>

<script>
import marked from "marked";
import { mapGetters } from "vuex";

export default {
  name: "previewer",
  computed: {
    ...mapGetters(["selectedNote"]),
    compiledMarkdown() {
      return marked(this.selectedNote.content);
    }
  }
};
</script>
