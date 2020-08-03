<template>
  <li
    class="list-group-item note-list-item mb-2 py-3"
    :class="noteVariant"
    @click="selectNote(note)"
  >
    <span>{{ note.title }}</span>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Note from "@/models/Note";

export default {
  name: "note-list-item",
  props: {
    note: {
      type: Note,
      required: true
    }
  },
  computed: {
    ...mapGetters(["isNoteSelected"]),
    isSelected() {
      return this.isNoteSelected(this.note.id);
    },
    noteVariant() {
      return {
        "bg-white": !this.isSelected,
        "bg-primary text-white": this.isSelected
      };
    }
  },
  methods: {
    ...mapMutations(["selectNote"])
  }
};
</script>

<style>
.note-list-item {
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
