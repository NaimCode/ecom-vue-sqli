import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@coreui/coreui/dist/css/coreui.min.css";
import Vue3Toastify from "vue3-toastify";

import "./index.css";
import "vue3-toastify/dist/index.css";

// import { VueFire, VueFireAuth } from "vuefire";
// import { app } from "./utils/firebase";
createApp(App)
  //   .use(VueFire, {
  //     firebaseApp: app,
  //     modules: [VueFireAuth()],
  //   })
  .use(store)
  .use(router)
  .use(Vue3Toastify, {
    autoClose: 3000,
  })
  .mount("#app");
