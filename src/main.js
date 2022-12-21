import { createApp } from "vue";
import App from "./App.vue";
// import MButton from "./components/base/MButton.vue";
import router from "./router";

const app = createApp(App);

// app.component("m-button", MButton); //Khai báo dùng chung global
app.use(router);
app.mount("#app");
