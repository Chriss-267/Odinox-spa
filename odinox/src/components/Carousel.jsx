import { motion } from 'framer-motion';
import { clients } from '../data';

const ClientCarousel = () => {
    // Double the clients array to create a seamless loop
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section id="clients" className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Empresas que Confían</h2>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Nuestra Red de Clientes</p>
            </div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1035] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                    className="flex space-x-12 whitespace-nowrap py-4"
                >
                    {duplicatedClients.map((client, index) => (
                        <div key={index} className="flex-shrink-0 flex items-center justify-center">
                            <div className="w-44 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-6 border border-slate-100">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientCarousel;
