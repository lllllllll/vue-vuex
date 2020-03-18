import Vue from "vue";
import Router from "vue-router";
import P from "./pages";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/hello-world", component: P.HelloWorld },
    { path: "/", component: P.Main },
  ]
});
