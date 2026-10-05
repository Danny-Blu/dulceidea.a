import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { CherryDoodle, StrawberryDoodle, SparkleDoodle } from './Doodles';
export const Hero = ({ onNavigate }) => {
    return (<section id="inicio" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-[#FFF8F2]">
      {/* Background Soft Glows & Ambient Shapes */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-[#F7D5D9]/40 rounded-full blur-3xl pointer-events-none"/>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5C49D]/30 rounded-full blur-3xl pointer-events-none"/>

      {/* Decorative Floating Background Doodles */}
      <div className="absolute top-24 left-8 lg:left-16 opacity-75 animate-bounce [animation-duration:4s] pointer-events-none">
        <SparkleDoodle className="w-7 h-7 text-[#F5C49D]"/>
      </div>
      <div className="absolute bottom-20 left-12 opacity-80 pointer-events-none hidden sm:block">
        <CherryDoodle className="w-8 h-8"/>
      </div>
      <div className="absolute top-32 right-12 opacity-80 pointer-events-none hidden md:block">
        <StrawberryDoodle className="w-7 h-7"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lado Izquierdo - Editorial Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pr-0 lg:pr-6">
            
            {/* Handwritten Accent Eyebrow */}
            <div className="relative inline-flex items-center gap-2 mb-3">
              <span className="font-hand text-[#F5C49D] text-2xl sm:text-3xl font-bold rotate-[-4deg] drop-shadow-xs">
                Hecho con mucho amor.
              </span>
              <Heart className="w-5 h-5 text-[#C44E72] fill-[#F7D5D9]"/>
            </div>

            {/* H1 - Huge Fraunces Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#432818] leading-[1.1] mb-6">
              Cada celebración comienza con una{' '}
              <span className="relative inline-block text-[#C44E72] italic">
                Dulce Idea.
                {/* Underline aesthetic doodle wave */}
                <svg className="absolute left-0 -bottom-2 w-full h-3 text-[#F7D5D9]" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9.5C18 3.5 35 11 52 7C69 3 86 9 99 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Paragraph with warm earthy color #8A645A */}
            <p className="text-lg sm:text-xl text-[#8A645A] font-medium leading-relaxed mb-8 max-w-xl">
              Tortas y postres personalizados hechos artesanalmente para cumpleaños, aniversarios y momentos inolvidables. 
              Sin premezclas industriales, con ingredientes nobles y todo el cariño en cada detalle.
            </p>

            {/* Two Main Action Buttons matching Natural Tones */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button type="button" id="hero-btn-customize" onClick={() => onNavigate ? onNavigate('cotizar-disponibilidad') : undefined} className="inline-flex justify-center items-center gap-2.5 bg-[#C44E72] hover:bg-[#a63d5d] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 text-center cursor-pointer">
                <Sparkles className="w-5 h-5 text-[#F5C49D]"/>
                <span>Personalizar torta</span>
              </button>

              <button type="button" id="hero-btn-menu" onClick={() => onNavigate ? onNavigate('menu-sabores') : undefined} className="inline-flex justify-center items-center gap-2 bg-white border-2 border-[#F7D5D9] text-[#C44E72] px-8 py-4 rounded-full font-bold text-base hover:bg-[#FBE8EC] transition-all duration-300 text-center card-shadow cursor-pointer">
                <span>Ver menú</span>
                <ArrowRight className="w-4 h-4 text-[#C44E72]"/>
              </button>
            </div>

            {/* 3 Key Benefits with Natural Tones border and star accents */}
            <div className="flex gap-6 sm:gap-8 mt-10 pt-8 border-t border-[#F2E6DA] flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[#F5C49D] text-xl">★</span>
                <span className="text-sm font-bold text-[#432818]">100% Artesanal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F5C49D] text-xl">★</span>
                <span className="text-sm font-bold text-[#432818]">Diseños Únicos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F5C49D] text-xl">★</span>
                <span className="text-sm font-bold text-[#432818]">Ingredientes Frescos</span>
              </div>
            </div>

            {/* Micro reassurance */}
            <p className="font-hand text-base text-[#8A645A] font-semibold mt-4">
              * Tomamos pedidos con 5 a 7 días de anticipación para cuidar cada detalle en La Paz.
            </p>
          </div>

          {/* Lado Derecho - Composición Visual Hero con Elementos Flotantes Natural Tones */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Main Editorial Showcase Container with rounded-[40px] and Natural Tones border */}
            <div className="relative w-full max-w-md aspect-4/5 bg-[#F7D5D9] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" alt="Torta artesanal personalizada Dulce Idea" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-90" loading="eager"/>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#432818]/60 via-transparent to-transparent pointer-events-none"/>

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-5 left-5 right-5 text-white bg-[#432818]/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-base font-bold text-[#F7D5D9]">
                      Torta Vintage Lambeth
                    </p>
                    <p className="text-xs text-white/90">
                      Frambuesa natural & buttercream sedoso
                    </p>
                  </div>
                  <span className="bg-[#C44E72] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Desde 180 Bs.
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card Top Right: Nuevas Mini Cakes! */}
            <div className="absolute top-4 -right-2 sm:-right-4 bg-white p-4 rounded-2xl card-shadow rotate-3 border border-[#F2E6DA] z-20">
              <p className="font-hand text-2xl text-[#C44E72] leading-none mb-1">
                ¡Nuevas Mini Cakes!
              </p>
              <p className="text-xs text-[#8A645A] font-bold">
                Ideales para regalar
              </p>
            </div>

            {/* Floating Card Bottom Left: Favorita de la casa */}
            <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white px-5 py-3.5 rounded-full card-shadow flex items-center gap-3.5 border border-[#F2E6DA] z-20">
              <div className="w-11 h-11 bg-[#F5C49D] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-xs">
                ♥
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#C44E72]">
                  Favorita de la casa
                </p>
                <p className="text-xs font-serif font-bold text-[#432818]">
                  Red Velvet & Cream Cheese
                </p>
              </div>
            </div>

            {/* Floating Circular Badge: Pedidos 7 días anticipación */}
            <div className="absolute -bottom-4 -right-4 w-28 sm:w-32 h-28 sm:h-32 bg-[#F5C49D] rounded-full flex items-center justify-center border-4 border-white rotate-12 shadow-xl z-20">
              <span className="font-serif text-white text-center leading-tight text-sm sm:text-base font-bold">
                Pedidos<br />
                7 días<br />
                <span className="text-[10px] font-sans font-normal opacity-90">anticipación</span>
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>);
};
