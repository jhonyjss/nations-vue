import { createRouter, createWebHistory, Router } from 'vue-router'
import Home from "@pages/Home.vue"
import FlagDetail from "@pages/FlagDetail.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/flag/:flag', component: FlagDetail },
    ]
  }) as Router

export default router