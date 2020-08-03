<template>
  <ul class="list-group note-list">
    <note-list-item v-for="note of notes" :key="note.id" :note="note" />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import NoteListItem from "@/components/NoteListItem";

export default {
  name: "note-list",
  computed: {
    ...mapState(["notes"])
  },
  components: {
    NoteListItem
  }
};
</script>
