import React from 'react';

const CategoryFilter = ({ categorias, categoriaSeleccionada, setCategoriaSeleccionada }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 my-6">
            <button 
                onClick={() => setCategoriaSeleccionada(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoriaSeleccionada === null 
                    ? 'bg-cyan-600 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
            >
                Todos los productos
            </button>
            {categorias.map((cat) => (
                <button 
                    key={cat.id}
                    onClick={() => setCategoriaSeleccionada(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        categoriaSeleccionada === cat.id 
                        ? 'bg-cyan-600 text-white shadow-md' 
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                    {cat.nombre}
                </button>
            ))}
        </div>
    );
};
export default CategoryFilter;