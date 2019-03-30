import Vue from "vue";
import Router from "vue-router";
import Todos from "./components/Todos";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Todos",
      component: Todos,
      meta: {}
    },
    {
      path: "/implicit/callback"
    }
  ]
});

export default router;
