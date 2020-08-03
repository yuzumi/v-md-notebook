<template>
  <div class="toolbar pb-3">
    <div class="d-flex align-items-center">
      <form class="mb-0" style="flex: 1 1">
        <div class="form-group mb-0">
          <input class="form-control" type="text" v-model="note.title" />
        </div>
      </form>
      <button class="btn btn-danger btn-sm ml-2" @click="removeNote(note.id)">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "toolbar",
  computed: {
    ...mapState({
      note: "selectedNote"
    })
  },
  methods: {
    ...mapActions(["removeNote"])
  }
};
</script>
