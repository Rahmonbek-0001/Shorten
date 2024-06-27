import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from '@/middleware/auth.js'
import CreateLink from '../components/CreateLink.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
<<<<<<< HEAD
      beforeEnter:auth
=======
      beforeEnter: auth
>>>>>>> 99d5452e8c544ed2c8cbc24abc571530ecd91bb7
    },
    {
      path: '/login',
      name: 'login',
<<<<<<< HEAD
      component: () => import('@/views/auth/LoginView.vue'),
=======
      component: () => import('@/views/auth/LoginView.vue')
>>>>>>> 99d5452e8c544ed2c8cbc24abc571530ecd91bb7
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: CreateLink
    }
  ]
})

export default router
