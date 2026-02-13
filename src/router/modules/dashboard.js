import DashboardView from '@/views/dashboard/DashboardView.vue'

export default [
    {
        path: '/',
        name: 'dashboard',
        component: DashboardView,
        meta: {
            layout: 'AppLayout',
            requiresAuth: true // Assuming dashboard needs auth, though logic isn't there yet
        }
    }
]
