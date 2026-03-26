import React from 'react';
import { odinoxData } from '../data';

const AboutUs = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 uppercase">
                    Sobre <span className="text-safety-accent">Nosotros</span>
                </h1>

                <div className="space-y-16">
                    <section className="bg-industrial-card p-8 md:p-12 rounded-lg border-l-4 border-safety-accent relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-safety-accent mb-4 uppercase tracking-wider">Quiénes Somos</h2>
                        <p className="text-lg text-metal-silver leading-relaxed relative z-10">
                            {odinoxData.quienesSomos}
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="bg-industrial-card p-8 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-safety-accent" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                                Misión
                            </h2>
                            <p className="text-metal-silver leading-relaxed">
                                {odinoxData.mission}
                            </p>
                        </section>

                        <section className="bg-industrial-card p-8 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-safety-accent" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h3" /><path d="M19 12h3" /><path d="M12 2v3" /><path d="M12 19v3" /><path d="m5 5 2 2" /><path d="m17 17 2 2" /><path d="m5 19 2-2" /><path d="m17 5 2-2" /><circle cx="12" cy="12" r="4" /></svg>
                                Visión
                            </h2>
                            <p className="text-metal-silver leading-relaxed">
                                {odinoxData.vision}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
