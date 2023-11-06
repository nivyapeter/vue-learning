import HomeSection from "./components/HomeSection.vue";
import SignUp from "./components/SignUp.vue";
import LoginSection from "./components/LoginSection.vue";
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
  {
    name: "Login",
    component: LoginSection,
    path: "/login",
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
