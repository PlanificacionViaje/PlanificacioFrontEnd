import { createRouter, createWebHistory } from "vue-router";

import TravelsView from "./Views/TravelsView.vue";
import HomeView from "./Views/HomeView.vue";
import ProfileView from "./Views/ProfileView.vue";
import GreatTravelView from "./Views/GreatTravelView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    props: true,
  },
  {
    path: "/trips",
    name: "trips",
    component: TravelsView,
  },
  {
    path: "/trip/:id",
    name: "trip",
    component: GreatTravelView,
  },
];

const router = createRouter({
  // 4. createWebHashHistory
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
