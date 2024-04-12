import { createRouter, createWebHashHistory } from "vue-router";

import HomeSection from "./components/HomeSection.vue";
import SignUp from "./components/SignUp.vue";
import LoginSection from "./components/LoginSection.vue";
import AddRestaurant from "./components/AddResaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";

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
  {
    name: "Add",
    component: AddRestaurant,
    path: "/add",
  },
  {
    name: "Update",
    component: UpdateRestaurant,
    path: "/update",
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
