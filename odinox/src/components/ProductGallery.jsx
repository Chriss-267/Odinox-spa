import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductGallery = ({ title, items }) => {
    const navigate = useNavigate();

    return (
        <section className="bg-white w-full py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 block">
                            Nuestra Selección
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#0A133C] tracking-tight mb-4">
                            {title}
                        </h2>
                        <p className="text-slate-500 text-lg font-light leading-relaxed">
                            Descubre nuestros equipos de acero inoxidable destacados, diseñados con precisión para la industria.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/productos')}
                        className="flex items-center gap-2 text-sm font-bold text-[#0A133C] hover:text-brand-orange transition-colors group pb-1 border-b border-[#0A133C] hover:border-brand-orange"
                    >
                        EXPLORAR CATÁLOGO
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer flex flex-col"
                            onClick={() => navigate(`/producto/${item.id}`)}
                        >
                            {/* Clean Image Area */}
                            <div className="w-full aspect-[4/5] bg-slate-50 rounded-2xl overflow-hidden mb-6 relative">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
                                        onError={(e) => {
                                            if (!e.target.src.includes('unsplash')) {
                                                e.target.src = "https://images.unsplash.com/photo-1533036802640-19ef69b30b42?auto=format&fit=crop&q=80&w=800";
                                            }
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                        Sin imagen
                                    </div>
                                )}

                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-[#0A133C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Crisp Typography */}
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest">
                                        {item.classification || "Inoxidable"}
                                    </span>
                                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                                        {item.category || "Equipos"}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-[#0A133C] leading-snug mb-4 group-hover:text-brand-orange transition-colors duration-300">
                                    {item.name}
                                </h3>

                                <div className="mt-auto pt-2 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-[#0A133C] transition-colors duration-300">
                                    Ver detalles <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
