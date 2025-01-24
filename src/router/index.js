import { createRouter, createWebHistory } from "vue-router";
import About from "../views/about/page.vue";
import Home from "../views/home/home.vue";
import Projects from "../views/projects/page.vue";
import HallOfFame from "../views/hall-of-fame/page.vue";

// Define Routes
const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/hall-of-fame",
    name: "HallOfFame",
    component: HallOfFame,
  },
  
];

// Create Router Instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;