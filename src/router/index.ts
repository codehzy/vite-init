import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/view/Index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/Login'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
