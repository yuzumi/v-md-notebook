<template>
  <ul class="list-group note-list">
    <li
      class="list-group-item mb-2 py-3 note-list__item"
      :class="{
        'bg-white': selectedNoteId !== id,
        'bg-primary text-white': selectedNoteId === id
      }"
      v-for="{ id, title } of notes"
      :key="id"
      @click="$emit('selectNote', id)"
    >
      <span>{{ title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "note-list",
  props: {
    notes: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedNoteId: {
      type: [Number, String],
      default: null
    }
  }
};
</script>

<style>
.note-list__item {
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
