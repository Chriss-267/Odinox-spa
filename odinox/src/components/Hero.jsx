import { ArrowRight, Download } from 'lucide-react';
import { odinoxData } from '../data';

const Hero = () => {
    return (
        <header className="relative h-[80vh] md:h-[95vh] w-full text-white overflow-hidden">
            {/* Industrial Billboard Background */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://res.cloudinary.com/dygrpoblt/image/upload/v1772233135/premium_photo-1682141533327-7a30e7279eb0_ycinx2.jpg"
                    alt="Industrial Steel Production"
                    className="w-full h-full object-cover"
                />
                {/* Gradients */}
                <div className="absolute inset-0 metal-gradient-left"></div>
                <div className="absolute inset-0 metal-gradient-bottom"></div>
            </div>

            {/* Billboard Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-12 max-w-2xl animate-netflixFade">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-safety-accent"></div>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-safety-accent">Precisión Industrial</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter leading-[0.9] drop-shadow-2xl">
                    ODINOX
                </h1>

                <p className="text-md md:text-xl font-medium drop-shadow-lg mb-8 leading-relaxed text-slate-300">
                    {odinoxData.quienesSomos} Fabricamos soluciones en acero inoxidable con los más altos estándares de calidad.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <a href="#contact" className="btn-industrial-main group">
                        Cotizar <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/Catalogo Odinox.pdf" download className="btn-industrial-secondary group">
                        <Download className="h-5 w-5 text-safety-accent" /> Catálogo
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;


