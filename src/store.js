import Vue from "vue";
import Vuex from "vuex";
import Note from "@/models/Note";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    selectedNoteId: null
  },
  mutations: {
    addNote: state => {
      const note = Note.create(`New note`, `### Content of a new note`);

      state.notes.push(note);
    },
    removeNote: (state, index) => {
      state.notes.splice(index, 1);
    },
    selectNoteId: (state, id) => {
      state.selectedNoteId = id;
    }
  },
  actions: {
    removeNote: ({ getters, commit }, id) => {
      const index = getters.getNoteIndexById(id);

      index !== -1 && commit("removeNote", index);
    }
  },
  getters: {
    selectedNote: ({ notes, selectedNoteId }) => {
      return notes.find(note => note.id === selectedNoteId);
    },
    numberOfNotes: ({ notes }) => {
      return notes.length;
    },
    isNoteSelected: ({ selectedNoteId }) => id => {
      return selectedNoteId === id;
    },
    getNoteIndexById: ({ notes }) => id => {
      return notes.findIndex(note => note.id === id);
    }
  }
});
