import React from 'react';
import { Check } from 'lucide-react';
import { odinoxData } from '../data';

const InfoSection = () => {
    return (
        <section className="bg-[#f8f9fa] w-full py-16 md:py-32 relative overflow-hidden">
            {/* Aesthetic Architectural Lines */}
            <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-50 hidden md:block z-0"></div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent hidden md:block z-0"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent hidden md:block z-0 transform -rotate-2"></div>

            {/* Subtle floating dot pattern for texture */}
            <div className="absolute top-10 right-10 grid grid-cols-3 gap-8 opacity-20">
                {[...Array(9)].map((_, i) => (
                    <div key={`dot-${i}`} className="w-1 h-1 rounded-full bg-industrial-bg"></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-16 relative z-10">

                {/* Text Content Block (Left) */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-brand-orange"></span>
                        <h3 className="text-sm font-semibold tracking-[0.2em] text-industrial-bg uppercase">
                            Respaldo y Garantía
                        </h3>
                    </div>

                    <div className="flex items-baseline gap-4 mb-6">
                        <h2 className="text-7xl md:text-[110px] font-black text-[#0A133C] leading-none tracking-tighter">
                            +5
                        </h2>
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-3xl font-bold text-brand-orange leading-none">Años de</span>
                            <span className="text-2xl md:text-3xl font-bold text-[#0A133C] leading-none">Experiencia</span>
                        </div>
                    </div>

                    <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light max-w-lg">
                        Fabricamos equipos de acero inoxidable con materiales de alta calidad conforme a lo que el cliente necesite. Atendemos sectores clave de la industria.
                    </p>

                    <div className="space-y-5 w-full">
                        <div className="flex items-start gap-4">
                            <div className="bg-brand-orange/10 p-2 rounded-lg mt-1">
                                <Check className="text-brand-orange" size={20} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-[#0A133C] font-semibold text-lg">Grado Alimenticio</h4>
                                <p className="text-slate-500 text-sm mt-1">Máxima higiene y seguridad para el sector de alimentos.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-brand-orange/10 p-2 rounded-lg mt-1">
                                <Check className="text-brand-orange" size={20} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-[#0A133C] font-semibold text-lg">Sector Farmacéutico</h4>
                                <p className="text-slate-500 text-sm mt-1">Cumplimiento estricto de estándares sanitarios rigurosos.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-industrial-bg/5 p-2 rounded-lg mt-1">
                                <Check className="text-industrial-bg" size={20} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-[#0A133C] font-semibold text-lg">Acabado Arquitectónico</h4>
                                <p className="text-slate-500 text-sm mt-1">Estructuras sólidas, estéticas y altamente duraderas.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Composition (Right) */}
                <div className="w-full md:w-1/2 relative flex justify-center py-10">
                    {/* Metal Presentation Image */}
                    <img
                        src="https://res.cloudinary.com/dygrpoblt/image/upload/v1773099711/aceros_lemerpax-1240x1240_qwizhm.jpg"
                        alt="Productos Odinox de Acero Inoxidable"
                        className="relative z-10 w-full max-w-[450px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
