import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { Sparkles, Eye, X } from 'lucide-react';
import { SparkleDoodle } from './Doodles';
export const GallerySection = ({ onUseReferenceForQuote }) => {
    const [activeCategory, setActiveCategory] = useState('todos');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const categories = [
        { id: 'todos', label: 'Todos' },
        { id: 'vintage', label: 'Vintage' },
        { id: 'minimalista', label: 'Minimalista' },
        { id: 'floral', label: 'Floral' },
        { id: 'cumpleanos', label: 'Cumpleaños' },
        { id: 'infantil', label: 'Infantil' },
        { id: 'babyshower', label: 'Baby Shower' },
        { id: 'graduacion', label: 'Graduación' },
        { id: 'tematica', label: 'Temática' },
    ];
    const filteredItems = GALLERY_ITEMS.filter((item) => {
        if (activeCategory === 'todos')
            return true;
        return item.category === activeCategory;
    });
    return (<section id="galeria" className="py-20 lg:py-28 bg-[#FFF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl text-[#C44E72] font-bold">
              Inspiración de nuestro taller
            </span>
            <SparkleDoodle className="w-5 h-5 text-[#F5C49D]"/>
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Galería de Momentos Dulces
          </h2>

          <p className="text-base sm:text-lg text-[#432818]/80 font-medium">
            Cada creación cuenta una historia de amor, celebración y alegría. 
            Hacé clic en cualquier diseño para ver los detalles e incluirlo como referencia.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (<button key={cat.id} type="button" id={`gallery-filter-${cat.id}`} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${isActive
                    ? 'bg-[#C44E72] text-white shadow-md transform -translate-y-0.5'
                    : 'bg-white hover:bg-[#FBE8EC] text-[#432818]/80 border border-[#F7D5D9]/60'}`}>
                {cat.label}
              </button>);
        })}
        </div>

        {/* Masonry-Style Pinterest Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (<div key={item.id} onClick={() => setSelectedPhoto(item)} className="break-inside-avoid relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-[#F7D5D9]/60">
              <img src={item.image} alt={item.title} className={`w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${index % 3 === 0 ? 'aspect-4/5' : index % 2 === 0 ? 'aspect-square' : 'aspect-3/4'}`} loading="lazy"/>

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#432818]/85 via-[#432818]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="badge-artesanal bg-[#C44E72] text-white text-[10px] w-fit mb-1.5">
                  {item.categoryLabel}
                </span>
                <h4 className="font-fraunces text-base font-bold text-white mb-1 leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-[#F7D5D9]">
                  <span>{item.servings}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5"/>
                    <span>Ver detalle</span>
                  </div>
                </div>
              </div>
            </div>))}
        </div>

        {/* Lightbox / Modal for Detailed View */}
        {selectedPhoto && (<div className="fixed inset-0 z-50 bg-[#432818]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#F7D5D9] relative flex flex-col md:flex-row">
              
              {/* Close Button */}
              <button type="button" onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-[#FBE8EC] text-[#432818] flex items-center justify-center shadow-md transition-colors" aria-label="Cerrar modal">
                <X className="w-5 h-5"/>
              </button>

              {/* Photo on Left */}
              <div className="md:w-1/2 aspect-square md:aspect-auto bg-[#FBE8EC]">
                <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-full object-cover"/>
              </div>

              {/* Content Details on Right */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge-artesanal bg-[#FBE8EC] text-[#C44E72] border border-[#F7D5D9]">
                      {selectedPhoto.categoryLabel}
                    </span>
                    <span className="text-xs text-[#8A645A] font-semibold">
                      Ocasión: {selectedPhoto.occasion}
                    </span>
                  </div>

                  <h3 className="font-fraunces text-2xl font-bold text-[#432818] mb-3">
                    {selectedPhoto.title}
                  </h3>

                  <div className="space-y-2.5 bg-[#FFF8F2] p-4 rounded-2xl border border-[#F2E6DA] text-xs mb-6">
                    <div>
                      <strong className="text-[#8A645A]">Estilo artístico: </strong>
                      <span className="text-[#432818] font-medium">{selectedPhoto.style}</span>
                    </div>
                    <div>
                      <strong className="text-[#8A645A]">Porciones sugeridas: </strong>
                      <span className="text-[#432818] font-medium">{selectedPhoto.servings}</span>
                    </div>
                    <div>
                      <strong className="text-[#8A645A]">Tiempo mínimo de pedido: </strong>
                      <span className="text-[#432818] font-medium">5 a 7 días de anticipación</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#432818]/80 leading-relaxed mb-4">
                    ¿Te enamoraste de este diseño? Podemos recrearlo adaptándolo a tu paleta de
                    colores, cantidad de invitados y sabor favorito.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a href="#cotizador" onClick={() => {
                if (onUseReferenceForQuote) {
                    onUseReferenceForQuote(selectedPhoto.title);
                }
                setSelectedPhoto(null);
            }} className="w-full inline-flex justify-center items-center gap-2 bg-[#C44E72] hover:bg-[#AB3A5D] text-white py-3 px-5 rounded-full font-bold text-xs shadow-md transition-all">
                    <Sparkles className="w-4 h-4 text-[#F5C49D]"/>
                    <span>Inspirarme con este diseño para cotizar</span>
                  </a>

                  <button type="button" onClick={() => setSelectedPhoto(null)} className="w-full text-center text-xs text-[#8A645A] hover:text-[#432818] font-semibold py-1.5">
                    Seguir explorando la galería
                  </button>
                </div>

              </div>
            </div>
          </div>)}

      </div>
    </section>);
};
