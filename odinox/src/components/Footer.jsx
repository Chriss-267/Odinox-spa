import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-industrial-bg text-slate-500 py-24 px-4 md:px-12 max-w-5xl mx-auto text-xs font-medium border-t border-slate-900 mt-20">
            <div className="flex space-x-6 mb-12 text-metal-silver">
                <Facebook className="h-5 w-5 cursor-pointer hover:text-safety-accent transition-colors" />
                <Instagram className="h-5 w-5 cursor-pointer hover:text-safety-accent transition-colors" />
                <Twitter className="h-5 w-5 cursor-pointer hover:text-safety-accent transition-colors" />
                <Linkedin className="h-5 w-5 cursor-pointer hover:text-safety-accent transition-colors" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-12 uppercase tracking-widest leading-loose">
                <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
                <Link to="/productos" className="hover:text-white transition-colors">Productos Acero</Link>
                <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
                <Link to="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
                <Link to="/blog" className="hover:text-white transition-colors">Blog Industrial</Link>
                <Link to="/contacto" className="hover:text-white transition-colors">Cotización Online</Link>
                <Link to="/contacto" className="hover:text-white transition-colors">Atención al Cliente</Link>
            </div>

            <button className="border border-slate-800 px-4 py-2 mb-12 hover:border-metal-silver hover:text-white transition-all uppercase tracking-widest text-[10px]">
                Reportar Incidencia
            </button>

            <p className="text-[10px] tracking-[0.2em] opacity-40 uppercase">© 2026 ODINOX S.A. DE C.V. — INGENIERÍA EN ACERO INOXIDABLE</p>
        </footer>
    );
};

export default Footer;


