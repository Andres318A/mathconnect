const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Devuelve un objeto claro { ok, status, data } para evitar ambigüedades
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

        // Leer como texto para soportar bodies vacíos o no JSON
        const text = await response.text();
        let parsed = null;
        try {
            parsed = text ? JSON.parse(text) : null;
        } catch (e) {
            // No es JSON, devolver el texto crudo
            parsed = text;
        }

        return {
            ok: response.ok,
            status: response.status,
            data: parsed
        };
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