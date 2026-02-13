import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

export default [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {
            guest: true,
            layout: 'AuthLayout'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: {
            guest: true,
            layout: 'AuthLayout'
        }
    }
]
