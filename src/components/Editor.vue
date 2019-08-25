<template>
  <form class="editor mb-0">
    <textarea
      class="form-control editor__workspace"
      v-model="note.content"
    ></textarea>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "editor",
  computed: {
    ...mapGetters({
      note: "selectedNote"
    })
  }
};
</script>

<style>
.editor {
  flex: 1 1;
}

.editor__workspace {
  height: 100%;
  background-image: none !important;
  resize: none;
}
</style>
