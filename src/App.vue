<template>
  <div id="app">
    <aside class="section sidebar bg-light">
      <button
        class="btn btn-outline-primary btn-sm btn-block"
        type="button"
        @click="addNote"
      >
        Add note ({{ numberOfNotes }})
      </button>
      <NoteList />
    </aside>
    <template v-if="selectedNote">
      <main class="section main">
        <Toolbar />
        <Editor />
        <StatusBar />
      </main>
      <aside class="section preview bg-light">
        <Previewer />
      </aside>
    </template>
  </div>
</template>

<script>
import Editor from "@/components/Editor";
import Previewer from "@/components/Previewer";
import StatusBar from "@/components/StatusBar";
import NoteList from "@/components/NoteList";
import Toolbar from "@/components/Toolbar";

import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  name: "app",
  methods: {
    ...mapMutations(["addNote"])
  },
  computed: {
    ...mapState(["selectedNote"]),
    ...mapGetters(["numberOfNotes"])
  },
  components: {
    Editor,
    Previewer,
    StatusBar,
    NoteList,
    Toolbar
  }
};
</script>

<style>
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
@import "assets/styles/index.css";

.section {
  height: 100%;
  padding: 1rem;
}

.sidebar {
  overflow-y: auto;

  grid-column: 1 / 3;
  grid-row: 1 / 5;
}

.main {
  display: flex;
  flex-direction: column;

  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

.preview {
  grid-column: 3 / 6;
  grid-row: 3 / 5;
}

@media screen and (min-width: 992px) {
  .section {
    grid-row: 1 / 5;
  }

  .sidebar {
    grid-column: 1 / 2;
  }

  .main {
    grid-column: 2 / 4;
  }

  .preview {
    grid-column: 4 / 6;
  }
}
</style>
