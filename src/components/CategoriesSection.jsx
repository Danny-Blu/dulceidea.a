import { CATEGORIES_DATA } from '../data/mockData';
import { ArrowRight, Clock, Users, Sparkles } from 'lucide-react';
import { CherryDoodle } from './Doodles';
export const CategoriesSection = ({ onSelectCategory, onQuoteCategory }) => {
    return (<section id="categorias" className="py-20 lg:py-28 bg-[#FFF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-hand text-xl sm:text-2xl text-[#C44E72] font-bold">
              Inspiración para cada momento
            </span>
            <CherryDoodle className="w-6 h-6"/>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            ¿Qué quieres celebrar hoy?
          </h2>

          <p className="text-base sm:text-lg text-[#8A645A] font-medium">
            Desde un detalle íntimo hasta mesas dulces completas. Cada categoría está pensada
            para adaptarse al tamaño de tu emoción y número de invitados.
          </p>
        </div>

        {/* Categories Grid - 6 High Craft Cards with Natural Tones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat) => (<div key={cat.id} className="bg-white rounded-[28px] border border-[#F2E6DA] card-shadow p-6 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-all">
              {/* Image Container with Natural Tones background & rounding */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#FFF8F2] rounded-2xl mb-5 border border-[#F2E6DA]/60">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
                <div className="absolute top-3 left-3">
                  <span className="badge-artesanal bg-white/95 backdrop-blur-xs text-[#C44E72] border border-[#F7D5D9] shadow-xs">
                    {cat.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-[#432818]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Desde {cat.priceFrom} Bs.
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#432818] mb-1 group-hover:text-[#C44E72] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-hand text-base text-[#8A645A] font-semibold mb-2.5">
                    {cat.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8A645A] leading-relaxed mb-5">
                    {cat.description}
                  </p>
                </div>

                <div>
                  {/* Meta Specs: Servings and Notice Time */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-[#F2E6DA] mb-5 text-xs text-[#432818] font-medium">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#C44E72] shrink-0"/>
                      <span>{cat.servings}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#8A645A] shrink-0"/>
                      <span>{cat.leadTime}</span>
                    </div>
                  </div>

                  {/* Actions: View in Menu & Quote */}
                  <div className="flex items-center gap-2">
                    <button type="button" id={`btn-cat-view-${cat.id}`} onClick={() => onSelectCategory(cat.id)} className="grow inline-flex justify-center items-center gap-2 bg-[#FFF8F2] hover:bg-[#FBE8EC] text-[#C44E72] border border-[#F7D5D9] py-2.5 px-4 rounded-full font-bold text-xs transition-colors">
                      <span>Ver modelos</span>
                      <ArrowRight className="w-3.5 h-3.5"/>
                    </button>

                    <button type="button" id={`btn-cat-quote-${cat.id}`} onClick={() => onQuoteCategory ? onQuoteCategory(cat.id) : undefined} className="inline-flex justify-center items-center bg-[#C44E72] hover:bg-[#a63d5d] text-white p-2.5 rounded-full transition-all shadow-md hover:scale-105 cursor-pointer" title="Cotizar este tipo de dulce">
                      <Sparkles className="w-4 h-4 text-[#F5C49D]"/>
                    </button>
                  </div>
                </div>

              </div>
            </div>))}
        </div>

      </div>
    </section>);
};
