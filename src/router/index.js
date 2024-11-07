import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Link1 from '@/views/Link1.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    { path: '/', name: 'home', component: Home,  },
    { path: '/link1', name: 'link1', component: Link1,  },
    
  ]
})

export default router
