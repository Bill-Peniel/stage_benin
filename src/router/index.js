import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Application from '../views/Application.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import Dashboard from '../views/Dashboard.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/application',
    name: 'Application',
    component: Application
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, requiresAdmin: true },
    beforeEnter: (to, from, next) => {
      if (!store.getters.hasAdminAccess) {
        next('/login')
      } else if (store.getters.isDpaf) {
        next('/dashboard/dpaf')
      } else {
        next()
      }
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'structures',
        name: 'Structures',
        component: () => import('../views/dashboard/Structures.vue')
      },
      {
        path: 'tuteurs',
        name: 'Tuteurs',
        component: () => import('../views/dashboard/Tuteurs.vue')
      }
    ]
  },
  {
    path: '/dashboard/dpaf',
    name: 'DpafDashboard',
    component: () => import('../views/dashboard/DpafDashboard.vue'),
    meta: { requiresAuth: true, requiresDpaf: true },
    beforeEnter: (to, from, next) => {
      if (!store.getters.isDpaf) {
        next('/login')
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 }
  }
})

export default router
