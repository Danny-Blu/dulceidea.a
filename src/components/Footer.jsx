import { useState } from 'react';
import { CherryDoodle } from './Doodles';
import { Instagram, MessageCircle, MapPin, Clock, Mail, Heart, Send, Check } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 4000);
            setEmail('');
        }
    };
    return (<footer className="bg-[#432818] text-[#FFF8F2] pt-16 pb-12 border-t-4 border-[#C44E72] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#F2E6DA]/20">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <CherryDoodle className="w-8 h-8"/>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FFF8F2]">
                  Dulce Idea
                </span>
                <span className="font-hand text-base text-[#F7D5D9] -mt-1 font-semibold">
                  pastelería boutique
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFF8F2]/80 leading-relaxed mb-6 max-w-sm">
              Pastelería artesanal y pasteles de diseño personalizados en La Paz, Bolivia. 
              Horneamos con amor y dedicación para hacer de tu celebración un recuerdo imborrable.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Dulce Idea" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C44E72] flex items-center justify-center text-white transition-colors">
                <Instagram className="w-4 h-4"/>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok de Dulce Idea" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C44E72] flex items-center justify-center text-white transition-colors text-xs font-bold">
                TK
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Dulce Idea" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C44E72] flex items-center justify-center text-white transition-colors text-xs font-bold">
                FB
              </a>
              <a href="https://wa.me/59178889900" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Dulce Idea" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-colors">
                <MessageCircle className="w-4 h-4"/>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-[#F7D5D9] mb-4">
              Explorar Páginas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFF8F2]/75">
              <li>
                <button type="button" onClick={() => onNavigate ? onNavigate('inicio') : undefined} className="hover:text-[#F7D5D9] transition-colors text-left cursor-pointer">
                  Inicio & Nosotros
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate ? onNavigate('menu-sabores') : undefined} className="hover:text-[#F7D5D9] transition-colors text-left cursor-pointer">
                  Menú & Sabores
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate ? onNavigate('inspiracion') : undefined} className="hover:text-[#F7D5D9] transition-colors text-left cursor-pointer">
                  Inspiración (Galería)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate ? onNavigate('como-pedir') : undefined} className="hover:text-[#F7D5D9] transition-colors text-left cursor-pointer">
                  Cómo Pedir (Paso a paso)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate ? onNavigate('cotizar-disponibilidad') : undefined} className="hover:text-[#F7D5D9] transition-colors text-left cursor-pointer text-[#F5C49D] font-bold">
                  Cotizar & Disponibilidad
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate ? onNavigate('inicio', 'faq') : undefined} className="hover:text-[#F7D5D9] transition-colors text-left cursor-pointer opacity-80">
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#F7D5D9] mb-4">
              Taller & Contacto
            </h4>
            <ul className="space-y-3 text-xs text-[#FFF8F2]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5C49D] shrink-0 mt-0.5"/>
                <span>Calle Rosendo Gutiérrez, Sopocachi (Previa cita) • La Paz, Bolivia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F5C49D] shrink-0"/>
                <span>Lunes a Sábado: 9:00 — 19:00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#F5C49D] shrink-0"/>
                <span>WhatsApp: +591 7888-9900</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5C49D] shrink-0"/>
                <span>hola@dulceidea.bo</span>
              </li>
            </ul>

            {/* Small Stylized Map Preview */}
            <div className="mt-4 bg-white/5 p-2.5 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="w-12 h-10 rounded-xl bg-[#C44E72]/40 border border-[#F7D5D9]/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#F7D5D9]"/>
              </div>
              <div className="text-[10px] text-[#FFF8F2]/80">
                <p className="font-bold text-[#FFF8F2]">Zona Sur & Sopocachi</p>
                <p>Envíos por taxi de confianza en toda la ciudad</p>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter Club Dulce (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#F7D5D9] mb-2">
              Club Dulce Idea
            </h4>
            <p className="text-xs text-[#FFF8F2]/80 mb-4 leading-relaxed">
              Recibe novedades, lanzamientos de temporada (San Valentín, Día de la Madre) y recetas exclusivas.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input type="email" required placeholder="Tu correo electrónico..." value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C44E72]"/>
                <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#C44E72] hover:bg-[#a63d5d] text-white p-1.5 rounded-full transition-colors" aria-label="Suscribirse al boletín">
                  <Send className="w-3 h-3"/>
                </button>
              </div>
              {subscribed && (<p className="text-[11px] text-[#F7D5D9] font-medium flex items-center gap-1 mt-1">
                  <Check className="w-3.5 h-3.5"/>
                  ¡Bienvenido al Club Dulce Idea!
                </p>)}
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8F2]/60">
          <p>© {CURRENT_YEAR} Dulce Idea. Pastelería Artesanal en La Paz, Bolivia.</p>
          <p className="flex items-center gap-1 font-hand text-base text-[#F7D5D9]">
            Diseñado con <Heart className="w-3.5 h-3.5 text-[#C44E72] fill-[#C44E72] inline"/> para tus momentos más felices.
          </p>
        </div>

      </div>
    </footer>);
};
