import { createRouter, createWebHistory } from "vue-router";

import About from "";
import Projects from "";
import Services from '';
import Contact from "";


// Define Routes
const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Project",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

// Create Router Instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;