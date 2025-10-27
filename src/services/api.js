const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const api = {
    async fetch(endpoint, options = {}) {
        const url = `${API_URL}${endpoint}`;
        const defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        };

        const response = await fetch(url, {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Error en la petición');
        }

        return response.json();
    },

    get(endpoint) {
        return this.fetch(endpoint);
    },

    post(endpoint, data) {
        return this.fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
};