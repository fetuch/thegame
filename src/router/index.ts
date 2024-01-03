import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import DrinkResultsView from "@/views/DrinkResultsView.vue";
import DrinkView from "@/views/DrinkView.vue";
import IngredientsView from "@/views/IngredientsView.vue";
import HeroView from "@/views/HeroView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/drinks",
    name: "DrinkResults",
    component: DrinkResultsView,
  },
  {
    path: "/drinks/:id",
    name: "DrinkDetails",
    component: DrinkView,
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    component: IngredientsView,
  },
  {
    path: "/hero",
    name: "Hero",
    component: HeroView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
