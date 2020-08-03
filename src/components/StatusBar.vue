<template>
  <div class="status-bar">
    <div class="status-bar__row d-flex align-items-center text-muted">
      <span class="created-at">Created at: {{ date }}</span>
      <span class="lines-count pl-2">Lines: {{ linesCount }}</span>
      <span class="chars-count pl-2">Chars: {{ charsCount }}</span>
    </div>
  </div>
</template>

<script>
import format from "date-fns/format";
import { mapState } from "vuex";

export default {
  name: "status-bar",
  computed: {
    ...mapState(["selectedNote"]),
    linesCount() {
      return this.selectedNote.content.split(/\r\n|\r|\n/).length;
    },
    charsCount() {
      return this.selectedNote.content.split("").length;
    },
    date() {
      return format(this.selectedNote.createdAt, "dd/MM/yy, HH:mm");
    }
  }
};
</script>

<style>
.status-bar__row {
  font-size: 0.875rem;
}
</style>
