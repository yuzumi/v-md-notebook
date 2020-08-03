import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";

import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "@/assets/styles/index.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
