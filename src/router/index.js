import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Application from '../views/Application.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store'

// Lazy-loaded dashboard components
const DashboardLayout = () => import('../views/dashboard/DashboardLayout.vue')
const InternDashboard = () => import('../views/dashboard/intern/InternDashboard.vue')
const ApplicationCheck = () => import('../views/dashboard/intern/ApplicationCheck.vue')
const InternProfile = () => import('../views/dashboard/intern/InternProfile.vue')

const AdminDashboard = () => import('../views/dashboard/admin/AdminDashboard.vue')
const StructureManagement = () => import('../views/dashboard/admin/StructureManagement.vue')
const AgentManagement = () => import('../views/dashboard/admin/AgentManagement.vue')

const DpafDashboard = () => import('../views/dashboard/dpaf/DpafDashboard.vue')
const ApplicationReview = () => import('../views/dashboard/dpaf/ApplicationReview.vue')
const ApplicationStatistics = () => import('../views/dashboard/dpaf/ApplicationStatistics.vue')

// Auth guard middleware
const requireAuth = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
}

// Role-specific guards
const requireAdmin = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else if (!store.getters.isAdmin) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

const requireDpaf = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else if (!store.getters.isDpaf) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

const requireIntern = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else if (!store.getters.isIntern) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

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
  
  // Dashboard routes with nested routes
  {
    path: '/dashboard',
    component: DashboardLayout,
    beforeEnter: requireAuth,
    children: [
      // Intern Dashboard routes
      {
        path: 'intern',
        name: 'InternDashboard',
        component: InternDashboard,
        beforeEnter: requireIntern
      },
      {
        path: 'intern/application-check',
        name: 'ApplicationCheck',
        component: ApplicationCheck,
        beforeEnter: requireIntern
      },
      {
        path: 'intern/profile',
        name: 'InternProfile',
        component: InternProfile,
        beforeEnter: requireIntern
      },
      
      // Admin Dashboard routes
      {
        path: 'admin',
        name: 'AdminDashboard',
        component: AdminDashboard,
        beforeEnter: requireAdmin
      },
      {
        path: 'admin/structures',
        name: 'StructureManagement',
        component: StructureManagement,
        beforeEnter: requireAdmin
      },
      {
        path: 'admin/agents',
        name: 'AgentManagement',
        component: AgentManagement,
        beforeEnter: requireAdmin
      },
      
      // DPAF Dashboard routes
      {
        path: 'dpaf',
        name: 'DpafDashboard',
        component: DpafDashboard,
        beforeEnter: requireDpaf
      },
      {
        path: 'dpaf/review',
        name: 'ApplicationReview',
        component: ApplicationReview,
        beforeEnter: requireDpaf
      },
      {
        path: 'dpaf/statistics',
        name: 'ApplicationStatistics',
        component: ApplicationStatistics,
        beforeEnter: requireDpaf
      }
    ]
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
