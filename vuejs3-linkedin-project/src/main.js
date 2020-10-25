import { createApp } from "vue";
import App from "./App.vue";
import Products from "./components/Products.vue";

const app = createApp(App);
app.component("Products", Products);
app.mount("#app");
