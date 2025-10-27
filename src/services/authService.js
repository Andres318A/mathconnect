import { api } from './api';

export const authService = {
    async register(userData) {
        try {
            // Enviar datos al endpoint de registro
            const res = await api.post('/auth/register', userData);
            if (!res.ok) {
                const errMsg = res.data && res.data.message ? res.data.message : 'Error en el registro';
                throw new Error(errMsg);
            }
            return res.data;
        } catch (error) {
            if (error.message === 'Failed to fetch') {
                throw new Error('No se puede conectar con el servidor. Verifica tu conexión.');
            }
            throw error;
        }
    },
    async login(credentials) {
        try {
            console.log('Intentando login con:', credentials);
            // `api.post` devuelve ahora { ok, status, data }
            const res = await api.post('/auth/login', credentials);
            console.log('Respuesta del api:', res);

            if (!res.ok) {
                if (res.status === 404) {
                    throw new Error('No se puede conectar con el servidor');
                }
                const errMsg = res.data && res.data.message ? res.data.message : 'Error en la autenticación';
                throw new Error(errMsg);
            }

            const data = res.data;
            console.log('Datos recibidos:', data);
            
            // Extraer token y usuario de la respuesta
            const { token, user } = data.data || data;
            
            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                console.error('No se recibió token en la respuesta:', data);
                throw new Error('Error en la autenticación: No se recibió token');
            }
            return data;
        } catch (error) {
            console.error('Error en login:', error);
            if (error.message === 'Failed to fetch') {
                throw new Error('No se puede conectar con el servidor. Verifica tu conexión.');
            }
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
};