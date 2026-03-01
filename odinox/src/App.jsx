import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import ClientCarousel from './components/ClientCarousel';
import { odinoxData } from './data';

// Lazy loading remaining components
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-industrial-bg text-white font-sans selection:bg-safety-accent selection:text-white">
      <Navbar />

      <main className="pb-20">
        <Hero />

        <div className="relative z-20 -mt-12 md:-mt-20">
          <MovieRow
            title="PRODUCTOS DESTACADOS"
            items={odinoxData.categories[0].items}
            isLargeRow
          />

          <section id="mision" className="px-4 md:px-12 py-16 max-w-5xl mx-auto text-center border-y border-slate-800 my-16 bg-gradient-to-b from-industrial-card/50 to-transparent rounded-sm">
            <h2 className="text-safety-accent font-black tracking-[0.3em] text-xs mb-6 uppercase">Misión & Visión</h2>
            <p className="text-xl md:text-3xl font-light italic text-slate-300 leading-relaxed">
              "{odinoxData.mission}"
            </p>
          </section>

          <ClientCarousel items={odinoxData.categories[1].items} />
        </div>

        <section id="contacto" className="mt-20">
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-500 font-bold tracking-widest uppercase text-xs">Cargando...</div>}>
            <Contact />
          </Suspense>
        </section>
      </main>

      <Suspense fallback={<div className="h-20 bg-industrial-bg"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

