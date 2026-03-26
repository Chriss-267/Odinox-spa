import { useState, useEffect } from 'react';
import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { odinoxData } from '../data';

const slides = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dygrpoblt/image/upload/v1772233135/premium_photo-1682141533327-7a30e7279eb0_ycinx2.jpg',
        subtitle: 'Precisión Industrial',
        title: 'ODINOX',
        description: `${odinoxData.quienesSomos} Fabricamos soluciones en acero inoxidable con los más altos estándares de calidad.`
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000',
        subtitle: 'Corte y Doblez',
        title: 'SERVICIOS',
        description: 'Especialistas en procesos de corte de precisión, doblez y soldadura para cualquier especificación industrial o comercial.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1533381363-22851ee73da7?auto=format&fit=crop&q=80&w=2000',
        subtitle: 'Calidad Garantizada',
        title: 'MATERIALES',
        description: 'Distribuimos placas, tuberías y perfiles de acero inoxidable de grado alimenticio, industrial y arquitectónico con la máxima durabilidad.'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <header className="relative h-[80vh] md:h-[95vh] w-full text-white overflow-hidden group">

            {/* Carousel Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'
                            }`}
                    />

                    {/* Gradients */}
                    <div className="absolute inset-0 metal-gradient-left opacity-90"></div>
                    <div className="absolute inset-0 metal-gradient-bottom"></div>

                    {/* Billboard Content */}
                    <div className={`absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 max-w-3xl transition-all duration-1000 transform ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}>
                        <div className="mb-2">
                            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase text-brand-orange opacity-90">{slide.subtitle}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight leading-tight text-white/95 drop-shadow-sm">
                            {slide.title}
                        </h1>

                        <p className="text-sm md:text-base font-light mb-8 leading-loose text-slate-300 max-w-xl opacity-90">
                            {slide.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-1">
                            <a href="#contact" className="bg-brand-orange text-white px-6 py-2.5 text-[13px] font-medium rounded-sm hover:bg-[#b05e04] transition-colors uppercase tracking-widest flex items-center group/btn">
                                Cotizar <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                            <a href="/Catalogo Odinox.pdf" download className="bg-transparent border border-white/30 text-white/90 px-6 py-2.5 text-[13px] font-medium rounded-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest flex items-center">
                                <Download className="h-4 w-4 mr-2" /> Catálogo
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows (Visible on hover) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-brand-orange text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-brand-orange shadow-lg"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-brand-orange text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-brand-orange shadow-lg"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-12 h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-brand-orange w-16 shadow-[0_0_10px_#FDD700]' : 'bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </header>
    );
};

export default Hero;


