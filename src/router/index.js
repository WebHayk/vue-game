import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "@/views/GameView.vue";
import {ROUTES} from "@/core/variables/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: "home",
      component: HomeView
    },
    {
      path: ROUTES.GAME,
      name: "game",
      component: GameView
    }
  ]
})

export default router
