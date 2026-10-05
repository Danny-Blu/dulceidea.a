import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { CherryDoodle, StrawberryDoodle } from './Doodles';
export const CtaFinalSection = ({ onNavigate }) => {
    const triggerCelebration = () => {
        confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#C44E72', '#F7D5D9', '#F5C49D', '#FFF8F2'],
        });
    };
    return (<section className="py-20 lg:py-28 bg-[#FFF8F2] relative overflow-hidden">
      
      {/* Ambient Doodles */}
      <div className="absolute top-12 left-10 lg:left-24 animate-bounce [animation-duration:4s] pointer-events-none opacity-60">
        <StrawberryDoodle className="w-9 h-9"/>
      </div>
      <div className="absolute top-16 right-10 lg:right-24 animate-bounce [animation-duration:5s] pointer-events-none opacity-60">
        <CherryDoodle className="w-10 h-10"/>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Natural Tones Chocolate Feature Container */}
        <div className="bg-[#432818] text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 lg:p-16 relative overflow-hidden card-shadow text-center border-4 border-white">
          
          {/* Decorative Warm Blur Orbs */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#C44E72] rounded-full blur-3xl opacity-25 pointer-events-none"/>
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F5C49D] rounded-full blur-3xl opacity-20 pointer-events-none"/>

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Handwritten Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-hand text-2xl sm:text-3xl text-[#F5C49D] font-bold rotate-[-2deg]">
                Tu fecha ideal te está esperando
              </span>
              <Heart className="w-5 h-5 text-[#F5C49D] fill-[#F5C49D]"/>
            </div>

            {/* Huge Fraunces Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Hagamos algo tan especial como tu celebración.
            </h2>

            {/* Warm Copy */}
            <p className="text-base sm:text-lg text-[#F2E6DA] font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Ya sea una mini torta para dos o una mesa dulce completa para festejar a lo grande, 
              estamos listas para ponerle todo el corazón a tu dulce idea.
            </p>

            {/* Action Buttons matching Natural Tones */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button type="button" id="cta-final-order-btn" onClick={() => {
            triggerCelebration();
            if (onNavigate)
                onNavigate('cotizar-disponibilidad');
        }} className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F5C49D] hover:bg-white text-[#432818] px-9 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 transform active:translate-y-0 cursor-pointer">
                <Sparkles className="w-5 h-5 text-[#C44E72]"/>
                <span>Hacer mi pedido ahora</span>
              </button>

              <button type="button" id="cta-final-inspiration-btn" onClick={() => onNavigate ? onNavigate('inspiracion') : undefined} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-[#F7D5D9]/40 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 cursor-pointer">
                <span>Ver inspiración en galería</span>
                <ArrowRight className="w-4 h-4 text-[#F5C49D]"/>
              </button>
            </div>

            {/* Reassurance text */}
            <p className="font-hand text-base text-[#F7D5D9] font-semibold mt-8">
              🌸 Cupos limitados por semana • Atención personalizada por WhatsApp
            </p>

          </div>
        </div>

      </div>
    </section>);
};
