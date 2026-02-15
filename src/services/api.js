import axios from 'axios'
import { useAuthorizationStore } from '@/stores/authorization'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
    timeout: import.meta.env.VITE_APP_TIMEOUT || 10000,
    withCredentials: true,
    headers: {
        accept: 'application/json; charset=UTF-8',
    },
})

// Global wrapper for API calls
export const apiCall = async (request) => {
    try {
        const response = await request();
        return response.data;
    } catch (error) {
        throw error;
    }
};

api.interceptors.request.use(
    (req) => {
        const auth = useAuthorizationStore()
        const token = auth.token
        req.headers['X-Client-ID'] = localStorage.getItem('ip') || '127.0.0.1'

        if (token) {
            req.headers.Authorization = `Bearer ${token}`
        }

        return req
    },
    (error) => {
        return Promise.reject(error)
    },
)

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default api
