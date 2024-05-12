import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraafilineDisain from '@/views/GraafilineDisain.vue'
import Minust from '../views/Minust.vue'
import Eneserefleksioon from '@/views/Eneserefleksioon.vue'

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
    {
      path: '/minust',
      name: 'minust',
      component: Minust
    },
    {
      path: '/eneserefleksioon',
      name: 'eneserefleksioon',
      component: Eneserefleksioon
    },
  ]
})

export default router
