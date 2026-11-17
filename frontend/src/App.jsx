import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import { getProductos, getCategorias } from './services/api';

function App() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [cargando, setCargando] = useState(true);

    // Hook useEffect para consultar los servicios web al cargar la página
    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true);
            const [prodsData, catsData] = await Promise.all([getProductos(), getCategorias()]);
            setProductos(prodsData);
            setCategorias(catsData);
            setCargando(false);
        };
        cargarDatos();
    }, []);

    // Filtrado de productos según la categoría seleccionada
    const productosFiltrados = categoriaSeleccionada 
        ? productos.filter(p => p.categoria === categoriaSeleccionada)
        : productos;

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Catálogo Nova Store</h2>
                    <p className="text-slate-500 mt-3 text-lg">Encuentra los mejores periféricos y hardware para tu setup.</p>
                </div>
                
                {cargando ? (
                    <div className="flex justify-center my-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
                    </div>
                ) : (
                    <>
                        <CategoryFilter 
                            categorias={categorias} 
                            categoriaSeleccionada={categoriaSeleccionada}
                            setCategoriaSeleccionada={setCategoriaSeleccionada}
                        />
                        {/* Usamos el componente ProductList que creaste */}
                        <ProductList productos={productosFiltrados} />
                    </>
                )}
            </main>
        </div>
    );
}

export default App;