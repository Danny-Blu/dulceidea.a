import { Heart, Sparkles, Award, Home } from 'lucide-react';
import { CherryDoodle, WhiskDoodle } from './Doodles';
export const AboutSection = ({ sectionRef }) => {
    return (<section ref={sectionRef} id="nosotros" className="py-20 lg:py-28 bg-[#FFF8F2] relative overflow-hidden">
      
      {/* Decorative Whisk Doodle in background */}
      <div className="absolute -bottom-8 -right-8 opacity-25 pointer-events-none hidden lg:block">
        <WhiskDoodle className="w-48 h-48"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photos Collage on Left */}
          <div className="lg:col-span-5 relative">
            
            {/* Soft backdrop shape */}
            <div className="absolute inset-0 bg-[#F7D5D9]/50 rounded-[44px] transform -rotate-2 scale-98 -z-10"/>

            {/* Main Baker Photo */}
            <div className="rounded-[36px] overflow-hidden shadow-xl border-4 border-white bg-white aspect-4/5">
              <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" alt="Sofía decorando torta en taller Dulce Idea" className="w-full h-full object-cover" loading="lazy"/>
            </div>

            {/* Small Overlapping Atelier Photo */}
            <div className="absolute -bottom-6 -right-6 w-36 sm:w-44 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=400&q=80" alt="Taller artesanal e insumos nobles" className="w-full h-full object-cover" loading="lazy"/>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-6 -left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-2xl shadow-lg border border-[#F7D5D9] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#C44E72] fill-[#F7D5D9]"/>
              <span className="font-caveat text-base text-[#432818] font-bold">
                Sofía • Pastelera & Creadora
              </span>
            </div>

          </div>

          {/* Story & Philosophy on Right */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-caveat text-2xl text-[#C44E72] font-bold">
                Nuestra esencia artesanal
              </span>
              <CherryDoodle className="w-5 h-5"/>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-6 leading-tight">
              Creemos que cada momento especial merece una obra hecha a mano.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#432818]/85 leading-relaxed mb-8">
              <p>
                <strong>Dulce Idea</strong> nació en 2021 en una pequeña cocina de La Paz con una 
                visión muy clara: devolverle a la pastelería el tiempo, el cariño y el sabor auténtico
                que las grandes producciones industriales dejaron de lado.
              </p>
              <p>
                Nos inspiramos en la delicadeza editorial, las revistas de cocina europeas y los 
                diseños minimalistas de pastelería contemporánea. Aquí no hay mezclas de polvos de caja 
                ni decoraciones en serie: cada bizcocho se hornea desde cero con mantequilla pura de rancho, 
                huevos frescos y pulpas de fruta natural.
              </p>
              <p className="font-caveat text-xl text-[#C44E72] font-bold">
                "No vendemos simplemente pasteles; horneamos el centro de las sonrisas de tu festejo."
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4.5 rounded-2xl border border-[#F7D5D9] shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#FBE8EC] flex items-center justify-center text-[#C44E72]">
                    <Home className="w-4 h-4"/>
                  </div>
                  <h4 className="font-fraunces text-base font-bold text-[#432818]">
                    Hecho en casa
                  </h4>
                </div>
                <p className="text-xs text-[#8A645A]">
                  Taller boutique en La Paz. Producción en lotes pequeños para garantizar frescura absoluta.
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl border border-[#F7D5D9] shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#FBE8EC] flex items-center justify-center text-[#C44E72]">
                    <Sparkles className="w-4 h-4"/>
                  </div>
                  <h4 className="font-fraunces text-base font-bold text-[#432818]">
                    Personalización total
                  </h4>
                </div>
                <p className="text-xs text-[#8A645A]">
                  Adaptamos paletas de colores, detalles florales, dedicatorias y sabores a tu gusto exacto.
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl border border-[#F7D5D9] shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#FBE8EC] flex items-center justify-center text-[#C44E72]">
                    <Heart className="w-4 h-4"/>
                  </div>
                  <h4 className="font-fraunces text-base font-bold text-[#432818]">
                    Cariño en cada trazo
                  </h4>
                </div>
                <p className="text-xs text-[#8A645A]">
                  Cada volado en buttercream y detalle de fruta fresca se coloca con amor y minuciosidad.
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl border border-[#F7D5D9] shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#FBE8EC] flex items-center justify-center text-[#C44E72]">
                    <Award className="w-4 h-4"/>
                  </div>
                  <h4 className="font-fraunces text-base font-bold text-[#432818]">
                    Calidad sin atajos
                  </h4>
                </div>
                <p className="text-xs text-[#8A645A]">
                  Chocolate belga, extracto puro de vainilla de Madagascar y fruta natural de estación.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>);
};
