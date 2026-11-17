import React from 'react';

const ProductCard = ({ nombre, descripcion, precio, imagen_url, categoria_nombre, cantidad_disponible }) => {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-cyan-500/20 hover:shadow-lg transition-all bg-white flex flex-col">
            <img 
                src={imagen_url || 'https://via.placeholder.com/300x200?text=Hardware'} 
                alt={nombre} 
                className="w-full h-48 object-cover bg-slate-100"
            />
            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">{categoria_nombre}</span>
                <h3 className="text-lg font-bold text-slate-800 mt-1">{nombre}</h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2 flex-grow">{descripcion}</p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xl font-bold text-slate-900">S/ {precio}</span>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Stock: {cantidad_disponible}</span>
                </div>
                <button className="w-full mt-4 bg-slate-900 hover:bg-cyan-600 text-white py-2 rounded-md transition-colors font-medium">
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};
export default ProductCard;