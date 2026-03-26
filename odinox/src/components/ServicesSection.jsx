import React from 'react';
import { Flame, MoveDiagonal, Scissors, Sparkles, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        title: 'Soldadura',
        description: 'Servicios de soldadura TIG/MIG de alta precisión para acabados sanitarios e industriales perfectos.',
        icon: <Flame size={32} strokeWidth={1.5} />,
    },
    {
        title: 'Dobleces',
        description: 'Plegado y doblez CNC exacto para láminas y perfiles, garantizando ángulos perfectos en cada pieza.',
        icon: <MoveDiagonal size={32} strokeWidth={1.5} />,
    },
    {
        title: 'Corte',
        description: 'Corte de placa y lámina con acabados limpios, ideal para proyectos que exigen la máxima precisión.',
        icon: <Scissors size={32} strokeWidth={1.5} />,
    },
    {
        title: 'Pulido',
        description: 'Pulido sanitario y espejo que asegura superficies libres de porosidad para la industria alimenticia y farmacéutica.',
        icon: <Sparkles size={32} strokeWidth={1.5} />,
    },
    {
        title: 'Mantenimientos',
        description: 'Servicio técnico especializado preventivo y correctivo para mantener tus equipos industriales comerciales en óptimo estado.',
        icon: <Wrench size={32} strokeWidth={1.5} />,
    }
];

const ServicesSection = () => {
    return (
        <section id="servicios" className="bg-[#f8f9fa] w-full py-24 border-t border-slate-200 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/30 rounded-full blur-[80px] pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 bg-brand-orange/10 px-5 py-2.5 rounded-full mb-6 text-brand-orange font-black tracking-widest text-xs uppercase shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse"></span>
                        Capacidad Instalada
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-8">
                        NUESTROS SERVICIOS
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                        Contamos con la maquinaria y el personal calificado para transformar el acero inoxidable de acuerdo a las necesidades más exigentes de su proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-orange/15 border border-slate-100 hover:border-brand-orange/30 transition-all duration-500 group cursor-default relative overflow-hidden focus:-translate-y-2 hover:-translate-y-2"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-[100px] group-hover:bg-brand-orange/10 transition-colors pointer-events-none z-0"></div>

                            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-[#b05e04] group-hover:text-white transition-all duration-500 mb-8 shadow-sm group-hover:shadow-brand-orange/30 group-hover:scale-110 relative z-10">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-brand-orange transition-colors duration-300 relative z-10">{service.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors duration-300 relative z-10">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
