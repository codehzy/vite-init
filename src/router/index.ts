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
  {
    path: '/pinia-test',
    name: 'piniaTest',
    component: () => import('@/view/piniaTest'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
