import api from './api';
import apiCall from './apiCall';

export const login = (payload) => {
    return apiCall(() => api.post('/auth/login', payload));
};

export const logout = () => {
    return apiCall(() => api.post('/auth/logout'));
};

export default {
    login,
    logout
};
