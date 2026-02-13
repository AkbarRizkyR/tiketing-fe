import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from './modules/auth'
import dashboardRoutes from './modules/dashboard'

const routes = [
  ...dashboardRoutes,
  ...authRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // TODO: Replace with real auth check (e.g., localStorage token)

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else if (to.meta.guest && isAuthenticated) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router
