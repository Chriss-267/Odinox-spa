import React, { useState } from 'react';

const ClientCard = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="flex-none cursor-pointer flex flex-col items-center group"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: '1000px' }}
        >
            <div 
                className={`w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md border border-slate-200 transition-all duration-700 relative ${!isFlipped ? 'group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-10px_rgba(217,119,6,0.15)] group-hover:border-brand-orange/20' : ''}`}
                style={{ 
                    transformStyle: 'preserve-3d', 
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
                }}
            >
                {/* Front (Logo) */}
                <div 
                    className="absolute w-full h-full bg-white rounded-full flex items-center justify-center p-6 md:p-8"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="object-contain w-full h-full drop-shadow-sm transition-transform"
                        onError={(e) => {
                            e.target.style.opacity = '0';
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="absolute hidden text-slate-800 font-bold tracking-wider text-sm text-center px-2 uppercase">{item.name}</span>
                </div>
                
                {/* Back (Testimonial) */}
                <div 
                    className="absolute w-full h-full bg-[#0d1b54] rounded-full flex flex-col items-center justify-center p-3 md:p-6 text-center border-2 border-brand-orange/60"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <p className="text-[10px] md:text-sm text-slate-300 italic mb-1 md:mb-2 line-clamp-3">"Excelente calidad y servicio profesional."</p>
                    <div className="w-8 h-[1px] bg-brand-orange mb-1 md:mb-2"></div>
                    <span className="text-[10px] md:text-sm font-bold text-white leading-tight line-clamp-2 px-1">{item.name}</span>
                </div>
            </div>
        </div>
    );
};

const ClientCarousel = ({ items }) => {
    // Duplicate the items array multiple times to ensure enough width for continuous scrolling
    const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16 text-center">
                <span className="text-brand-orange text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                    Nuestros Clientes
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-[#0A133C] tracking-tight">
                    Empresas que Confían
                </h2>
                <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Creative Track Background */}
            <div className="absolute top-1/2 left-0 right-0 h-48 md:h-64 bg-white shadow-[0_0_50px_rgba(0,0,0,0.03)] -skew-y-2 transform -translate-y-1/2 border-y border-slate-100 z-0"></div>

            <div className="relative flex w-full group overflow-hidden py-10 z-10">
                {/* Fade overlays for smooth entry/exit */}
                <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none"></div>

                <div className="flex w-max animate-marquee space-x-12 md:space-x-24 px-12 items-center hover:[animation-play-state:paused]">
                    {duplicatedItems.map((item, index) => (
                        <ClientCard key={`${item.id}-${index}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientCarousel;
