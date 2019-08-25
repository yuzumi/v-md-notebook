<template>
  <div id="app">
    <aside class="section sidebar bg-light"></aside>
    <main class="section main">
      <Editor :value="content" @setValue="setContent" />
      <StatusBar :content="content" />
    </main>
    <aside class="section preview bg-light">
      <Previewer :markdown="content" />
    </aside>
  </div>
</template>

<script>
import Editor from "@/components/Editor";
import Previewer from "@/components/Previewer";
import StatusBar from "@/components/StatusBar";

export default {
  name: "app",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    setContent(value) {
      this.content = value;
    }
  },
  components: {
    Editor,
    Previewer,
    StatusBar
  }
};
</script>

<style>
@import "~bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
@import "assets/styles/index.css";

.section {
  height: 100%;
  padding: 1rem;
}

.main {
  display: flex;
  flex-direction: column;
}
</style>
