import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-industrial-bg/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
            <div className={`flex items-center justify-between px-4 md:px-12 py-4`}>
                <div className="flex items-center gap-4 md:gap-10">
                    <a href="#" className="flex items-center gap-2">
                        {/* <div className="h-2 w-8 bg-safety-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]" /> */}
                        <img src="https://res.cloudinary.com/dygrpoblt/image/upload/v1772247877/logoOdinox-removebg-preview_zmfyxy.png" alt="Logo Odinox" className="h-20 md:h-24" />
                    </a>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <a href="#contact" className="bg-safety-accent text-white px-4 py-1.5 md:px-6 md:py-2 rounded-sm font-bold text-[10px] md:text-sm hover:scale-105 transition-all shadow-lg shadow-blue-500/20 uppercase tracking-wider inline-block">
                        Cotizar Proyecto
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


