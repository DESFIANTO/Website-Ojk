import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Daftar from '../views/Daftar.vue'
import LupaPassword from '../views/LupaPassword.vue'
import RisetPassword from '../views/RisetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/daftar',
      name: 'Daftar',
      component: Daftar
    },
    {
      path: '/lupa-password',
      name: 'LupaPassword',
      component: LupaPassword
    },
    {
      path: '/riset-password',
      name: 'RisetPassword',
      component: RisetPassword
    },

  ]
})

export default router
