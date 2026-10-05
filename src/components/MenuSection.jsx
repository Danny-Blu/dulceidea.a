import { useState } from 'react';
import { PRODUCTS_MENU_DATA } from '../data/mockData';
import { Sparkles, Clock, Users, Search } from 'lucide-react';
import { StrawberryDoodle } from './Doodles';
export const MenuSection = ({ sectionRef, selectedCategory, onCategoryChange, onSelectProductForQuote, }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const filterTabs = [
        { id: 'todos', label: 'Todos' },
        { id: 'tortas', label: 'Tortas' },
        { id: 'minicakes', label: 'Mini Cakes' },
        { id: 'cupcakes', label: 'Cupcakes' },
        { id: 'cookies', label: 'Cookies' },
        { id: 'boxes', label: 'Boxes' },
        { id: 'postres', label: 'Postres' },
    ];
    const filteredProducts = PRODUCTS_MENU_DATA.filter((item) => {
        const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.flavorsAvailable.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
    return (<section ref={sectionRef} id="menu" className="py-20 lg:py-28 bg-[#FFF8F2] relative border-t border-[#F7D5D9]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-hand text-2xl text-[#C44E72] font-bold">
              Catálogo de creaciones
            </span>
            <StrawberryDoodle className="w-5 h-5"/>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Nuestro Menú de Autor
          </h2>

          <p className="text-base sm:text-lg text-[#8A645A] font-medium">
            Cada receta se hornea exclusivamente bajo encargo con ingredientes 100% nobles. 
            Elige tu diseño favorito como referencia o personalízalo a tu gusto.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Filter Chips */}
          <div className="flex items-center flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (<button key={tab.id} type="button" id={`filter-tab-${tab.id}`} onClick={() => onCategoryChange(tab.id)} className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${isActive
                    ? 'bg-[#C44E72] hover:bg-[#a63d5d] text-white shadow-md transform -translate-y-0.5'
                    : 'bg-white hover:bg-[#FBE8EC] text-[#8A645A] border border-[#F2E6DA]'}`}>
                  {tab.label}
                </button>);
        })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8A645A] absolute left-3.5 top-1/2 -translate-y-1/2"/>
            <input type="text" id="menu-search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Buscar por sabor, estilo..." className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-[#F2E6DA] focus:outline-none focus:ring-2 focus:ring-[#C44E72]/40 text-[#432818] placeholder-[#8A645A]/70"/>
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (<div key={product.id} className="bg-white rounded-[28px] border border-[#F2E6DA] card-shadow p-6 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 transition-all">
              {/* Product Visual */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#FFF8F2] rounded-2xl mb-4 border border-[#F2E6DA]/50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy"/>

                {/* Badge Top Left */}
                {product.badge && (<div className="absolute top-3 left-3">
                    <span className={`badge-artesanal shadow-xs ${product.badge === 'MÁS PEDIDO'
                    ? 'bg-[#C44E72] text-white'
                    : product.badge === 'EDICIÓN ESPECIAL'
                        ? 'bg-[#432818] text-white'
                        : 'bg-[#F5C49D] text-[#432818]'}`}>
                      {product.badge}
                    </span>
                  </div>)}

                {/* Price Pill Bottom Right */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-[#432818]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Desde {product.priceFrom} Bs.
                  </span>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="flex flex-col grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#432818] mb-1.5 group-hover:text-[#C44E72] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#8A645A] leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="bg-[#FFF8F2] p-3 rounded-2xl border border-[#F2E6DA] mb-4">
                    <p className="text-[11px] text-[#8A645A] font-semibold mb-1">
                      ✨ Toque artesanal:
                    </p>
                    <p className="text-xs text-[#432818] font-medium italic">
                      "{product.ingredientsHighlight}"
                    </p>
                  </div>

                  {/* Flavors Chips */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold text-[#8A645A] uppercase tracking-wider mb-2">
                      Sabores recomendados:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.flavorsAvailable.map((flavor) => (<span key={flavor} className="bg-[#FFF8F2] text-[#C44E72] text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#F2E6DA]">
                          {flavor}
                        </span>))}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Meta Specs */}
                  <div className="flex items-center justify-between text-xs text-[#8A645A] py-2.5 border-t border-[#F2E6DA] mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C44E72]"/>
                      <span>{product.servings}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#8A645A]"/>
                      <span>Anticipación: {product.leadTime}</span>
                    </div>
                  </div>

                  {/* Button: Cotizar este diseño */}
                  <a href="#cotizador" id={`quote-btn-${product.id}`} onClick={() => onSelectProductForQuote(product)} className="w-full inline-flex justify-center items-center gap-2 bg-[#C44E72] hover:bg-[#a63d5d] text-white py-3 px-4 rounded-full font-bold text-xs shadow-md hover:shadow-lg transition-all duration-300">
                    <Sparkles className="w-3.5 h-3.5 text-[#F5C49D]"/>
                    <span>Quiero cotizar este diseño</span>
                  </a>
                </div>

              </div>
            </div>))}
        </div>

        {filteredProducts.length === 0 && (<div className="text-center py-16 bg-white rounded-3xl border border-[#F7D5D9]/70 max-w-md mx-auto">
            <p className="font-fraunces text-lg text-[#432818] font-bold mb-2">
              No encontramos productos con esa búsqueda
            </p>
            <p className="text-sm text-[#8A645A] mb-4">
              Probá seleccionando otra categoría o borrando el texto de búsqueda.
            </p>
            <button type="button" onClick={() => {
                setSearchQuery('');
                onCategoryChange('todos');
            }} className="bg-[#C44E72] text-white px-5 py-2 rounded-full text-xs font-bold">
              Ver todo el catálogo
            </button>
          </div>)}

      </div>
    </section>);
};
