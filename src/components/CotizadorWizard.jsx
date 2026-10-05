import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, ArrowRight, ArrowLeft, CheckCircle2, MessageCircle, Copy, Check, XCircle } from 'lucide-react';
import { CherryDoodle, SparkleDoodle } from './Doodles';
import { checkDateAvailability, CALENDAR_DAYS_SEPTEMBER_2026 } from '../data/mockData';
export const CotizadorWizard = ({ sectionRef, initialProduct = 'Torta Personalizada', initialBase = 'Vainilla Francesa Clásica', initialFilling = 'Frambuesa Confitada Natural', initialReference = '', initialDate = '2026-09-04', }) => {
    const [step, setStep] = useState(1);
    const [copied, setCopied] = useState(false);
    const [orderSent, setOrderSent] = useState(false);
    // Form State
    const [productType, setProductType] = useState(initialProduct);
    const [occasion, setOccasion] = useState('Cumpleaños');
    const [servings, setServings] = useState('15 a 20 porciones');
    const [flavorBase, setFlavorBase] = useState(initialBase);
    const [flavorFilling, setFlavorFilling] = useState(initialFilling);
    const [styleTheme, setStyleTheme] = useState('Vintage con volados (Lambeth)');
    const [colorPalette, setColorPalette] = useState('Rosa chantilly & crema vainilla');
    const [eventDate, setEventDate] = useState(initialDate || '');
    const [cakeMessage, setCakeMessage] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [extraNotes, setExtraNotes] = useState(initialReference ? `Inspiración: ${initialReference}` : '');
    // Sincronizar fecha si el usuario seleccionó un día en el Semáforo de Disponibilidad
    
    // Chequeo de disponibilidad de la fecha elegida
    const dateCheck = checkDateAvailability(eventDate);
    // Estimated Price Calculation
    const calculateEstimate = () => {
        let basePrice = 180;
        if (productType.includes('Bento') || productType.includes('Mini Cake'))
            basePrice = 70;
        else if (productType.includes('Cupcakes'))
            basePrice = 90;
        else if (productType.includes('Cookies'))
            basePrice = 95;
        else if (productType.includes('Box'))
            basePrice = 160;
        else if (productType.includes('Postre'))
            basePrice = 85;
        let multiplier = 1;
        if (servings.includes('25 a 35'))
            multiplier = 1.4;
        else if (servings.includes('40+'))
            multiplier = 1.9;
        else if (servings.includes('6 a 10'))
            multiplier = 0.85;
        else if (servings.includes('1 a 3'))
            multiplier = 0.5;
        const minEstimate = Math.round(basePrice * multiplier);
        const maxEstimate = Math.round(minEstimate * 1.25);
        return { min: minEstimate, max: maxEstimate };
    };
    const estimate = calculateEstimate();
    const handleFinish = (e) => {
        e.preventDefault();
        if (!eventDate)
            return;
        const validation = checkDateAvailability(eventDate);
        if (!validation.isAvailable) {
            return; // Bloquea estrictamente si la fecha está llena
        }
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#C44E72', '#F7D5D9', '#F5C49D', '#FFF8F2'],
        });
        setOrderSent(true);
    };
    const generateWhatsAppMessage = () => {
        return encodeURIComponent(`¡Hola Sofi de Dulce Idea! 🌸🧁\n\n` +
            `Me gustaría solicitar la cotización formal de un pedido para mi celebración:\n\n` +
            `🍰 *Producto:* ${productType}\n` +
            `🎉 *Ocasión:* ${occasion}\n` +
            `👥 *Porciones:* ${servings}\n` +
            `🌾 *Bizcocho:* ${flavorBase}\n` +
            `🍓 *Relleno:* ${flavorFilling}\n` +
            `🎨 *Estilo:* ${styleTheme}\n` +
            `🎀 *Paleta:* ${colorPalette}\n` +
            `📅 *Fecha requerida:* ${eventDate || 'A coordinar'}\n` +
            `✍️ *Mensaje en pastel:* ${cakeMessage || 'Sin dedicatoria por ahora'}\n` +
            `👤 *Cliente:* ${clientName || 'Cliente interesado'}\n` +
            (clientPhone ? `📱 *Teléfono:* ${clientPhone}\n` : '') +
            (extraNotes ? `📝 *Notas / Referencia:* ${extraNotes}\n\n` : '\n') +
            `💰 *Presupuesto estimado de la web:* ${estimate.min} a ${estimate.max} Bs.\n\n` +
            `¿Tienen disponibilidad en agenda para esta fecha? ¡Muchas gracias!`);
    };
    const handleCopySummary = () => {
        const text = decodeURIComponent(generateWhatsAppMessage());
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };
    const productOptions = [
        { name: 'Torta Personalizada', desc: 'Decorada en buttercream', icon: '🎂' },
        { name: 'Mini Cake / Bento', desc: '1 a 3 porciones con packaging', icon: '🧁' },
        { name: 'Cupcakes de Autor', desc: 'Caja x 6 o 12 decorados', icon: '🧁' },
        { name: 'Cookies Decoradas', desc: 'Galletas glaseadas a mano', icon: '🍪' },
        { name: 'Box Dulce Regalo', desc: 'Mini cake + macarons + detalles', icon: '🎁' },
        { name: 'Postres / Tartaletas', desc: 'Mesa dulce individual', icon: '🥧' },
    ];
    const occasionOptions = [
        'Cumpleaños',
        'Aniversario / Pareja',
        'Boda Civil / Matrimonio',
        'Baby Shower / Revelación',
        'Graduación / Logro',
        'Bautizo / Primera Comunión',
        'Regalo sorpresa',
        'Evento corporativo',
    ];
    const servingOptions = [
        { label: 'Bento íntimo (1-3 pax)', value: '1 a 3 porciones (Bento)' },
        { label: 'Pequeña (6-10 personas)', value: '6 a 10 porciones' },
        { label: 'Mediana (15-20 personas)', value: '15 a 20 porciones' },
        { label: 'Grande (25-35 personas)', value: '25 a 35 porciones' },
        { label: '2 Pisos (40+ personas)', value: '40+ personas (2 Pisos)' },
    ];
    const styleOptions = [
        'Vintage con volados (Lambeth)',
        'Minimalista Bento coreano',
        'Floral con flores prensadas/naturales',
        'Infantil tierno modelado',
        'Moderno texturizado & pan de oro',
        'Coquette con lazos y cerezas',
    ];
    const paletteOptions = [
        'Rosa Chantilly & Crema Vainilla',
        'Blanco Marfil & Detalles Oro',
        'Pasteles Mixtos (Lila, Durazno, Rosa)',
        'Tonos Cálidos (Chocolate, Latte, Nuez)',
        'Tonos Botánicos (Verde Eucalipto & Blanco)',
        'Colorido festivo y alegre',
    ];
    return (<section ref={sectionRef} id="cotizador" className="py-20 lg:py-28 bg-[#FFF8F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl text-[#C44E72] font-bold">
              Diseña tu pedido a tu medida
            </span>
            <SparkleDoodle className="w-5 h-5 text-[#F5C49D]"/>
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Cotizador Guiado
          </h2>

          <p className="text-base sm:text-lg text-[#432818]/80 font-medium">
            Completa este formulario interactivo. Al final obtendrás un presupuesto estimado 
            y podrás enviar todos los datos con un solo clic a nuestro WhatsApp sin confusiones.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-[36px] border border-[#F7D5D9] shadow-xl overflow-hidden">
          
          {/* Top Progress Bar */}
          <div className="bg-[#FFF8F2] px-6 sm:px-10 py-5 border-b border-[#F7D5D9] flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              {[1, 2, 3, 4].map((i) => (<div key={i} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step === i
                ? 'bg-[#C44E72] text-white shadow-xs'
                : step > i
                    ? 'bg-[#432818] text-white'
                    : 'bg-[#F2E6DA] text-[#8A645A]'}`}>
                    {step > i ? '✓' : i}
                  </div>
                  <span className="text-xs font-semibold text-[#432818] hidden sm:inline">
                    {i === 1 && 'Producto'}
                    {i === 2 && 'Porciones & Sabor'}
                    {i === 3 && 'Estilo & Colores'}
                    {i === 4 && 'Fecha & Contacto'}
                  </span>
                  {i < 4 && <div className="w-4 sm:w-8 h-0.5 bg-[#F2E6DA]"/>}
                </div>))}
            </div>

            {/* Live Price Pill */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#FBE8EC] px-3.5 py-1.5 rounded-full border border-[#F7D5D9]">
              <span className="text-[11px] font-bold text-[#8A645A]">Estimado:</span>
              <span className="text-xs font-bold text-[#C44E72]">
                {estimate.min} - {estimate.max} Bs.
              </span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {!orderSent ? (<form onSubmit={handleFinish}>
                
                {/* STEP 1: Producto & Ocasión */}
                {step === 1 && (<div className="space-y-8 animate-fadeIn">
                    <div>
                      <h3 className="font-fraunces text-2xl font-bold text-[#432818] mb-1">
                        Paso 1: ¿Qué quieres encargar?
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8A645A]">
                        Selecciona el formato principal para tu celebración.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {productOptions.map((opt) => (<button key={opt.name} type="button" onClick={() => setProductType(opt.name)} className={`p-4 rounded-2xl border text-left transition-all ${productType === opt.name
                        ? 'bg-[#FBE8EC] border-[#C44E72] shadow-sm'
                        : 'bg-[#FFF8F2] hover:bg-white border-[#F2E6DA]'}`}>
                          <div className="text-2xl mb-1">{opt.icon}</div>
                          <p className="font-fraunces text-base font-bold text-[#432818]">
                            {opt.name}
                          </p>
                          <p className="text-xs text-[#8A645A]">{opt.desc}</p>
                        </button>))}
                    </div>

                    <div>
                      <label className="block font-fraunces text-base font-bold text-[#432818] mb-2">
                        ¿Qué ocasión estás celebrando?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {occasionOptions.map((occ) => (<button key={occ} type="button" onClick={() => setOccasion(occ)} className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${occasion === occ
                        ? 'bg-[#C44E72] text-white shadow-xs'
                        : 'bg-[#FFF8F2] text-[#432818] border border-[#F2E6DA] hover:bg-[#FBE8EC]'}`}>
                            {occ}
                          </button>))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 bg-[#C44E72] hover:bg-[#AB3A5D] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all">
                        <span>Siguiente: Porciones y Sabores</span>
                        <ArrowRight className="w-4 h-4"/>
                      </button>
                    </div>
                  </div>)}

                {/* STEP 2: Porciones & Sabores */}
                {step === 2 && (<div className="space-y-8 animate-fadeIn">
                    <div>
                      <h3 className="font-fraunces text-2xl font-bold text-[#432818] mb-1">
                        Paso 2: Tamaño y Sabores
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8A645A]">
                        Define la cantidad de comensales y la combinación de bizcocho y relleno.
                      </p>
                    </div>

                    <div>
                      <label className="block font-fraunces text-base font-bold text-[#432818] mb-2">
                        Cantidad de porciones deseadas:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {servingOptions.map((srv) => (<button key={srv.value} type="button" onClick={() => setServings(srv.value)} className={`p-3.5 rounded-2xl border text-left transition-all ${servings === srv.value
                        ? 'bg-[#FBE8EC] border-[#C44E72] font-bold text-[#C44E72]'
                        : 'bg-[#FFF8F2] hover:bg-white border-[#F2E6DA] text-[#432818]'}`}>
                            <p className="text-xs font-bold">{srv.label}</p>
                          </button>))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-fraunces text-sm font-bold text-[#432818] mb-2">
                          Sabor de Bizcocho:
                        </label>
                        <select value={flavorBase} onChange={(e) => setFlavorBase(e.target.value)} className="w-full bg-[#FFF8F2] border border-[#F7D5D9] rounded-2xl p-3 text-xs sm:text-sm text-[#432818] focus:outline-none focus:ring-2 focus:ring-[#C44E72]/40">
                          <option>Vainilla Francesa Clásica</option>
                          <option>Chocolate Belga Húmedo</option>
                          <option>Red Velvet Terciopelo</option>
                          <option>Limón & Semillas de Amapola</option>
                          <option>Naranja Glaseada Especiada</option>
                          <option>Marmoleado Vainilla & Choco</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-fraunces text-sm font-bold text-[#432818] mb-2">
                          Relleno Principal:
                        </label>
                        <select value={flavorFilling} onChange={(e) => setFlavorFilling(e.target.value)} className="w-full bg-[#FFF8F2] border border-[#F7D5D9] rounded-2xl p-3 text-xs sm:text-sm text-[#432818] focus:outline-none focus:ring-2 focus:ring-[#C44E72]/40">
                          <option>Frambuesa Confitada Natural</option>
                          <option>Cajeta Suave / Dulce de Leche Artesanal</option>
                          <option>Ganache de Chocolate Amargo</option>
                          <option>Cream Cheese Suave & Sedoso</option>
                          <option>Crema Cookies & Cream Oreo</option>
                          <option>Fresas Maceradas con Vainilla</option>
                          <option>Crema Pastelera de Vainilla Real</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A645A] hover:text-[#432818] px-4 py-2">
                        <ArrowLeft className="w-4 h-4"/>
                        <span>Volver</span>
                      </button>

                      <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-2 bg-[#C44E72] hover:bg-[#AB3A5D] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all">
                        <span>Siguiente: Estilo y Colores</span>
                        <ArrowRight className="w-4 h-4"/>
                      </button>
                    </div>
                  </div>)}

                {/* STEP 3: Estilo & Paleta */}
                {step === 3 && (<div className="space-y-8 animate-fadeIn">
                    <div>
                      <h3 className="font-fraunces text-2xl font-bold text-[#432818] mb-1">
                        Paso 3: Estética y Paleta de Colores
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8A645A]">
                        Elige la línea visual que mejor combine con tu evento.
                      </p>
                    </div>

                    <div>
                      <label className="block font-fraunces text-base font-bold text-[#432818] mb-2">
                        Estilo decorativo:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {styleOptions.map((st) => (<button key={st} type="button" onClick={() => setStyleTheme(st)} className={`p-3.5 rounded-2xl border text-left transition-all ${styleTheme === st
                        ? 'bg-[#FBE8EC] border-[#C44E72] font-bold text-[#C44E72]'
                        : 'bg-[#FFF8F2] hover:bg-white border-[#F2E6DA] text-[#432818]'}`}>
                            <p className="text-xs">{st}</p>
                          </button>))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-fraunces text-base font-bold text-[#432818] mb-2">
                        Paleta cromática deseada:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {paletteOptions.map((pal) => (<button key={pal} type="button" onClick={() => setColorPalette(pal)} className={`p-3.5 rounded-2xl border text-left transition-all ${colorPalette === pal
                        ? 'bg-[#FBE8EC] border-[#C44E72] font-bold text-[#C44E72]'
                        : 'bg-[#FFF8F2] hover:bg-white border-[#F2E6DA] text-[#432818]'}`}>
                            <p className="text-xs">{pal}</p>
                          </button>))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A645A] hover:text-[#432818] px-4 py-2">
                        <ArrowLeft className="w-4 h-4"/>
                        <span>Volver</span>
                      </button>

                      <button type="button" onClick={() => setStep(4)} className="inline-flex items-center gap-2 bg-[#C44E72] hover:bg-[#AB3A5D] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all">
                        <span>Siguiente: Fecha y Datos</span>
                        <ArrowRight className="w-4 h-4"/>
                      </button>
                    </div>
                  </div>)}

                {/* STEP 4: Fecha, Dedicatoria & Contacto con Validación de Disponibilidad */}
                {step === 4 && (<div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-fraunces text-2xl font-bold text-[#432818] mb-1">
                        Paso 4: Fecha y Datos de Contacto
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8A645A]">
                        Verificamos en tiempo real la disponibilidad de la agenda del taller antes de enviar.
                      </p>
                    </div>

                    {/* Quick Date Selector for Septiembre 2026 */}
                    <div className="bg-[#FFF8F2] p-4.5 rounded-3xl border border-[#F2E6DA]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#C44E72]"/>
                          <span className="text-xs font-bold text-[#432818]">
                            Selección Rápida • Agenda Septiembre 2026:
                          </span>
                        </div>
                        <span className="text-[11px] text-[#8A645A] hidden sm:inline">
                          * Los días en rojo "Lleno" no se pueden seleccionar
                        </span>
                      </div>

                      {/* Mini day chips */}
                      <div className="grid grid-cols-6 sm:grid-cols-10 gap-1.5 max-h-36 overflow-y-auto pr-1">
                        {CALENDAR_DAYS_SEPTEMBER_2026.map((slot) => {
                    const isBusy = slot.status === 'busy';
                    const dayStr = slot.day < 10 ? `0${slot.day}` : `${slot.day}`;
                    const formattedDate = `2026-09-${dayStr}`;
                    const isSelected = eventDate === formattedDate;
                    return (<button key={slot.day} type="button" disabled={isBusy} aria-disabled={isBusy} title={isBusy ? `Día ${slot.day}: LLENO (sin cupos disponibles)` : `Día ${slot.day}: ${slot.badgeText}`} onClick={() => {
                            if (!isBusy) {
                                setEventDate(formattedDate);
                            }
                        }} className={`p-2 rounded-xl text-center border text-[11px] font-bold transition-all ${isBusy
                            ? 'bg-rose-50 text-rose-300 border-rose-200 cursor-not-allowed opacity-50 line-through'
                            : isSelected
                                ? 'bg-[#C44E72] text-white border-[#C44E72] shadow-sm scale-105'
                                : slot.status === 'few'
                                    ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100 cursor-pointer'
                                    : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100 cursor-pointer'}`}>
                              <div>{slot.day}</div>
                              <div className="text-[8px] font-normal leading-tight">
                                {isBusy ? 'Lleno' : slot.status === 'few' ? '2 cupos' : 'Libre'}
                              </div>
                            </button>);
                })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Date input with active validation */}
                      <div>
                        <label className="block text-xs font-bold text-[#432818] mb-1.5">
                          Fecha del evento / entrega: *
                        </label>
                        <input type="date" required value={eventDate} onChange={(e) => setEventDate(e.target.value)} className={`w-full rounded-2xl p-3 text-xs sm:text-sm text-[#432818] focus:outline-none transition-all ${!dateCheck.isAvailable && eventDate
                    ? 'bg-rose-50 border-2 border-rose-400 focus:ring-2 focus:ring-rose-300'
                    : 'bg-[#FFF8F2] border border-[#F7D5D9] focus:ring-2 focus:ring-[#C44E72]/40'}`}/>
                        <p className="text-[10px] text-[#8A645A] mt-1">
                          * Recuerda solicitar con 5 a 7 días de anticipación mínima.
                        </p>

                        {/* Status Message for the Date */}
                        {!dateCheck.isAvailable && eventDate ? (<div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start gap-2.5 mt-2.5 shadow-xs animate-fadeIn">
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5"/>
                            <div>
                              <p className="font-bold text-rose-800">Fecha no disponible</p>
                              <p className="text-rose-700 font-medium mt-0.5">{dateCheck.message}</p>
                              <p className="text-[11px] text-rose-600 mt-1 font-semibold">
                                🚫 No podemos agendar en días llenos. Por favor selecciona un día libre en verde o amarillo.
                              </p>
                            </div>
                          </div>) : dateCheck.isAvailable && eventDate ? (<div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 mt-2 shadow-xs animate-fadeIn">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0"/>
                            <span className="font-semibold">{dateCheck.message}</span>
                          </div>) : null}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#432818] mb-1.5">
                          Frase o dedicatoria escrita en el pastel:
                        </label>
                        <input type="text" placeholder="Ej: ¡Feliz Cumpleaños Cami! (o sin dedicatoria)" value={cakeMessage} onChange={(e) => setCakeMessage(e.target.value)} className="w-full bg-[#FFF8F2] border border-[#F7D5D9] rounded-2xl p-3 text-xs sm:text-sm text-[#432818] focus:outline-none focus:ring-2 focus:ring-[#C44E72]/40"/>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#432818] mb-1.5">
                          Tu nombre y apellido: *
                        </label>
                        <input type="text" required placeholder="Tu nombre completo" value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full bg-[#FFF8F2] border border-[#F7D5D9] rounded-2xl p-3 text-xs sm:text-sm text-[#432818] focus:outline-none focus:ring-2 focus:ring-[#C44E72]/40"/>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#432818] mb-1.5">
                          Número de WhatsApp:
                        </label>
                        <input type="tel" placeholder="Ej: +52 55 1234 5678" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className="w-full bg-[#FFF8F2] border border-[#F7D5D9] rounded-2xl p-3 text-xs sm:text-sm text-[#432818] focus:outline-none focus:ring-2 focus:ring-[#C44E72]/40"/>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#432818] mb-1.5">
                        Notas adicionales, temática específica o link a fotos de referencia:
                      </label>
                      <textarea rows={3} placeholder="Cuéntanos cualquier detalle especial, alergias o referencias de fotos de nuestra galería/Pinterest..." value={extraNotes} onChange={(e) => setExtraNotes(e.target.value)} className="w-full bg-[#FFF8F2] border border-[#F7D5D9] rounded-2xl p-3 text-xs sm:text-sm text-[#432818] focus:outline-none focus:ring-2 focus:ring-[#C44E72]/40"/>
                    </div>

                    {/* Resumen Card Before Finish */}
                    <div className="bg-[#FFF8F2] p-5 rounded-2xl border border-[#F2E6DA] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-[#8A645A] font-semibold">Resumen de tu diseño:</p>
                        <p className="font-fraunces text-base font-bold text-[#432818]">
                          {productType} • {servings} • {flavorBase}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-[#8A645A]">Rango estimado:</p>
                        <p className="font-fraunces text-xl font-bold text-[#C44E72]">
                          {estimate.min} a {estimate.max} Bs.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                      <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A645A] hover:text-[#432818] px-4 py-2">
                        <ArrowLeft className="w-4 h-4"/>
                        <span>Volver</span>
                      </button>

                      <div className="flex flex-col items-end">
                        <button type="submit" id="submit-quote-btn" disabled={!dateCheck.isAvailable || !eventDate || !clientName} className={`inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-base shadow-lg transition-all ${!dateCheck.isAvailable || !eventDate || !clientName
                    ? 'bg-[#F2E6DA] text-[#8A645A] cursor-not-allowed opacity-75 shadow-none'
                    : 'bg-[#C44E72] hover:bg-[#AB3A5D] text-white hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer'}`}>
                          <Sparkles className="w-5 h-5 text-[#F5C49D]"/>
                          <span>Quiero cotizar mi pedido</span>
                        </button>
                        {!dateCheck.isAvailable && eventDate && (<p className="text-[11px] font-bold text-rose-600 mt-2">
                            ⚠️ Selecciona una fecha con cupos disponibles para continuar
                          </p>)}
                      </div>
                    </div>
                  </div>)}

              </form>) : (
        /* ORDER READY - WHATSAPP INTEGRATION & CONFIRMATION */
        <div className="text-center py-8 max-w-xl mx-auto animate-fadeIn">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#FBE8EC] border-2 border-[#F7D5D9] flex items-center justify-center mb-6">
                  <CherryDoodle className="w-12 h-12"/>
                </div>

                <span className="badge-artesanal bg-[#C44E72] text-white mb-3">
                  ¡Cotización estructurada lista!
                </span>

                <h3 className="font-fraunces text-3xl font-bold text-[#432818] mb-3">
                  ¡Tu dulce idea está lista para enviarse!
                </h3>

                <p className="text-sm text-[#432818]/80 leading-relaxed mb-6">
                  Hemos organizado todas tus especificaciones en un mensaje claro y ordenado.
                  Haz clic a continuación para enviarlo directamente a nuestro WhatsApp oficial 
                  y confirmar la disponibilidad de tu fecha.
                </p>

                {/* Estimate Card */}
                <div className="bg-[#FFF8F2] p-6 rounded-3xl border border-[#F7D5D9] text-left mb-8 shadow-xs">
                  <div className="flex justify-between items-center border-b border-[#F2E6DA] pb-3 mb-3">
                    <span className="text-xs font-bold text-[#8A645A]">Producto:</span>
                    <span className="text-xs font-bold text-[#432818]">{productType}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#F2E6DA] pb-3 mb-3">
                    <span className="text-xs font-bold text-[#8A645A]">Porciones:</span>
                    <span className="text-xs font-bold text-[#432818]">{servings}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#F2E6DA] pb-3 mb-3">
                    <span className="text-xs font-bold text-[#8A645A]">Sabores:</span>
                    <span className="text-xs font-bold text-[#432818]">{flavorBase} con {flavorFilling}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#F2E6DA] pb-3 mb-3">
                    <span className="text-xs font-bold text-[#8A645A]">Fecha del evento:</span>
                    <span className="text-xs font-bold text-[#C44E72]">{eventDate || 'Por coordinar'}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-xs font-bold text-[#8A645A]">Presupuesto preliminar:</span>
                    <span className="font-fraunces text-lg font-bold text-[#C44E72]">{estimate.min} a {estimate.max} Bs.</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href={`https://wa.me/59178889900?text=${generateWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all">
                    <MessageCircle className="w-5 h-5"/>
                    <span>Enviar cotización por WhatsApp</span>
                  </a>

                  <button type="button" onClick={handleCopySummary} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FBE8EC] text-[#432818] border border-[#F7D5D9] px-6 py-4 rounded-full font-bold text-sm shadow-xs transition-all">
                    {copied ? <Check className="w-4 h-4 text-[#C44E72]"/> : <Copy className="w-4 h-4 text-[#8A645A]"/>}
                    <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar texto'}</span>
                  </button>
                </div>

                <div className="mt-6">
                  <button type="button" onClick={() => {
                setOrderSent(false);
                setStep(1);
            }} className="text-xs text-[#8A645A] hover:text-[#C44E72] font-semibold underline">
                    Modificar especificaciones o armar otro pedido
                  </button>
                </div>
              </div>)}
          </div>

        </div>

      </div>
    </section>);
};
