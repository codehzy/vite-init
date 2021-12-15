import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/view/Index'
import { getToken } from '../api/auth'

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
  {
    path: '/native-ui',
    name: 'NativeUi',
    component: () => import('@/view/NativeUi'),
  },
  {
    path: '/lodash',
    name: 'Lodash',
    component: () => import('@/view/lodash'),
  },
  {
    path: '/todo-list',
    name: 'todoList',
    component: () => import('@/view/todoList.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let token = getToken()
  console.log(token)

  if (!token) {
    next('/login')
  }
  next()
})

export default router
