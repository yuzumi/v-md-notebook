<template>
  <form class="editor mb-0">
    <textarea
      class="form-control editor__workspace"
      v-model="note.content"
    ></textarea>
  </form>
</template>

<script>
export default {
  name: "editor",
  props: {
    note: {
      type: Object,
      default() {
        return {};
      }
    }
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
