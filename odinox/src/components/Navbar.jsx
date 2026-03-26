import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const isActive = (path) => {
        return location.pathname === path ? "text-brand-orange border-b-2 border-brand-orange pb-1" : "text-metal-silver hover:text-brand-orange transition-colors";
    };

    const isActiveMobile = (path) => {
        return location.pathname === path ? "text-brand-orange bg-industrial-card" : "text-metal-silver hover:text-brand-orange hover:bg-slate-800/50";
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-industrial-bg/95 backdrop-blur-md shadow-lg border-brand-orange/30' : 'bg-transparent border-transparent'}`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-3 transition-all duration-500`}>
                <div className="flex items-center z-50 relative">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://res.cloudinary.com/dygrpoblt/image/upload/v1772247877/logoOdinox-removebg-preview_zmfyxy.png"
                            alt="Logo Odinox"
                            className={`transition-all duration-500 ${scrolled ? 'h-12 md:h-16' : 'h-16 md:h-24'}`}
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-semibold tracking-wider text-sm">
                    <Link to="/" className={isActive('/')}>INICIO</Link>
                    <Link to="/productos" className={isActive('/productos')}>PRODUCTOS</Link>
                    <Link to="/servicios" className={isActive('/servicios')}>SERVICIOS</Link>
                    <Link to="/nosotros" className={isActive('/nosotros')}>SOBRE NOSOTROS</Link>
                    <Link to="/blog" className={isActive('/blog')}>BLOG</Link>
                    <Link to="/contacto" className={isActive('/contacto')}>CONTACTO</Link>
                </div>

                <div className="flex items-center gap-4 z-50 relative">
                    <Link to="/contacto" className="hidden md:block bg-brand-orange text-white px-6 py-2 md:px-7 md:py-2 rounded-sm font-semibold text-xs md:text-sm hover:bg-[#b05e04] transition-colors shadow-md uppercase tracking-wide border border-transparent">
                        Cotizar
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-metal-silver hover:text-brand-orange transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-industrial-bg/95 backdrop-blur-md border-b border-brand-orange/30 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col px-4 py-4 space-y-1 font-semibold tracking-wider text-sm">
                    <Link to="/" className={`block px-4 py-3 rounded-sm transition-colors ${isActiveMobile('/')}`}>INICIO</Link>
                    <Link to="/productos" className={`block px-4 py-3 rounded-sm transition-colors ${isActiveMobile('/productos')}`}>PRODUCTOS</Link>
                    <Link to="/servicios" className={`block px-4 py-3 rounded-sm transition-colors ${isActiveMobile('/servicios')}`}>SERVICIOS</Link>
                    <Link to="/nosotros" className={`block px-4 py-3 rounded-sm transition-colors ${isActiveMobile('/nosotros')}`}>SOBRE NOSOTROS</Link>
                    <Link to="/blog" className={`block px-4 py-3 rounded-sm transition-colors ${isActiveMobile('/blog')}`}>BLOG</Link>
                    <Link to="/contacto" className={`block px-4 py-3 rounded-sm transition-colors ${isActiveMobile('/contacto')}`}>CONTACTO</Link>
                    <div className="pt-4 pb-2">
                        <Link to="/contacto" className="block w-full text-center bg-brand-orange text-white px-6 py-3 rounded-sm font-semibold text-sm hover:bg-[#b05e04] transition-colors shadow-md uppercase tracking-wide">
                            Cotizar
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


