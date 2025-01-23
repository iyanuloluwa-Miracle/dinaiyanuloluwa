import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/about/page.vue";

// Define Routes
const routes = [
    {
    path: "/about",
    name: "About",
    component: About,
  },
  
];

// Create Router Instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;