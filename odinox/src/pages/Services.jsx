import React from 'react';

const Services = () => {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-4">
      <h1 className="text-4xl font-bold text-safety-accent mb-8 uppercase">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Soldadura', 'Dobleces', 'Corte', 'Pulido'].map((service, idx) => (
          <div key={idx} className="bg-industrial-card p-6 rounded-lg text-center border-b-4 border-safety-accent">
            <h3 className="text-xl font-bold mb-4 uppercase">{service}</h3>
            <p className="text-sm text-metal-silver/80">
              Ofrecemos servicios profesionales de {service.toLowerCase()} con los más altos estándares de calidad industrial.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
