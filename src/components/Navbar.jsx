import { useState, useEffect } from 'react';
import { CherryDoodle } from './Doodles';
import { Menu, X, Sparkles, BookOpen, Image, HelpCircle, CalendarClock, Cake } from 'lucide-react';
export const Navbar = ({ activePage, onNavigate, onOpenOrderModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navPages = [
        { id: 'inicio', label: 'Inicio', shortLabel: 'Inicio', icon: <Cake className="w-4 h-4"/> },
        { id: 'menu-sabores', label: 'Menú & Sabores', shortLabel: 'Menú', icon: <BookOpen className="w-4 h-4"/> },
        { id: 'inspiracion', label: 'Inspiración', shortLabel: 'Galería', icon: <Image className="w-4 h-4"/> },
        { id: 'como-pedir', label: 'Cómo Pedir', shortLabel: 'Cómo Pedir', icon: <HelpCircle className="w-4 h-4"/> },
        { id: 'cotizar-disponibilidad', label: 'Cotizar & Fechas', shortLabel: 'Cotizar', icon: <CalendarClock className="w-4 h-4"/> },
    ];
    const handlePageClick = (pageId) => {
        onNavigate(pageId);
        setMobileMenuOpen(false);
    };
    return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F2E6DA] py-2.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#F2E6DA]/60 py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button type="button" id="nav-logo" onClick={() => handlePageClick('inicio')} className="flex items-center gap-2.5 group cursor-pointer focus:outline-none text-left">
            <div className="relative transform group-hover:rotate-12 transition-transform duration-300">
              <CherryDoodle className="w-8 h-8"/>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#C44E72] leading-none">
                Dulce Idea
              </span>
              <span className="font-hand text-sm text-[#8A645A] font-semibold -mt-1 tracking-wide">
                pastelería boutique
              </span>
            </div>
          </button>

          {/* Desktop Navigation Pages */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-[#FFF8F2] rounded-full border border-[#F2E6DA] shadow-inner">
            {navPages.map((page) => {
            const isActive = activePage === page.id;
            return (<button key={page.id} type="button" id={`nav-tab-${page.id}`} onClick={() => handlePageClick(page.id)} className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-[#C44E72] text-white shadow-md'
                    : 'text-[#8A645A] hover:text-[#C44E72] hover:bg-[#FBE8EC]/60'}`}>
                  <span className={isActive ? 'text-[#F5C49D]' : 'text-[#C44E72]'}>
                    {page.icon}
                  </span>
                  <span>{page.label}</span>
                </button>);
        })}
          </nav>

          {/* Action CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" id="nav-cta-btn" onClick={() => {
            if (onOpenOrderModal) {
                onOpenOrderModal();
            }
            else {
                handlePageClick('cotizar-disponibilidad');
            }
        }} className="inline-flex items-center gap-2 bg-[#C44E72] hover:bg-[#a63d5d] text-white px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
              <Sparkles className="w-4 h-4 text-[#F5C49D]"/>
              <span className="hidden sm:inline">Hacer un pedido</span>
              <span className="sm:hidden">Pedir</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button type="button" id="mobile-menu-toggle-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-full text-[#432818] hover:bg-[#FBE8EC] transition-colors focus:outline-none border border-[#F2E6DA]" aria-label="Abrir menú">
              {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (<div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-[#F2E6DA] px-5 py-5 shadow-xl transition-all">
          <p className="text-xs font-bold text-[#8A645A] uppercase tracking-wider mb-2 px-2">
            Páginas de la pastelería
          </p>
          <nav className="flex flex-col gap-1.5">
            {navPages.map((page) => {
                const isActive = activePage === page.id;
                return (<button key={page.id} type="button" onClick={() => handlePageClick(page.id)} className={`flex items-center justify-between px-4 py-3 rounded-2xl text-left font-bold text-sm transition-all ${isActive
                        ? 'bg-[#C44E72] text-white shadow-md'
                        : 'text-[#8A645A] hover:bg-[#FBE8EC] hover:text-[#C44E72]'}`}>
                  <div className="flex items-center gap-2.5">
                    <span className={isActive ? 'text-[#F5C49D]' : 'text-[#C44E72]'}>
                      {page.icon}
                    </span>
                    <span>{page.label}</span>
                  </div>
                  {isActive && (<span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">
                      Página actual
                    </span>)}
                </button>);
            })}
            
            <div className="pt-3 mt-2 border-t border-[#F2E6DA]">
              <button type="button" onClick={() => handlePageClick('cotizar-disponibilidad')} className="w-full inline-flex justify-center items-center gap-2 bg-[#C44E72] hover:bg-[#a63d5d] text-white py-3 rounded-full font-bold text-sm shadow-lg">
                <Sparkles className="w-4 h-4 text-[#F5C49D]"/>
                <span>Cotizar y ver disponibilidad</span>
              </button>
            </div>
          </nav>
        </div>)}
    </header>);
};
