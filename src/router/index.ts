import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search-result/:search',
    name: 'SearchResult',
    component: () => import('../views/SearchResult.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
