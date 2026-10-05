import { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { CherryDoodle } from './Doodles';
export const FaqSection = ({ sectionRef }) => {
    const [openId, setOpenId] = useState('faq-1');
    const [activeFilter, setActiveFilter] = useState('todos');
    const toggleItem = (id) => {
        setOpenId(openId === id ? '' : id);
    };
    const filteredFaqs = FAQ_DATA.filter((item) => {
        if (activeFilter === 'todos')
            return true;
        if (activeFilter === 'pedidos' && (item.category === 'pedidos' || item.category === 'cambios'))
            return true;
        if (activeFilter === 'pagos' && item.category === 'pagos')
            return true;
        if (activeFilter === 'sabores' && (item.category === 'sabores' || item.category === 'cuidados'))
            return true;
        if (activeFilter === 'envios' && item.category === 'envios')
            return true;
        return true;
    });
    return (<section ref={sectionRef} id="faq" className="py-20 lg:py-28 bg-[#FFF8F2] relative border-t border-[#F7D5D9]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl text-[#C44E72] font-bold">
              Despejá todas tus dudas
            </span>
            <CherryDoodle className="w-5 h-5"/>
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>

          <p className="text-base sm:text-lg text-[#432818]/80 font-medium">
            Toda la información que necesitás saber antes de realizar tu pedido: 
            señas, tiempos, traslados seguros y opciones de diseño.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'todos', label: 'Todas (10)' },
            { id: 'pedidos', label: 'Pedidos & Cambios' },
            { id: 'pagos', label: 'Pagos & Señas' },
            { id: 'sabores', label: 'Sabores & Cuidados' },
            { id: 'envios', label: 'Envíos y Retiro' },
        ].map((f) => (<button key={f.id} type="button" onClick={() => setActiveFilter(f.id)} className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === f.id
                ? 'bg-[#C44E72] text-white shadow-xs'
                : 'bg-white text-[#432818]/80 border border-[#F7D5D9] hover:bg-[#FBE8EC]'}`}>
              {f.label}
            </button>))}
        </div>

        {/* Accordions List */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (<div key={faq.id} className="bg-white rounded-2xl border border-[#F7D5D9] shadow-xs overflow-hidden transition-all">
                <button type="button" onClick={() => toggleItem(faq.id)} className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none" aria-expanded={isOpen}>
                  <span className="font-fraunces text-base sm:text-lg font-bold text-[#432818]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#FFF8F2] border border-[#F2E6DA] flex items-center justify-center shrink-0 text-[#C44E72] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FBE8EC]' : ''}`}>
                    <ChevronDown className="w-4 h-4"/>
                  </div>
                </button>

                {isOpen && (<div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#432818]/85 leading-relaxed border-t border-[#F2E6DA]/50 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>)}
              </div>);
        })}
        </div>

        {/* Reassurance Box: Still have questions? */}
        <div className="bg-[#FBE8EC] rounded-3xl p-6 sm:p-8 border border-[#F7D5D9] text-center max-w-xl mx-auto">
          <HelpCircle className="w-8 h-8 text-[#C44E72] mx-auto mb-2"/>
          <h4 className="font-fraunces text-lg font-bold text-[#432818] mb-1">
            ¿Tenés alguna consulta particular o evento corporativo?
          </h4>
          <p className="text-xs text-[#432818]/80 mb-4">
            Estamos encantadas de ayudarte. Escribinos un mensaje directo por WhatsApp y te responderemos en el día.
          </p>
          <a href="https://wa.me/59178889900?text=Hola%20Dulce%20Idea!%20Tengo%20una%20consulta%20sobre..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-sm transition-all">
            <MessageCircle className="w-4 h-4"/>
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>);
};
