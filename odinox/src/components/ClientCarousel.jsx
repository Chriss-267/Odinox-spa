import React from 'react';

const ClientCarousel = ({ items }) => {
    // Duplicate the items array multiple times to ensure enough width for continuous scrolling
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <section className="py-20 md:py-32 overflow-hidden border-y border-slate-800 my-16 bg-gradient-to-b from-industrial-bg via-slate-900/40 to-industrial-bg relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-industrial-bg/5 to-transparent pointer-events-none"></div>

            <h2 className="text-center text-safety-accent font-black tracking-[0.4em] text-xs mb-16 uppercase relative z-10 drop-shadow-md">
                Confían en Nosotros
            </h2>

            <div className="relative flex w-full group overflow-hidden">
                {/* Left/Right fading gradients for a clean cut-off effect */}
                <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-industrial-bg to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-industrial-bg to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-marquee space-x-8 md:space-x-16 px-8 items-center">
                    {duplicatedItems.map((item, index) => (
                        <div key={`${item.id}-${index}-${item.image}`} className="flex flex-col items-center justify-center w-40 md:w-56 flex-none transition-all duration-500 group-hover/item:scale-110 group-hover/item:z-20 cursor-pointer relative">
                            <div className="bg-white/95 p-6 rounded-2xl flex items-center justify-center w-full h-32 opacity-90 hover:opacity-100 transition-all duration-500 border border-slate-200 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:border-white">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-contain max-h-20 max-w-full mix-blend-multiply"
                                    onError={(e) => {
                                        e.target.style.opacity = '0';
                                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="absolute hidden text-slate-900 font-black tracking-wider text-sm text-center px-2 uppercase z-10">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientCarousel;
