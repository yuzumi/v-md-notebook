<template>
  <div class="toolbar pb-3">
    <div class="d-flex align-items-center">
      <form class="toolbar__form mb-0">
        <div class="form-group mb-0">
          <input class="form-control" type="text" v-model="note.title" />
        </div>
      </form>
      <button class="btn btn-danger btn-sm ml-2" @click="removeNote(note.id)">
        <i class="fas fa-trash" />
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

<style scoped>
.toolbar__form {
  flex: 1 1;
}
</style>
