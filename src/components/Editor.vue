<template>
  <form class="editor mb-0">
    <textarea
      class="form-control editor__workspace"
      :value="value"
      @input="$emit('setValue', $event.target.value)"
    ></textarea>
  </form>
</template>

<script>
export default {
  name: "editor",
  props: {
    value: {
      type: String,
      default: ""
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
