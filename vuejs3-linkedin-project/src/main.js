import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Products from "./components/Products.vue";

const app = createApp(App);
app.component("Products", Products);
app.use(router);
app.mount("#app");
