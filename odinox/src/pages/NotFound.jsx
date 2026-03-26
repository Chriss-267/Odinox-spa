import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-industrial-bg flex flex-col items-center justify-center relative overflow-hidden pt-32">
            <div className="relative z-10 text-center max-w-3xl px-4 flex flex-col items-center">

                {/* 404 Text with integrated Welding Animation */}
                <h1 className="flex items-center justify-center text-8xl md:text-[180px] font-black mb-8 tracking-tighter drop-shadow-2xl leading-none">
                    <span className="transform scale-x-125 inline-block px-4 md:px-6 metal-text">4</span>

                    {/* Welding "0" Container */}
                    <div className="relative w-24 h-32 md:w-32 md:h-40 flex items-center justify-center mx-3 md:mx-6 z-0">
                        {/* The "0" */}
                        <span className="absolute transform scale-x-125 text-[100px] md:text-[180px] metal-text">0</span>

                        {/* Welding Torch */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[120%] animate-weld-torch z-10">
                            <div className="w-3 h-16 md:w-5 md:h-24 bg-slate-800 rounded-t-lg origin-bottom transform rotate-[30deg] ml-6 md:ml-10 border-l-2 border-slate-500"></div>
                            <div className="w-2 h-6 md:w-3 md:h-8 bg-red-800 absolute bottom-[-18px] md:bottom-[-24px] left-[20px] md:left-[32px] transform rotate-[30deg] rounded-b-full"></div>
                            <div className="w-1 h-4 md:w-1.5 md:h-6 bg-blue-300 rounded-b-sm absolute bottom-[-28px] md:bottom-[-40px] left-[23px] md:left-[38px] transform rotate-[30deg]"></div>
                        </div>

                        {/* Welding Arc / Glow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-blue-500 rounded-full blur-2xl animate-weld-flash z-10 mix-blend-screen opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full blur-md animate-weld-flash z-10 opacity-80"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full blur-sm animate-weld-flash z-10 shadow-[0_0_30px_#fff]"></div>

                        {/* Sparks */}
                        <div className="absolute top-1/2 left-1/2 w-0 h-0 z-20 pointer-events-none">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className={`weld-spark weld-spark-${i + 1} bg-orange-300 shadow-[0_0_10px_#FCA5A5]`}></div>
                            ))}
                        </div>
                    </div>

                    <span className="transform scale-x-125 inline-block px-4 md:px-6 metal-text">4</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest">
                    Ruta no soldada
                </h2>

                <p className="text-metal-silver text-lg mb-12 leading-relaxed max-w-lg mx-auto">
                    Parece que hemos perdido la conexión. La pieza que buscas no se encuentra en nuestro taller de fabricación.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#b05e04] transition-all duration-300 shadow-lg border border-transparent hover:border-white/20"
                >
                    <Home size={20} />
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
