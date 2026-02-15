import { defineStore } from 'pinia';

export const useAuthorizationStore = defineStore('authorization', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        roleName: null
    }),
    actions: {
        clearSession() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }
});
