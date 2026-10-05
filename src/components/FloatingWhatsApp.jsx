import { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { CherryDoodle } from './Doodles';
export const FloatingWhatsApp = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (<div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Popover Card */}
      {isOpen && (<div className="mb-3 bg-white rounded-3xl p-5 shadow-2xl border border-[#F7D5D9] max-w-xs w-72 animate-fadeIn text-[#432818]">
          <div className="flex items-center justify-between pb-3 border-b border-[#F2E6DA] mb-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <CherryDoodle className="w-6 h-6"/>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute bottom-0 right-0"/>
              </div>
              <div>
                <p className="font-fraunces text-sm font-bold text-[#432818]">Dulce Idea</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Taller en línea</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="text-[#8A645A] hover:text-[#432818] p-1">
              <X className="w-4 h-4"/>
            </button>
          </div>

          <p className="text-xs text-[#432818]/85 mb-4 leading-relaxed">
            ¡Hola! 🌸 Contanos tu idea o evento y te ayudamos a elegir sabores, tamaños y disponibilidad.
          </p>

          <div className="space-y-2">
            <a href="https://wa.me/59178889900?text=Hola%20Dulce%20Idea!%20Quisiera%20consultar%20por%20un%20pedido%20especial..." target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-full font-bold text-xs shadow-xs transition-colors">
              <MessageCircle className="w-4 h-4"/>
              <span>Chatear por WhatsApp</span>
            </a>

            <button type="button" onClick={() => {
                setIsOpen(false);
                if (onNavigate)
                    onNavigate('cotizar-disponibilidad');
            }} className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FFF8F2] hover:bg-[#FBE8EC] text-[#C44E72] py-2 px-4 rounded-full font-bold text-[11px] border border-[#F7D5D9] transition-colors cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C49D]"/>
              <span>Usar el Cotizador Guiado</span>
            </button>
          </div>
        </div>)}

      {/* Floating Toggle Button */}
      <button type="button" id="floating-whatsapp-btn" onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 focus:outline-none" aria-label="Abrir chat de WhatsApp">
        {isOpen ? <X className="w-6 h-6"/> : <MessageCircle className="w-7 h-7"/>}
      </button>

    </div>);
};
