import React from 'react';
import { Cpu } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-slate-900 text-cyan-400 shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Cpu size={32} />
                    <h1 className="text-2xl font-bold text-white">Nova <span className="text-cyan-400">Store</span></h1>
                </div>
                <nav>
                    <ul className="flex space-x-6 text-slate-300 font-medium">
                        <li className="cursor-pointer hover:text-cyan-400 transition">Inicio</li>
                        <li className="cursor-pointer hover:text-cyan-400 transition">Catálogo</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;