import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [message, setMessage] = useState('Hola, me gustaría solicitar una cotización. ¿Podrían brindarme más información?');

  const phoneNumber = '50374712525'; // Defaulting to 503 code

  const handleSend = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  if (isHidden) {
    return (
      <button
        onClick={() => setIsHidden(false)}
        className="fixed bottom-6 right-0 bg-green-600 hover:bg-green-500 transition-all text-white p-2 pl-3 rounded-l-md shadow-lg z-50 flex items-center justify-center opacity-60 hover:opacity-100 hover:pr-4 cursor-pointer"
        aria-label="Mostrar WhatsApp"
        title="Mostrar botón de WhatsApp"
      >
        <MessageCircle size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-industrial-card border border-slate-700 shadow-2xl rounded-lg w-80 mb-4 overflow-hidden flex flex-col"
          >
            <div className="bg-green-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} className="text-white" />
                <span className="font-bold text-sm tracking-wide">Contactar Ventas</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 bg-industrial-bg/50">
              <p className="text-sm text-metal-silver mb-3">Envíenos un mensaje y responderemos lo antes posible.</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-md p-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none h-28"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <div className="p-4 bg-industrial-card border-t border-slate-800">
              <button
                onClick={handleSend}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <Send size={16} />
                <span>Enviar a WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group flex flex-col items-center">
        {!isOpen && (
          <button
            onClick={() => setIsHidden(true)}
            className="absolute -top-6 text-slate-400 hover:text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-1 text-xs bg-slate-800/80 px-2 py-1 rounded-full whitespace-nowrap cursor-pointer"
            title="Ocultar ícono"
            aria-label="Ocultar ícono"
          >
            <X size={10} /> <span>Ocultar</span>
          </button>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center outline-none cursor-pointer"
          aria-label="Toggle WhatsApp Chat"
        >
          {isOpen ? (
            <div className="bg-slate-700 hover:bg-slate-600 text-white rounded-full p-4 shadow-xl border border-slate-600">
              <X size={28} />
            </div>
          ) : (
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp" 
              className="w-[66px] h-[66px] drop-shadow-xl" 
            />
          )}
        </button>
      </div>
    </div>
  );
}
