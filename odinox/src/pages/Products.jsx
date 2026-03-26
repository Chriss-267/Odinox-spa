import React, { useState, useMemo, useEffect } from 'react';
import { odinoxData } from '../data';
import { Link } from 'react-router-dom';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

const Products = () => {
    const allProducts = odinoxData.categories[0].items;

    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedClassification, setSelectedClassification] = useState("Todas");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ["Todas", ...new Set(allProducts.map(p => p.category))];
    const classifications = ["Todas", ...new Set(allProducts.map(p => p.classification))];

    // Reiniciar a la página 1 cuando cambian los filtros
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedClassification, searchQuery]);

    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            const matchCategory = selectedCategory === "Todas" || product.category === selectedCategory;
            const matchClassification = selectedClassification === "Todas" || product.classification === selectedClassification;
            const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchCategory && matchClassification && matchSearch;
        });
    }, [allProducts, selectedCategory, selectedClassification, searchQuery]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    const hasActiveFilters = selectedCategory !== "Todas" || selectedClassification !== "Todas" || searchQuery !== "";

    const clearFilters = () => {
        setSelectedCategory("Todas");
        setSelectedClassification("Todas");
        setSearchQuery("");
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Blue Header Area */}
            <div className="bg-industrial-bg pt-32 pb-20 px-4 rounded-b-[2rem] shadow-lg mb-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
                        Nuestros <span className="text-brand-orange">Productos</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Equipos de acero inoxidable fabricados con materiales de alta calidad para satisfacer las necesidades de su industria.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Search and Filters Section */}
                <div className="mb-12 bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
                    {/* Search Bar */}
                    <div className="relative mb-6 max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[#0A133C] font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all shadow-inner"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-brand-orange transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <div className="flex flex-col gap-3 w-full md:w-auto items-center">
                            <label className="text-sm text-slate-500 font-bold uppercase tracking-wider">Categoría</label>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${selectedCategory === cat ? 'bg-brand-orange text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-16 bg-slate-200 mx-2"></div>
                        <div className="md:hidden w-full h-px bg-slate-200 my-2"></div>

                        <div className="flex flex-col gap-3 w-full md:w-auto items-center">
                            <label className="text-sm text-slate-500 font-bold uppercase tracking-wider">Clasificación</label>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {classifications.map(cls => (
                                    <button
                                        key={cls}
                                        onClick={() => setSelectedClassification(cls)}
                                        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${selectedClassification === cls ? 'bg-brand-orange text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                    >
                                        {cls}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active Filters Summary / Clear Button */}
                    {hasActiveFilters && (
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={clearFilters}
                                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-orange transition-colors bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg"
                            >
                                <X size={16} />
                                Limpiar todos los filtros
                            </button>
                        </div>
                    )}
                </div>

                {/* Products Grid */}
                {paginatedProducts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {paginatedProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg overflow-hidden group border border-slate-200 shadow-sm hover:border-brand-orange hover:shadow-lg transition-all duration-300 flex flex-col">
                                    <div className="relative h-64 overflow-hidden bg-slate-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A133C]/60 to-transparent opacity-80"></div>
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="bg-white/90 backdrop-blur-sm text-[#0A133C] text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 relative -mt-8 z-10 flex-grow flex flex-col justify-between bg-white rounded-t-xl">
                                        <div>
                                            <p className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">{product.classification}</p>
                                            <h3 className="text-xl font-bold text-[#0A133C] mb-4">{product.name}</h3>
                                        </div>

                                        <Link to={`/producto/${product.id}`} className="inline-flex text-brand-orange font-bold items-center gap-2 hover:text-[#0A133C] transition-colors group/link mt-auto">
                                            Ver Detalles
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-colors"
                                >
                                    <ChevronLeft size={24} />
                                </button>

                                <span className="text-slate-600 font-bold min-w-[100px] text-center">
                                    Página {currentPage} de {totalPages}
                                </span>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-colors"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500 text-xl font-bold mb-2">No se encontraron productos</p>
                        <p className="text-slate-400 mb-6">Intenta ajustando tus filtros de búsqueda.</p>
                        <button
                            onClick={clearFilters}
                            className="bg-brand-orange text-white px-6 py-2 rounded-lg font-bold hover:bg-[#b05e04] transition-colors shadow-md"
                        >
                            Limpiar todos los filtros
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
