import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/scss/style.scss";
import DialogBox from "./components/Modal/DialogBox.vue";

const app = createApp(App);
app.use(store);
app.component("DialogBox", DialogBox);
app.mount("#app");
