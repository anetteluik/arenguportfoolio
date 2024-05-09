import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraafilineDisain from '@/views/GraafilineDisain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/graafilise-disaini-alused',
      name: 'graafilise-disaini-alused',
      component: GraafilineDisain
    },
  ]
})

export default router
