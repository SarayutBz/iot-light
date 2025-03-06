import { createRouter, createWebHistory } from 'vue-router'
import ControlLight from '../views/contolLight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/controlLight',
      name: 'controlLight',
      component: ControlLight,
    },
    
  ],
})

export default router
