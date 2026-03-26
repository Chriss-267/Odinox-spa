import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
                    Contáctenos
                </h1>
                <p className="text-metal-silver text-lg max-w-2xl mx-auto">
                    Estamos listos para atender sus requerimientos y ofrecerle la mejor solución en acero inoxidable.
                </p>
            </div>
            <Contact />
        </div>
    );
};

export default ContactPage;
