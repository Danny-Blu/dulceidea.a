import { useState } from 'react';
import { FLAVOR_BASES, FLAVOR_FILLINGS, RECOMMENDED_COMBOS } from '../data/mockData';
import { Sparkles, Check, Heart, ArrowRight } from 'lucide-react';
import { CherryDoodle, WhiskDoodle } from './Doodles';
export const FlavorsSection = ({ onPreselectFlavors }) => {
    const [selectedBase, setSelectedBase] = useState(FLAVOR_BASES[0]);
    const [selectedFilling, setSelectedFilling] = useState(FLAVOR_FILLINGS[0]);
    const handleApplyCombo = (baseName, fillingName) => {
        if (onPreselectFlavors) {
            onPreselectFlavors(baseName, fillingName);
        }
    };
    return (<section id="sabores" className="py-20 lg:py-28 bg-[#FBE8EC]/40 relative overflow-hidden">
      {/* Decorative Doodles */}
      <div className="absolute top-8 right-12 opacity-40 pointer-events-none hidden md:block">
        <WhiskDoodle className="w-16 h-16"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl text-[#C44E72] font-bold">
              Alquimia de sabores caseros
            </span>
            <CherryDoodle className="w-5 h-5"/>
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Elige la combinación perfecta
          </h2>

          <p className="text-base sm:text-lg text-[#432818]/80 font-medium">
            Bizcochos suaves y esponjosos elaborados desde cero con mantequilla pura, 
            combinados con rellenos cremosos y coulis de frutas naturales.
          </p>
        </div>

        {/* Combinaciones Recomendadas (Star Combos) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-fraunces text-2xl font-bold text-[#432818]">
              Trilogía de combinaciones estrella
            </h3>
            <span className="font-caveat text-lg text-[#C44E72] font-bold hidden sm:inline-block">
              Probadas y amadas por nuestros clientes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECOMMENDED_COMBOS.map((combo) => (<div key={combo.name} className="bg-white rounded-3xl p-7 border border-[#F7D5D9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`badge-artesanal ${combo.badge === 'Favorita de la casa'
                ? 'bg-[#C44E72] text-white'
                : combo.badge === 'Más vendida'
                    ? 'bg-[#F5C49D] text-[#432818]'
                    : 'bg-[#432818] text-white'}`}>
                      {combo.badge}
                    </span>
                    <Heart className="w-4 h-4 text-[#C44E72] fill-[#F7D5D9]"/>
                  </div>

                  <h4 className="font-fraunces text-xl font-bold text-[#432818] mb-2">
                    {combo.name}
                  </h4>

                  <p className="text-xs text-[#432818]/80 leading-relaxed mb-5">
                    {combo.description}
                  </p>

                  <div className="space-y-2 bg-[#FFF8F2] p-4 rounded-2xl border border-[#F2E6DA] text-xs mb-4">
                    <div>
                      <span className="font-bold text-[#8A645A]">Bizcocho: </span>
                      <span className="text-[#432818] font-semibold">{combo.base}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#8A645A]">Relleno: </span>
                      <span className="text-[#432818] font-semibold">{combo.filling}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#8A645A]">Cobertura: </span>
                      <span className="text-[#432818] font-semibold">{combo.coating}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#8A645A] italic mb-4">
                    💡 {combo.pairingNote}
                  </p>
                </div>

                <a href="#cotizador" onClick={() => handleApplyCombo(combo.base, combo.filling)} className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#C44E72] hover:text-[#AB3A5D] bg-[#FBE8EC] hover:bg-[#F7D5D9] py-2.5 rounded-full transition-colors">
                  <span>Elegir esta combinación</span>
                  <ArrowRight className="w-3.5 h-3.5"/>
                </a>
              </div>))}
          </div>
        </div>

        {/* Interactive Custom Flavor Mixer */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-[#F7D5D9] shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="badge-artesanal bg-[#FBE8EC] text-[#C44E72] border border-[#F7D5D9] mb-2">
              Explorador Interactivo
            </span>
            <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#432818]">
              Diseña tu propia mezcla artesanal
            </h3>
            <p className="text-xs sm:text-sm text-[#432818]/80 mt-2">
              Haz clic en un bizcocho y un relleno para simular el sabor de tu celebración.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step A: Choose Cake Base */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#C44E72] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h4 className="font-fraunces text-lg font-bold text-[#432818]">
                  Sabores de Bizcocho
                </h4>
              </div>

              <div className="space-y-2.5">
                {FLAVOR_BASES.map((base) => {
            const isSelected = selectedBase.id === base.id;
            return (<button key={base.id} type="button" onClick={() => setSelectedBase(base)} className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-start justify-between ${isSelected
                    ? 'bg-[#FBE8EC] border-[#C44E72] shadow-xs'
                    : 'bg-[#FFF8F2] hover:bg-white border-[#F2E6DA]'}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: base.colorHex }}/>
                          <p className="text-xs sm:text-sm font-bold text-[#432818]">
                            {base.name}
                          </p>
                        </div>
                        <p className="text-[11px] text-[#8A645A] line-clamp-2">
                          {base.description}
                        </p>
                      </div>
                      {isSelected && (<div className="w-5 h-5 rounded-full bg-[#C44E72] text-white flex items-center justify-center shrink-0 ml-2">
                          <Check className="w-3 h-3"/>
                        </div>)}
                    </button>);
        })}
              </div>
            </div>

            {/* Step B: Choose Filling */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#C44E72] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h4 className="font-fraunces text-lg font-bold text-[#432818]">
                  Rellenos & Coulis
                </h4>
              </div>

              <div className="space-y-2.5">
                {FLAVOR_FILLINGS.map((filling) => {
            const isSelected = selectedFilling.id === filling.id;
            return (<button key={filling.id} type="button" onClick={() => setSelectedFilling(filling)} className={`w-full text-left p-3 rounded-2xl border transition-all duration-200 flex items-start justify-between ${isSelected
                    ? 'bg-[#FBE8EC] border-[#C44E72] shadow-xs'
                    : 'bg-[#FFF8F2] hover:bg-white border-[#F2E6DA]'}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-xs sm:text-sm font-bold text-[#432818]">
                            {filling.name}
                          </p>
                          <span className="text-[10px] text-[#C44E72] font-semibold bg-white px-2 py-0.5 rounded-full border border-[#F7D5D9]">
                            {filling.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8A645A]">
                          {filling.description}
                        </p>
                      </div>
                      {isSelected && (<div className="w-5 h-5 rounded-full bg-[#C44E72] text-white flex items-center justify-center shrink-0 ml-2">
                          <Check className="w-3 h-3"/>
                        </div>)}
                    </button>);
        })}
              </div>
            </div>

            {/* Step C: Flavor Pairing Preview Outcome Card */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#C44E72] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h4 className="font-fraunces text-lg font-bold text-[#432818]">
                  Tu Creación
                </h4>
              </div>

              <div className="bg-gradient-to-br from-[#FFF8F2] to-[#FBE8EC] p-6 rounded-3xl border border-[#F7D5D9] shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-3 border border-[#F7D5D9]">
                    <CherryDoodle className="w-9 h-9"/>
                  </div>
                  <span className="font-caveat text-xl text-[#C44E72] font-bold">
                    ¡Maridaje irresistible!
                  </span>
                  <h5 className="font-fraunces text-xl font-bold text-[#432818] mt-1">
                    {selectedBase.name} + {selectedFilling.name}
                  </h5>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl border border-[#F2E6DA] text-xs text-[#432818] space-y-2 mb-6">
                  <p>
                    <strong className="text-[#8A645A]">Sensación al paladar:</strong> La
                    humedad esponjosa del bizcocho de {selectedBase.name.toLowerCase()} se
                    complementa armónicamente con la textura sedosa de {selectedFilling.name.toLowerCase()}.
                  </p>
                  <p>
                    <strong className="text-[#8A645A]">Cobertura sugerida:</strong> Buttercream
                    suizo a temperatura ambiente para no alterar la sutileza del relleno.
                  </p>
                </div>

                <a href="#cotizador" onClick={() => handleApplyCombo(selectedBase.name, selectedFilling.name)} className="w-full inline-flex justify-center items-center gap-2 bg-[#C44E72] hover:bg-[#AB3A5D] text-white py-3.5 px-4 rounded-full font-bold text-xs shadow-md hover:shadow-lg transition-all">
                  <Sparkles className="w-4 h-4 text-[#F5C49D]"/>
                  <span>Quiero esta combinación en mi torta</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>);
};
