import { Cake, BookOpen, Image, HelpCircle, CalendarClock, ArrowLeft } from 'lucide-react';
export const PageNavigationBanner = ({ currentPage, onNavigate, }) => {
    const pages = [
        {
            id: 'inicio',
            number: 1,
            title: 'Inicio & Historia',
            subtitle: 'Bienvenida, nosotros, testimonios y preguntas frecuentes',
            icon: <Cake className="w-4 h-4 text-[#C44E72]"/>,
        },
        {
            id: 'menu-sabores',
            number: 2,
            title: 'Menú & Sabores',
            subtitle: 'Categorías de autor, productos destacados, bizcochos y rellenos',
            icon: <BookOpen className="w-4 h-4 text-[#C44E72]"/>,
        },
        {
            id: 'inspiracion',
            number: 3,
            title: 'Galería de Inspiración',
            subtitle: 'Modelos reales, estilos de diseño y referencias para tu evento',
            icon: <Image className="w-4 h-4 text-[#C44E72]"/>,
        },
        {
            id: 'como-pedir',
            number: 4,
            title: 'Cómo Pedir',
            subtitle: 'Paso a paso, tiempos de entrega y recomendaciones de cuidado',
            icon: <HelpCircle className="w-4 h-4 text-[#C44E72]"/>,
        },
        {
            id: 'cotizar-disponibilidad',
            number: 5,
            title: 'Cotizar & Disponibilidad',
            subtitle: 'Semáforo de cupos en vivo y cotizador guiado para WhatsApp',
            icon: <CalendarClock className="w-4 h-4 text-[#C44E72]"/>,
        },
    ];
    const currentMeta = pages.find((p) => p.id === currentPage) || pages[0];
    // For secondary pages, render a prominent header with breadcrumbs and fast page tabs
    if (currentPage === 'inicio') {
        return null;
    }
    return (<div className="pt-28 pb-8 bg-gradient-to-b from-[#FBE8EC]/60 via-[#FFF8F2] to-[#FFF8F2] border-b border-[#F2E6DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top breadcrumb bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button type="button" onClick={() => onNavigate('inicio')} className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8A645A] hover:text-[#C44E72] bg-white px-3.5 py-1.5 rounded-full border border-[#F2E6DA] shadow-xs transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4"/>
            <span>Volver a Inicio</span>
          </button>

          {/* Page badge indicator */}
          <div className="flex items-center gap-2">
            <span className="font-hand text-base text-[#C44E72] font-bold">
              Página {currentMeta.number} de 5
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C49D]"/>
            <span className="text-xs uppercase tracking-wider text-[#8A645A] font-bold">
              Pastelería Dulce Idea
            </span>
          </div>
        </div>

        {/* Page Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="p-2 bg-white rounded-2xl border border-[#F7D5D9] shadow-xs">
                {currentMeta.icon}
              </span>
              <span className="font-hand text-xl text-[#F5C49D] font-bold">
                Sección exclusiva
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight">
              {currentMeta.title}
            </h1>
            <p className="text-sm sm:text-base text-[#8A645A] font-medium mt-1 max-w-2xl">
              {currentMeta.subtitle}
            </p>
          </div>

          {/* Quick Page Navigator Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {pages.map((p) => {
            const isActive = p.id === currentPage;
            return (<button key={p.id} type="button" onClick={() => onNavigate(p.id)} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${isActive
                    ? 'bg-[#C44E72] text-white shadow-sm'
                    : 'bg-white text-[#8A645A] hover:bg-[#FBE8EC] hover:text-[#C44E72] border border-[#F2E6DA]'}`}>
                  <span>{p.number}.</span>
                  <span>{p.title.split(' ')[0]}</span>
                </button>);
        })}
          </div>
        </div>

      </div>
    </div>);
};
