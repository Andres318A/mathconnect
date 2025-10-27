import { api } from './api';

export const authService = {
    async login(credentials) {
        try {
            console.log('Intentando login con:', credentials);
            const response = await api.post('/auth/login', credentials);

            console.log('Respuesta del servidor:', response.status);
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('No se puede conectar con el servidor');
                }
                const error = await response.json();
                throw new Error(error.message || 'Error en la autenticación');
            }

            const data = await response.json();
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