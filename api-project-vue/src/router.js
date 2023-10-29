import HomeSection from "./components/HomeSection.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: HomeSection,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
