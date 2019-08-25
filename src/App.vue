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
      <NoteList
        :notes="notes"
        :selectedNoteId="selectedNoteId"
        @selectNote="selectNoteId"
      />
    </aside>
    <template v-if="selectedNote">
      <main class="section main">
        <Toolbar :note="selectedNote" @remove="removeNote" />
        <Editor :note="selectedNote" />
        <StatusBar
          :content="selectedNote.content"
          :createdAt="selectedNote.createdAt"
        />
      </main>
      <aside class="section preview bg-light">
        <Previewer :markdown="selectedNote.content" />
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

import Note from "@/models/Note";

export default {
  name: "app",
  data() {
    return {
      notes: [],
      selectedNoteId: null
    };
  },
  methods: {
    addNote() {
      const note = Note.create(
        `New note #${this.newNoteNumber}`,
        `### Content of a new note`
      );

      this.notes.push(note);
    },
    removeNote(id) {
      const index = this.findNoteIndexById(id);

      index !== -1 && this.notes.splice(index, 1);
    },
    selectNoteId(id) {
      this.selectedNoteId = id;
    },
    findNoteIndexById(id) {
      return this.notes.findIndex(note => note.id === id);
    }
  },
  computed: {
    numberOfNotes() {
      return this.notes.length;
    },
    newNoteNumber() {
      return this.numberOfNotes + 1;
    },
    selectedNote() {
      return this.selectedNoteId
        ? this.notes.find(note => note.id === this.selectedNoteId)
        : null;
    }
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
