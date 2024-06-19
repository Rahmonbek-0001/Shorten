import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from '@/middleware/auth'
import CreateLink from '../components/CreateLink.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter:auth
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue'),
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
