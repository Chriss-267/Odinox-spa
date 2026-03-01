import React, { useRef } from 'react';

const MovieRow = ({ title, items, isLargeRow }) => {
    const rowRef = useRef(null);

    const scroll = (direction) => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="row-container animate-netflixFade">
            <div className="flex items-baseline gap-4 mb-4 ml-2">
                <h2 className="text-2xl font-black text-white tracking-tight">{title}</h2>
                <div className="h-px flex-grow bg-slate-800"></div>
            </div>

            <div className="relative group">
                <div
                    ref={rowRef}
                    className="row-posters flex overflow-x-scroll gap-4 pb-4"
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`flex-none transition-all duration-300 transform hover:scale-105 cursor-pointer rounded-sm overflow-hidden bg-industrial-card border border-slate-800 hover:border-safety-accent/50 ${isLargeRow ? 'w-64 md:w-80' : 'w-48 md:w-64'}`}
                        >
                            <div className={`w-full ${isLargeRow ? 'h-96' : 'h-36 md:h-44'} bg-slate-900 flex flex-col justify-end p-4 relative`}>
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                                        onError={(e) => {
                                            if (!e.target.src.includes('unsplash')) {
                                                e.target.src = "https://images.unsplash.com/photo-1533036802640-19ef69b30b42?auto=format&fit=crop&q=80&w=800";
                                            }
                                        }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-industrial-bg via-industrial-bg/20 to-transparent z-1" />

                                <div className="relative z-10">
                                    <h3 className={`font-bold tracking-tight text-metal-silver ${item.brand ? 'text-lg md:text-xl' : 'text-sm md:text-md'}`}>
                                        {item.name.toUpperCase()}
                                    </h3>
                                    {!item.brand && (
                                        <button className="mt-2 text-[10px] font-black tracking-widest bg-safety-accent text-white px-3 py-1.5 rounded-sm hover:brightness-110 transition-all">
                                            DETALLES
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Industrial Scroll buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-0 bottom-4 bg-industrial-bg/80 px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 border-r border-slate-800 text-white font-bold"
                >
                    &larr;
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-4 bg-industrial-bg/80 px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 border-l border-slate-800 text-white font-bold"
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default MovieRow;

