import { PROCESS_STEPS } from '../data/mockData';
import { Cake, Sparkles, Users, Image as ImageIcon, CalendarCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { CherryDoodle } from './Doodles';
export const ProcessSection = ({ onNavigate }) => {
    const getIcon = (name) => {
        switch (name) {
            case 'Cake':
                return <Cake className="w-6 h-6 text-[#C44E72]"/>;
            case 'Sparkles':
                return <Sparkles className="w-6 h-6 text-[#C44E72]"/>;
            case 'Users':
                return <Users className="w-6 h-6 text-[#C44E72]"/>;
            case 'Image':
                return <ImageIcon className="w-6 h-6 text-[#C44E72]"/>;
            case 'CalendarCheck':
                return <CalendarCheck className="w-6 h-6 text-[#C44E72]"/>;
            case 'HeartHandshake':
                return <HeartHandshake className="w-6 h-6 text-[#C44E72]"/>;
            default:
                return <Sparkles className="w-6 h-6 text-[#C44E72]"/>;
        }
    };
    return (<section id="proceso" className="py-20 lg:py-28 bg-[#FFF8F2] relative border-t border-[#F7D5D9]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl text-[#C44E72] font-bold">
              Fácil, claro y sin complicaciones
            </span>
            <CherryDoodle className="w-5 h-5"/>
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Cómo Hacer Tu Pedido Paso a Paso
          </h2>

          <p className="text-base sm:text-lg text-[#432818]/80 font-medium">
            Olvídate de mensajes eternos y confusos en redes sociales. En 6 sencillos pasos definimos 
            todos los detalles para que tu única preocupación sea disfrutar de tu fiesta.
          </p>
        </div>

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PROCESS_STEPS.map((step) => (<div key={step.number} className="bg-white rounded-3xl p-7 border border-[#F7D5D9] shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between group">
              <div>
                {/* Step Top Bar with Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-fraunces text-2xl font-bold text-[#F5C49D] group-hover:text-[#C44E72] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#FBE8EC] flex items-center justify-center border border-[#F7D5D9]/60 group-hover:bg-[#F7D5D9] transition-colors">
                    {getIcon(step.iconName)}
                  </div>
                </div>

                <h3 className="font-fraunces text-xl font-bold text-[#432818] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#432818]/80 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step Detail Tip */}
              <div className="bg-[#FFF8F2] p-3 rounded-2xl border border-[#F2E6DA] text-xs text-[#8A645A]">
                <span className="font-bold text-[#C44E72]">Tip Dulce: </span>
                {step.detail}
              </div>
            </div>))}
        </div>

        {/* Bottom Banner Reassurance & CTA */}
        <div className="bg-gradient-to-r from-[#FBE8EC] via-white to-[#FBE8EC] rounded-[32px] p-8 sm:p-10 border border-[#F7D5D9] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="badge-artesanal bg-[#C44E72] text-white text-xs mb-2">
              Cotizador Inteligente
            </span>
            <h4 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#432818]">
              ¿Listo para armar tu cotización ahora mismo?
            </h4>
            <p className="text-xs sm:text-sm text-[#432818]/80 mt-1 max-w-xl">
              Completa nuestro formulario guiado en menos de 2 minutos. Te genera un resumen listo
              para enviar directamente por WhatsApp con todos los datos que necesitamos.
            </p>
          </div>

          <button type="button" onClick={() => onNavigate ? onNavigate('cotizar-disponibilidad') : undefined} className="shrink-0 inline-flex items-center gap-2 bg-[#C44E72] hover:bg-[#a63d5d] text-white px-8 py-4 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer">
            <span>Ir al formulario guiado</span>
            <ArrowRight className="w-4 h-4 text-[#F5C49D]"/>
          </button>
        </div>

      </div>
    </section>);
};
