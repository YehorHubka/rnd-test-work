import Vue from "vue";
import Router from "vue-router";
import InnerPage from "./components/Pages/InnerPage";
import Home from "./components/Pages/Home";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      alias: "/patient",
      components: {
        default: Home,
        inner: InnerPage
      }
    },
    {
      path: "/patient/:patientIdx?",
      name: "InnerPage",
      components: {
        default: Home,
        inner: InnerPage
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});

export default router;
