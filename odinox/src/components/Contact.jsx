import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [correo, setCorreo] = useState('');
    const [comentario, setComentario] = useState('');

    const handleCotizar = (e) => {
        e.preventDefault();
        const subject = "Solicitud de Cotización";
        const body = `Correo de contacto: ${correo}\n\nMensaje:\n${comentario}`;
        window.location.href = `mailto:contacto@odinox.com.sv?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return (
        <section id="contact" className="py-24 px-4 md:px-12 bg-industrial-bg text-slate-400">
            <div className="max-w-4xl mx-auto border-t border-slate-800 pt-24">
                <div className="text-center mb-16">
                    <span className="text-safety-accent font-black tracking-widest text-xs uppercase mb-4 block">Hablemos de tu proyecto</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">SOLICITA TU COTIZACIÓN</h2>
                    <p className="text-lg max-w-2xl mx-auto font-medium text-slate-300">Ingresa tu correo profesional y nuestro equipo técnico te contactará en menos de 24 horas.</p>
                </div>

                <form onSubmit={handleCotizar} className="flex flex-col gap-4 max-w-2xl mx-auto mb-20 bg-slate-900/50 p-6 rounded-md border border-slate-800 shadow-xl relative">
                    <input
                        type="email"
                        required
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="tu-correo@empresa.com"
                        className="w-full bg-slate-800/80 px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-safety-accent rounded-sm font-medium transition-all"
                    />
                    <textarea
                        required
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        placeholder="Escribe los detalles de tu proyecto o producto que necesitas cotizar..."
                        rows="4"
                        className="w-full bg-slate-800/80 px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-safety-accent rounded-sm font-medium transition-all resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-safety-accent text-white px-10 py-4 mt-2 rounded-sm font-black text-lg hover:brightness-110 flex items-center justify-center gap-2 transition-all uppercase tracking-widest group shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                        Enviar Solicitud <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </button>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-center">
                    <div className="flex flex-col items-center gap-4">
                        <Phone className="h-6 w-6 text-safety-accent" />
                        <p className="border-b border-slate-800 pb-1">+503 6012-2247</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Mail className="h-6 w-6 text-safety-accent" />
                        <p className="border-b border-slate-800 pb-1">industriasodinox@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <MapPin className="h-6 w-6 text-safety-accent" />
                        <p className="border-b border-slate-800 pb-1">Calle a cuscatancingo #12 mejicanos , san salvador</p>
                    </div>
                </div>

                <div className="mt-16 rounded-sm overflow-hidden border border-slate-800 shadow-sm w-full h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9240179686176!2d-89.18657922514463!3d13.723049886665821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633b743ab8232f%3A0xf7d102733e1f4d33!2sIndustrias%20odinox!5e0!3m2!1ses-419!2ssv!4v1772326895100!5m2!1ses-419!2ssv"
                        title="Ubicación Industrias Odinox"
                        className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
