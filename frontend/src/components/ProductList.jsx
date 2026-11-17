import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productos }) => {
    if (productos.length === 0) {
        return <p className="text-center text-slate-500 my-10">No hay productos para mostrar en esta categoría.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productos.map(producto => (
                <ProductCard key={producto.id} {...producto} />
            ))}
        </div>
    );
};
export default ProductList;