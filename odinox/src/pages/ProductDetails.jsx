import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { odinoxData } from '../data';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Encontrar el producto en la data
        const items = odinoxData.categories[0].items;
        const foundProduct = items.find(item => item.id === parseInt(id));

        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // Si el producto no existe, redirigir a productos o mostrar no encontrado
            navigate('/productos');
        }
    }, [id, navigate]);

    if (!product) return <div className="min-h-screen bg-slate-50 flex justify-center items-center text-[#0A133C] font-bold">Cargando...</div>;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 pb-20">
            {/* Blue Header Area */}
            <div className="bg-industrial-bg pt-32 pb-32 px-4 rounded-b-[2rem] shadow-lg mb-[-6rem]">
                <div className="container mx-auto max-w-6xl">
                    {/* Back button */}
                    <Link to="/productos" className="inline-flex items-center text-metal-silver hover:text-brand-orange transition-colors mb-8 group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver a Productos
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
                    <div className="flex flex-col md:flex-row">

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 p-6 flex justify-center items-center bg-slate-100">
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

                            <div className="mb-4">
                                <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">
                                    {product.classification}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-[#0A133C] mb-6">
                                {product.name}
                            </h1>

                            <div className="w-20 h-1 bg-brand-orange mb-8 rounded-full"></div>

                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                                <h3 className="text-[#0A133C] font-black mb-4 text-lg">Características principales:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle2 size={20} className="text-brand-orange mr-3 shrink-0 mt-0.5" />
                                        <span className="text-slate-600 font-medium">Acero inoxidable de alta calidad y durabilidad garantizada.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={20} className="text-brand-orange mr-3 shrink-0 mt-0.5" />
                                        <span className="text-slate-600 font-medium">Diseño optimizado para su categoría: <strong className="text-[#0A133C]">{product.category}</strong>.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={20} className="text-brand-orange mr-3 shrink-0 mt-0.5" />
                                        <span className="text-slate-600 font-medium">Acabados profesionales que cumplen con estándares higiénicos.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <Link to="/contacto" className="bg-brand-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all text-center flex-1 shadow-lg shadow-brand-orange/20">
                                    Solicitar Cotización
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
