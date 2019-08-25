<template>
  <ul class="list-group note-list">
    <li
      class="list-group-item mb-2 py-3 note-list__item"
      :class="{
        'bg-white': !isNoteSelected(id),
        'bg-primary text-white': isNoteSelected(id)
      }"
      v-for="{ id, title } of notes"
      :key="id"
      @click="selectNoteId(id)"
    >
      <span>{{ title }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "note-list",
  computed: {
    ...mapState(["notes"]),
    ...mapGetters(["isNoteSelected"])
  },
  methods: {
    ...mapMutations(["selectNoteId"])
  }
};
</script>

<style>
.note-list__item {
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
