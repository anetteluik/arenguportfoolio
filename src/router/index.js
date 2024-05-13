import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraafilineDisain from '@/views/GraafilineDisain.vue'
import Minust from '../views/Minust.vue'
import Eneserefleksioon from '@/views/Eneserefleksioon.vue'
import Kasutajakogemus from '@/views/Kasutajakogemus.vue'
import Veebikujundus from '@/views/Veebikujundus.vue'
import Psuhholoogia from '@/views/Psuhholoogia.vue'
import Tootearendus from '@/views/Tootearendus.vue'
import ArvutiteRiistvara from '@/views/ArvutiteRiistvara.vue'
import ProgrammeerimiseAlused from '@/views/ProgrammeerimiseAlused.vue'
import Veebiarendus from '@/views/Veebiarendus.vue'
import Karjaariplaneerimine from '@/views/Karjaariplaneerimine.vue'
import Koolitused from '@/views/Koolitused.vue'
import Iseseisev from '@/views/Iseseisev.vue'
import Tutvumispraktika from '@/views/Tutvumispraktika.vue'
import Spetsialiseerumispraktika from '@/views/Spetsialiseerumispraktika.vue'


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
    {
      path: '/kasutajakogemuse-analuus',
      name: 'kasutajakogemuse-analuus',
      component: Kasutajakogemus
    },
    {
      path: '/veebikujundus',
      name: 'veebikujundus',
      component: Veebikujundus
    },
    {
      path: '/psuhholoogia-ja-suhtlemine',
      name: 'psuhholoogia-ja-suhtlemine',
      component: Psuhholoogia
    },
    {
      path: '/tootearendus',
      name: 'tootearendus',
      component: Tootearendus
    },
    {
      path: '/arvutite-riistvara-ja-vorgud',
      name: 'arvutite-riistvara-ja-vorgud',
      component: ArvutiteRiistvara
    },
    {
      path: '/programmeerimise-alused',
      name: 'programmeerimise-alused',
      component: ProgrammeerimiseAlused
    },
    {
      path: '/veebiarendus-ja-haldus',
      name: 'veebiarendus-ja-haldus',
      component: Veebiarendus
    },
    {
      path: '/karjaariplaneerimine-ja-ettevotlus',
      name: 'karjaariplaneerimine-ja-ettevotlus',
      component: Karjaariplaneerimine
    },
    {
      path: '/koolitused',
      name: 'koolitused',
      component: Koolitused
    },
    {
      path: '/iseseisev-nokitsemine',
      name: 'iseseisev-nokitsemine',
      component: Iseseisev
    },
    {
      path: '/tutvumispraktika',
      name: 'tutvumispraktika',
      component: Tutvumispraktika
    },
    {
      path: '/spetsialiseerumispraktika',
      name: 'spetsialiseerumispraktika',
      component: Spetsialiseerumispraktika
    },
  ]
})

export default router
