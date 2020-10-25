import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contactez-nous",
    name: "Contact",
    component: Contact,
    alias: "/contact"
  }
  /*,
  {
    path: "/contact",
    redirect: {name: "Contact"}
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
