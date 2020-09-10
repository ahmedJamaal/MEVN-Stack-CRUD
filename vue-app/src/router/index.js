import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"

import Index from "../components/Operation/Index.vue";
import Create from "../components/Operation/Create.vue";
import Edit from "../components/Operation/Edit.vue";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
  {
    path: "/about",
    name: "About",
    component: About
  },
  
  {
    path: "/index",
    name: "index",
    component: Index
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
