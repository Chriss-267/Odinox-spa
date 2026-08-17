import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Navigation, X, ArrowRight, Loader2, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

// Pega aquí tu Access Key de https://web3forms.com (te la envían al correo)
const WEB3FORMS_ACCESS_KEY = 'e576d042-7cb2-4303-85c0-b04db82907f2';

// Tiempo de espera antes de permitir otra cotización (en horas)
const COOLDOWN_HORAS = 24;
const STORAGE_KEY = 'odinox_cotizacion_enviada';

const cooldownActivo = () => {
    try {
        const enviado = localStorage.getItem(STORAGE_KEY);
        if (!enviado) return false;
        const horasPasadas = (Date.now() - Number(enviado)) / (1000 * 60 * 60);
        return horasPasadas < COOLDOWN_HORAS;
    } catch {
        return false;
    }
};

const inputClass = "w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-3 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all";
const labelClass = "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2";

const Contact = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [comentario, setComentario] = useState('');
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | sending | error | enviado

    // Si ya envió una cotización en las últimas horas, mostrar el aviso en lugar del formulario
    useEffect(() => {
        if (cooldownActivo()) setStatus('enviado');
    }, []);

    const wazeLink = "https://waze.com/ul?ll=13.723049886665821,-89.18657922514463&navigate=yes";
    const googleMapsLink = "https://maps.google.com/?q=13.723049886665821,-89.18657922514463";

    const handleCotizar = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Solicitud de Cotización — ${nombre}`,
                    from_name: 'Sitio Web Odinox',
                    Nombre: nombre,
                    Teléfono: telefono,
                    Correo: correo,
                    Mensaje: comentario,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setStatus('enviado');
                setNombre('');
                setTelefono('');
                setCorreo('');
                setComentario('');
                try {
                    localStorage.setItem(STORAGE_KEY, String(Date.now()));
                } catch {
                    // localStorage no disponible (modo privado); se permite reenviar
                }
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 md:py-24 px-4 md:px-12 bg-slate-100 text-slate-600 relative z-10 w-full overflow-hidden">
            <div className="max-w-[1250px] w-full mx-auto">

                {/* Encabezado */}
                <div className="mb-12 md:mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-10 bg-brand-orange" />
                        <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                            Hablemos de tu proyecto
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 uppercase leading-tight">
                            Solicita tu cotización
                        </h2>
                        <p className="text-slate-500 max-w-md md:text-right text-sm md:text-base">
                            Déjanos tus datos y nuestro equipo te contactará lo más pronto posible.
                        </p>
                    </div>
                </div>

                {/* Tarjeta principal */}
                <div className="flex flex-col lg:flex-row w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">

                    {/* Columna Izquierda: Formulario */}
                    <div className="w-full lg:w-[58%] p-8 md:p-12">
                        {status === 'enviado' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-green-50 border border-green-300 rounded-md flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-slate-900 uppercase mb-3">
                                    ¡Ya recibimos tu cotización!
                                </h3>
                                <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
                                    Nuestro equipo la está revisando y te contactará lo más pronto posible.
                                    Si necesitas agregar algo o tienes una consulta urgente, escríbenos por WhatsApp.
                                </p>
                                <a
                                    href="https://wa.me/50360122247?text=Hola%2C%20acabo%20de%20enviar%20una%20cotizaci%C3%B3n%20por%20el%20sitio%20web%20y%20quisiera%20agregar%20informaci%C3%B3n."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-md font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Escribir por WhatsApp
                                </a>
                            </div>
                        ) : (
                        <form onSubmit={handleCotizar} className="flex flex-col gap-6 w-full">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="ctc-nombre" className={labelClass}>Nombre completo</label>
                                    <input
                                        id="ctc-nombre"
                                        type="text"
                                        required
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        placeholder="Ej. Juan Pérez"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ctc-telefono" className={labelClass}>Teléfono</label>
                                    <input
                                        id="ctc-telefono"
                                        type="tel"
                                        required
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                        placeholder="Ej. 7000-0000"
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="ctc-correo" className={labelClass}>Correo electrónico</label>
                                <input
                                    id="ctc-correo"
                                    type="email"
                                    required
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    placeholder="Ej. empresa@correo.com"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label htmlFor="ctc-comentario" className={labelClass}>Detalles del proyecto</label>
                                <textarea
                                    id="ctc-comentario"
                                    required
                                    value={comentario}
                                    onChange={(e) => setComentario(e.target.value)}
                                    placeholder="Cuéntanos qué equipo necesitas, medidas, cantidades..."
                                    rows="4"
                                    className={`${inputClass} resize-none`}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="cursor-pointer w-full md:w-auto md:self-start bg-brand-orange hover:bg-[#b05e04] disabled:opacity-60 disabled:cursor-wait text-white px-10 py-4 rounded-md font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-colors shadow-md"
                            >
                                {status === 'sending' ? (
                                    <>
                                        Enviando...
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Enviar cotización
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <div className="flex items-center gap-3 bg-red-50 border border-red-300 text-red-700 px-5 py-4 rounded-md text-sm font-semibold">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    No se pudo enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.
                                </div>
                            )}
                        </form>
                        )}
                    </div>

                    {/* Columna Derecha: Información de contacto */}
                    <div className="w-full lg:w-[42%] bg-industrial-bg p-8 md:p-12 relative flex flex-col justify-center border-t-4 lg:border-t-0 lg:border-l-4 border-brand-orange">
                        <div className="flex justify-center lg:justify-start mb-8">
                            <img
                                src="https://res.cloudinary.com/dygrpoblt/image/upload/v1772247877/logoOdinox-removebg-preview_zmfyxy.png"
                                alt="Industrias Odinox"
                                className="h-24 md:h-28 object-contain"
                            />
                        </div>

                        <p className="text-metal-silver/70 text-sm leading-relaxed mb-10">
                            Fabricamos equipos de acero inoxidable para la industria alimenticia, farmacéutica y gastronómica. Escríbenos por el medio que prefieras.
                        </p>

                        <div className="flex flex-col gap-7">
                            <a href="tel:+50360122247" className="flex items-center gap-5 group">
                                <div className="shrink-0 w-12 h-12 rounded-md bg-brand-orange/10 border border-brand-orange/40 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                                    <Phone className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <span className="block text-metal-silver/50 text-[11px] uppercase tracking-widest font-bold mb-0.5">Llámanos</span>
                                    <span className="text-white font-semibold">+503 6012-2247</span>
                                </div>
                            </a>

                            <a href="mailto:industriasodinox@gmail.com" className="flex items-center gap-5 group">
                                <div className="shrink-0 w-12 h-12 rounded-md bg-brand-orange/10 border border-brand-orange/40 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                                    <Mail className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <span className="block text-metal-silver/50 text-[11px] uppercase tracking-widest font-bold mb-0.5">Escríbenos</span>
                                    <span className="text-white font-semibold break-all">industriasodinox@gmail.com</span>
                                </div>
                            </a>

                            <button type="button" onClick={() => setIsMapModalOpen(true)} className="flex items-center gap-5 group text-left cursor-pointer">
                                <div className="shrink-0 w-12 h-12 rounded-md bg-brand-orange/10 border border-brand-orange/40 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                                    <MapPin className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <span className="block text-metal-silver/50 text-[11px] uppercase tracking-widest font-bold mb-0.5">Visítanos</span>
                                    <span className="text-white font-semibold leading-snug block">Calle a cuscatancingo #12<br />Mejicanos, San Salvador</span>
                                </div>
                            </button>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="text-metal-silver/50 text-xs uppercase tracking-widest font-bold mb-1">Horario de atención</p>
                            <p className="text-metal-silver/80 text-sm">Lunes a sábado — 8:00 a.m. a 5:00 p.m.</p>
                        </div>
                    </div>
                </div>

                {/* Mapa */}
                <div className="mt-10 relative w-full rounded-xl overflow-hidden border border-slate-200 shadow-xl h-[420px] group">
                    <button
                        type="button"
                        onClick={() => setIsMapModalOpen(true)}
                        className="absolute bottom-6 right-6 z-20 bg-white text-slate-900 px-6 py-3.5 rounded-md shadow-xl flex items-center gap-3 font-bold text-sm uppercase tracking-wide hover:bg-brand-orange hover:text-white transition-colors group/navbtn cursor-pointer"
                    >
                        <Navigation className="w-4 h-4 text-brand-orange group-hover/navbtn:text-white transition-colors" />
                        ¿Cómo llegar?
                    </button>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9240179686176!2d-89.18657922514463!3d13.723049886665821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633b743ab8232f%3A0xf7d102733e1f4d33!2sIndustrias%20odinox!5e0!3m2!1ses-419!2ssv!4v1772326895100!5m2!1ses-419!2ssv"
                        title="Ubicación Industrias Odinox"
                        className="w-full h-full border-0 grayscale-[60%] group-hover:grayscale-0 transition-all duration-700"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Modal de Cómo Llegar */}
            {isMapModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-xl w-full max-w-sm p-8 relative shadow-2xl">
                        <button
                            onClick={() => setIsMapModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-brand-orange transition-colors bg-slate-100 hover:bg-orange-50 rounded-md p-2 cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-14 h-14 bg-brand-orange/10 border border-brand-orange/30 rounded-md flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-7 h-7 text-brand-orange" />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">Elige tu ruta</h3>
                            <p className="text-slate-500 text-sm mt-2 font-medium">Abre la ubicación en tu aplicación de navegación favorita.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href={wazeLink}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-md transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-md shadow-sm border border-slate-100 flex items-center justify-center w-11 h-11">
                                        <img src="https://img.icons8.com/color/48/waze.png" alt="Waze" className="w-7 h-7 object-contain" />
                                    </div>
                                    <span className="font-bold text-slate-700">Ir con Waze</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                            </a>

                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-md transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-md shadow-sm border border-slate-100 flex items-center justify-center w-11 h-11">
                                        <img src="https://img.icons8.com/color/48/google-maps-new.png" alt="Google Maps" className="w-7 h-7 object-contain" />
                                    </div>
                                    <span className="font-bold text-slate-700">Google Maps</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
