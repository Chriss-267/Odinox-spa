import { useState } from 'react';
import { Mail, Phone, MapPin, Navigation, X, Map, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [comentario, setComentario] = useState('');
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);

    const wazeLink = "https://waze.com/ul?ll=13.723049886665821,-89.18657922514463&navigate=yes";
    const googleMapsLink = "https://maps.google.com/?q=13.723049886665821,-89.18657922514463";

    const handleCotizar = (e) => {
        e.preventDefault();
        const subject = "Solicitud de Cotización";
        const body = `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\n\nMensaje:\n${comentario}`;
        window.location.href = `mailto:contacto@odinox.com.sv?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return (
        <section id="contact" className="py-24 px-4 md:px-12 bg-slate-50 text-slate-600 relative z-10 w-full overflow-hidden">
            <div className="max-w-[1500px] w-full mx-auto border-t border-slate-200 pt-20">
                <div className="text-center mb-16">
                    <span className="text-brand-orange font-black tracking-[0.2em] text-sm uppercase mb-3 block">Hablemos de tu proyecto</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">SOLICITA TU COTIZACIÓN</h2>
                    <p className="text-lg max-w-2xl mx-auto font-light text-slate-600">Ingresando tus datos nuestro equipo te contactará lo más pronto posible con los detalles.</p>
                </div>

                {/* Contenedor Principal Ultra Estético tipo 'Split Card' */}
                <div className="flex flex-col lg:flex-row w-full max-w-[1250px] mx-auto mb-24 bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                    
                    {/* Columna Izquierda: Formulario (Luminoso y Minimalista) */}
                    <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 relative bg-white flex flex-col justify-center z-10">
                        {/* Decoración sutil de fondo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/[0.03] rounded-full blur-[60px] pointer-events-none -z-10"></div>
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-100/50 rounded-full blur-[60px] pointer-events-none -z-10"></div>

                        <form onSubmit={handleCotizar} className="flex flex-col gap-5 w-full relative z-20">
                            
                            {/* Fila Nombre y Teléfono */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-2">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        required
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        placeholder="Tu Nombre"
                                        className="w-full bg-transparent border-b-2 border-slate-200 px-2 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-orange font-medium transition-all rounded-none"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        required
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                        placeholder="Tu Teléfono"
                                        className="w-full bg-transparent border-b-2 border-slate-200 px-2 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-orange font-medium transition-all rounded-none"
                                    />
                                </div>
                            </div>

                            <div className="relative group mt-2">
                                <input
                                    type="email"
                                    required
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    placeholder="Correo Electrónico"
                                    className="w-full bg-transparent border-b-2 border-slate-200 px-2 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-orange font-medium transition-all rounded-none"
                                />
                            </div>
                            
                            <div className="relative group mt-2 mb-4">
                                <textarea
                                    required
                                    value={comentario}
                                    onChange={(e) => setComentario(e.target.value)}
                                    placeholder="Detalles del proyecto..."
                                    rows="3"
                                    className="w-full bg-transparent border-b-2 border-slate-200 px-2 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-orange font-medium transition-all resize-none rounded-none"
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="cursor-pointer w-full bg-brand-orange hover:bg-[#b05e04] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all tracking-wide shadow-lg hover:shadow-brand-orange/40 hover:-translate-y-1 active:translate-y-0"
                            >
                                Enviar Cotización 
                                <span className="translate-x-0 transition-transform bg-white/20 p-1.5 rounded-full ml-2">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Columna Derecha: Logo y Contacto (Oscuro Profundo) */}
                    <div className="w-full lg:w-[45%] bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-200/10 p-8 md:p-12 lg:p-16 relative flex flex-col justify-center items-center lg:items-start z-10 overflow-hidden shadow-inner">
                        
                        {/* Efecto de luz abstracta */}
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none -z-10"></div>
                        
                        {/* Logo Centrado o alineado visualmente */}
                        <div className="w-full flex justify-center lg:justify-start mb-6 lg:mb-10 relative z-20">
                            <img
                                src="https://res.cloudinary.com/dygrpoblt/image/upload/v1772247877/logoOdinox-removebg-preview_zmfyxy.png"
                                alt="Industrias Odinox"
                                className="h-28 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            />
                        </div>

                        {/* Divisor elegante */}
                        <div className="w-16 h-1 bg-brand-orange/50 rounded-full mb-10 lg:mb-12"></div>
                        
                        {/* Círculos de Información */}
                        <div className="flex flex-col gap-8 w-full relative z-20">
                            <div className="flex items-center gap-6 group">
                                <div className="bg-slate-800/80 p-4 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg border border-slate-700/50 flex-shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Llámanos</span>
                                    <p className="text-slate-200 font-medium text-lg tracking-wide group-hover:text-white transition-colors">+503 6012-2247</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6 group">
                                <div className="bg-slate-800/80 p-4 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg border border-slate-700/50 flex-shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Escríbenos</span>
                                    <p className="text-slate-200 font-medium text-lg tracking-wide group-hover:text-white transition-colors">industriasodinox@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6 group">
                                <div className="bg-slate-800/80 p-4 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg border border-slate-700/50 flex-shrink-0 mt-2">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Visítanos</span>
                                    <p className="text-slate-200 font-medium text-lg leading-snug tracking-wide group-hover:text-white transition-colors">Calle a cuscatancingo #12<br/>Mejicanos, San Salvador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mapa Ultra Estético */}
                <div className="mt-8 relative w-full max-w-[1250px] mx-auto rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] h-[450px] group">
                    <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply pointer-events-none z-10"></div>
                    
                    {/* Botón flotante para abrir Modal */}
                    <button 
                        type="button"
                        onClick={() => setIsMapModalOpen(true)}
                        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 bg-white text-slate-900 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold hover:bg-brand-orange hover:text-white transition-all hover:scale-105 group/navbtn cursor-pointer"
                    >
                        <Navigation className="w-5 h-5 text-brand-orange group-hover/navbtn:text-white transition-colors" />
                        ¿Cómo llegar?
                    </button>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9240179686176!2d-89.18657922514463!3d13.723049886665821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633b743ab8232f%3A0xf7d102733e1f4d33!2sIndustrias%20odinox!5e0!3m2!1ses-419!2ssv!4v1772326895100!5m2!1ses-419!2ssv"
                        title="Ubicación Industrias Odinox"
                        className="w-full h-full border-0 grayscale-[80%] group-hover:grayscale-[20%] transition-all duration-1000 scale-105 group-hover:scale-100"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Modal de Cómo Llegar */}
            {isMapModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-3xl w-full max-w-sm p-8 relative shadow-2xl scale-100 animate-in fade-in zoom-in duration-300">
                        <button 
                            onClick={() => setIsMapModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-brand-orange transition-colors bg-slate-100 hover:bg-orange-50 rounded-full p-2 cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-brand-orange" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Elige tu ruta</h3>
                            <p className="text-slate-500 text-sm mt-2 font-medium">Abre la ubicación en tu aplicación de navegación favorita.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a 
                                href={wazeLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="cursor-pointer w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-2xl transition-all hover:scale-[1.02] group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center w-12 h-12">
                                        <img src="https://img.icons8.com/color/48/waze.png" alt="Waze" className="w-7 h-7 object-contain" />
                                    </div>
                                    <span className="font-bold text-slate-700">Ir con Waze</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            </a>

                            <a 
                                href={googleMapsLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="cursor-pointer w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-2xl transition-all hover:scale-[1.02] group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center w-12 h-12">
                                        <img src="https://img.icons8.com/color/48/google-maps-new.png" alt="Google Maps" className="w-7 h-7 object-contain" />
                                    </div>
                                    <span className="font-bold text-slate-700">Google Maps</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
