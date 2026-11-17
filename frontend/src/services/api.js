const API_URL = 'http://localhost:8000/api';

export const getProductos = async () => {
    try {
        const response = await fetch(`${API_URL}/productos/`);
        if (!response.ok) throw new Error('Error al cargar productos');
        return await response.json();
    } catch (error) {
        console.error("Error fetching productos:", error);
        return [];
    }
};

export const getCategorias = async () => {
    try {
        const response = await fetch(`${API_URL}/categorias/`);
        if (!response.ok) throw new Error('Error al cargar categorías');
        return await response.json();
    } catch (error) {
        console.error("Error fetching categorias:", error);
        return [];
    }
};

