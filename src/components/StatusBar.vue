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
import { format } from "date-fns";

export default {
  name: "status-bar",
  props: {
    createdAt: {
      type: Number,
      default: Date.now()
    },
    content: {
      type: String,
      default: ""
    }
  },
  computed: {
    linesCount() {
      return this.content.split(/\r\n|\r|\n/).length;
    },
    charsCount() {
      return this.content.split("").length;
    },
    date() {
      return format(this.createdAt, "dd/MM/yy, HH:mm");
    }
  }
};
</script>

<style>
.status-bar__row {
  font-size: 0.875rem;
}
</style>
