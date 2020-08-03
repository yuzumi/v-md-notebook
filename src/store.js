import Vue from "vue";
import Vuex from "vuex";
import Note from "@/models/Note";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    selectedNote: null
  },
  mutations: {
    addNote: state => {
      const note = Note.create(`New note`, `### Content of a new note`);

      state.notes.push(note);
    },
    removeNote: (state, index) => {
      state.notes.splice(index, 1);
    },
    selectNote: (state, note) => {
      state.selectedNote = note;
    }
  },
  actions: {
    removeNote: ({ getters, commit }, id) => {
      const index = getters.getNoteIndexById(id);

      index !== -1 && commit("removeNote", index);
    }
  },
  getters: {
    numberOfNotes: ({ notes }) => {
      return notes.length;
    },
    isNoteSelected: ({ selectedNote }) => id => {
      return selectedNote && selectedNote.id === id;
    },
    getNoteIndexById: ({ notes }) => id => {
      return notes.findIndex(note => note.id === id);
    }
  }
});
