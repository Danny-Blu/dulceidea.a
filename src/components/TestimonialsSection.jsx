import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote } from 'lucide-react';
import { CherryDoodle } from './Doodles';
export const TestimonialsSection = ({ sectionRef }) => {
    return (<section ref={sectionRef} id="testimonios" className="py-20 lg:py-28 bg-[#FFF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl text-[#C44E72] font-bold">
              Historias reales que endulzan el alma
            </span>
            <CherryDoodle className="w-5 h-5"/>
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Lo que dicen de Dulce Idea
          </h2>

          <p className="text-base sm:text-lg text-[#432818]/80 font-medium">
            La confianza de nuestros clientes es nuestro mayor orgullo. 
            Así vivieron su experiencia quienes ya celebraron con nosotros en La Paz.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, idx) => (<div key={testi.id} className={`bg-white rounded-3xl p-7 border border-[#F7D5D9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative ${idx === 0 ? 'lg:col-span-2' : ''}`}>
              {/* Quote Icon watermark */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FBE8EC] -rotate-12 pointer-events-none"/>

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 text-[#F5C49D] fill-[#F5C49D]"/>))}
                  <span className="text-[11px] font-bold text-[#8A645A] ml-2">
                    5.0 • Verificado
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#432818]/85 leading-relaxed italic mb-6">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#F2E6DA]">
                <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#F7D5D9]"/>
                <div>
                  <h4 className="font-fraunces text-sm font-bold text-[#432818]">
                    {testi.name}
                  </h4>
                  <p className="text-[11px] text-[#C44E72] font-semibold">
                    {testi.event}
                  </p>
                  <p className="text-[10px] text-[#8A645A]">
                    {testi.productName} • {testi.date}
                  </p>
                </div>
              </div>
            </div>))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 bg-white/70 backdrop-blur-xs rounded-2xl p-6 border border-[#F7D5D9]/70 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-[#432818] font-bold">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎂</span>
            <span>+350 Tortas y Pedidos Horneados</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span>100% Clientes Satisfechos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🧈</span>
            <span>0% Premezclas Industriales</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <span>Taller Artesanal en La Paz, Bolivia</span>
          </div>
        </div>

      </div>
    </section>);
};
