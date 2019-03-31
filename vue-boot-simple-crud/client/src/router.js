import Vue from "vue";
import Router from "vue-router";
import Todos from "./components/Todos";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/aaa",
      name: "Todos",
      component: Todos,
      meta: {}
    }
  ]
});

export default router;
