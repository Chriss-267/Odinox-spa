import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Wrench, ShieldCheck, Clock } from 'lucide-react';
import data from '../data/mantenimientos.json';

const WHATSAPP_NUMBER = '50374712525';

const whatsappLink = (servicio) => {
    const msg = `Hola, me interesa el servicio de ${servicio}. ¿Podrían brindarme más información y una cotización?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: 'easeOut' },
};

const Mantenimientos = () => {
    const { hero, mantenimientos, proceso } = data;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            {/* Blue Header Area (mismo estilo que Productos) */}
            <div className="bg-industrial-bg pt-32 pb-20 px-4 rounded-b-[2rem] shadow-lg mb-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
                        Nuestros <span className="text-brand-orange">Mantenimientos</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        {hero.subtitle}
                    </p>
                </div>
            </div>

            {/* ===== CONTENIDO ===== */}
            <div>
                {/* ===== TRUST BAR ===== */}
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { icon: Wrench, title: 'Personal calificado', text: 'Técnicos especializados en acero inoxidable' },
                            { icon: Clock, title: 'Sin detener su operación', text: 'Trabajamos en horarios que usted define' },
                            { icon: ShieldCheck, title: 'Trabajo garantizado', text: 'Informe técnico y respaldo por escrito' },
                        ].map(({ icon: Icon, title, text }) => (
                            <div key={title} className="flex items-center gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-sm bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
                                    <Icon size={22} className="text-brand-orange" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wide text-slate-900">{title}</p>
                                    <p className="text-slate-500 text-xs mt-0.5">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== LISTADO DE MANTENIMIENTOS ===== */}
                <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
                    <motion.div {...fadeUp} className="max-w-2xl mb-16 md:mb-24">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-10 bg-brand-orange" />
                            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                                Lo que hacemos
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight text-slate-900">
                            Tipos de mantenimiento
                        </h2>
                    </motion.div>

                    <div className="space-y-24 md:space-y-32">
                        {mantenimientos.map((m, idx) => {
                            const reversed = idx % 2 === 1;
                            return (
                                <motion.article
                                    key={m.id}
                                    {...fadeUp}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}
                                >
                                    {/* Imagen con marco desplazado */}
                                    <div className="relative [direction:ltr]">
                                        <div className={`absolute -inset-3 border border-brand-orange/40 rounded-sm ${reversed ? '-translate-x-3 translate-y-3' : 'translate-x-3 translate-y-3'}`} />
                                        <div className="relative overflow-hidden rounded-sm group shadow-xl shadow-slate-200">
                                            <img
                                                src={m.imagen}
                                                alt={m.titulo}
                                                loading="lazy"
                                                className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <span className="absolute top-4 left-4 bg-industrial-bg/90 backdrop-blur-sm text-safety-accent font-extrabold text-lg px-4 py-1.5 rounded-sm tracking-widest">
                                                {m.codigo}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="[direction:ltr]">
                                        <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-3 leading-tight text-slate-900">
                                            {m.titulo}
                                        </h3>
                                        <p className="text-brand-orange font-semibold text-sm mb-5">
                                            {m.resumen}
                                        </p>
                                        <p className="text-slate-600 leading-relaxed mb-7 text-[15px]">
                                            {m.descripcion}
                                        </p>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                                            {m.alcance.map((item) => (
                                                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                                                    <Check size={16} className="text-brand-orange mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href={whatsappLink(m.titulo)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors"
                                        >
                                            Cotizar este servicio
                                            <ArrowRight size={15} />
                                        </a>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </section>

                {/* ===== PROCESO ===== */}
                <section className="bg-white border-y border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24">
                        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-slate-900">
                                ¿Cómo trabajamos?
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base">
                                Un proceso claro y sin sorpresas, desde el primer contacto hasta la entrega del informe técnico.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {proceso.map((p, idx) => (
                                <motion.div
                                    key={p.paso}
                                    {...fadeUp}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                                    className="relative pt-6"
                                >
                                    <span className="absolute top-0 left-0 text-6xl font-extrabold text-brand-orange/15 leading-none select-none">
                                        {p.paso}
                                    </span>
                                    <div className="relative border-l-2 border-brand-orange pl-5">
                                        <h3 className="font-bold uppercase tracking-wide mb-2 text-slate-900">{p.titulo}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{p.texto}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA FINAL ===== */}
                <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
                    <motion.div
                        {...fadeUp}
                        className="relative overflow-hidden rounded-sm bg-industrial-bg p-10 md:p-16 text-center shadow-2xl"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
                        <h2 className="text-2xl md:text-4xl font-extrabold uppercase mb-4 leading-tight text-metal-silver">
                            Su equipo no puede esperar a fallar
                        </h2>
                        <p className="text-metal-silver/70 max-w-xl mx-auto mb-8 text-sm md:text-base">
                            Agende hoy un diagnóstico sin costo y reciba una propuesta de mantenimiento a la medida de su operación.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={whatsappLink('un diagnóstico de mantenimiento')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-orange hover:bg-[#b05e04] text-white px-8 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
                            >
                                Agendar diagnóstico
                            </a>
                            <Link
                                to="/contacto"
                                className="border border-metal-silver/40 hover:border-metal-silver text-metal-silver px-8 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors"
                            >
                                Ver formas de contacto
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Mantenimientos;
