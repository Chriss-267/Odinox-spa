import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import ProductGallery from '../components/ProductGallery';
import ServicesSection from '../components/ServicesSection';
import ClientCarousel from '../components/ClientCarousel';
import Contact from '../components/Contact';
import { odinoxData } from '../data';

const Home = () => {
    return (
        <main className="pb-20">
            <Hero />
            <InfoSection />

            <div className="relative z-20">
                <ProductGallery
                    title="PRODUCTOS DESTACADOS"
                    items={odinoxData.categories[0].items.slice(0, 4)} // Show only top 4 on home
                />

                <ServicesSection />

                <section className="px-4 md:px-12 py-16 max-w-5xl mx-auto text-center border-y border-slate-800 mt-0 mb-16 bg-gradient-to-b from-industrial-card/50 to-transparent rounded-sm">
                    <h2 className="mb-6 text-center">
                        <Link to="/nosotros" className="text-brand-orange font-black tracking-[0.3em] text-xs uppercase hover:text-brand-orange/80 transition-colors">
                            Un Vistazo a Odinox
                        </Link>
                    </h2>
                    <p className="text-xl md:text-2xl font-light italic text-metal-silver leading-relaxed">
                        "{odinoxData.quienesSomos}"
                    </p>
                </section>

                <ClientCarousel items={odinoxData.categories[1].items} />
                
                <Contact />
            </div>
        </main>
    );
};

export default Home;
