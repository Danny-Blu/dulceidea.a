import { useState } from 'react';
import { AVAILABILITY_CARDS, CALENDAR_DAYS_SEPTEMBER_2026, BUSY_DAYS_SEPTEMBER_2026 } from '../data/mockData';
import { Clock, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { CherryDoodle } from './Doodles';
export const AvailabilitySection = ({ onSelectDate, onGoToQuote }) => {
    // Calendar month state
    const [currentMonth] = useState('Septiembre 2026');
    // Primer día disponible por defecto (por ej. día 4 de septiembre)
    const [selectedDay, setSelectedDay] = useState(4);
    const getDayStatusClasses = (status, isSelected) => {
        if (status === 'busy') {
            return 'bg-rose-50 text-rose-400 border-rose-200 cursor-not-allowed opacity-60 line-through';
        }
        if (status === 'few') {
            return `bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100 cursor-pointer ${isSelected ? 'ring-2 ring-[#C44E72] shadow-md scale-105 bg-amber-100 font-extrabold' : ''}`;
        }
        return `bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100 cursor-pointer ${isSelected ? 'ring-2 ring-[#C44E72] shadow-md scale-105 bg-emerald-100 font-extrabold' : ''}`;
    };
    const handleSelectDay = (day) => {
        if (BUSY_DAYS_SEPTEMBER_2026.includes(day)) {
            return; // No permite seleccionar días llenos
        }
        setSelectedDay(day);
        const dayStr = day < 10 ? `0${day}` : `${day}`;
        if (onSelectDate) {
            onSelectDate(`2026-09-${dayStr}`);
        }
    };
    const handleReserveDay = () => {
        if (BUSY_DAYS_SEPTEMBER_2026.includes(selectedDay))
            return;
        const dayStr = selectedDay < 10 ? `0${selectedDay}` : `${selectedDay}`;
        const dateStr = `2026-09-${dayStr}`;
        if (onSelectDate) {
            onSelectDate(dateStr);
        }
        onGoToQuote?.();
    };
    const selectedSlot = CALENDAR_DAYS_SEPTEMBER_2026.find((s) => s.day === selectedDay);
    return (<section id="disponibilidad" className="py-20 lg:py-28 bg-[#FBE8EC]/30 relative border-t border-[#F7D5D9]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl text-[#C44E72] font-bold">
              Cupos limitados por semana
            </span>
            <CherryDoodle className="w-5 h-5"/>
          </div>

          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#432818] tracking-tight mb-4">
            Disponibilidad & Tiempos de Anticipación
          </h2>

          <p className="text-base sm:text-lg text-[#432818]/80 font-medium">
            Para garantizar que cada pastel sea una creación fresca y prolija, limitamos la 
            cantidad de pedidos que horneamos cada semana en nuestro taller.
          </p>
        </div>

        {/* 4 Availability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AVAILABILITY_CARDS.map((card) => (<div key={card.type} className="bg-white rounded-3xl p-6 border border-[#F7D5D9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${card.statusColor}`}>
                    {card.badge}
                  </span>
                  <Clock className="w-4 h-4 text-[#8A645A]"/>
                </div>

                <h3 className="font-fraunces text-lg font-bold text-[#432818] mb-1">
                  {card.type}
                </h3>

                <div className="text-xs font-bold text-[#C44E72] mb-3 bg-[#FFF8F2] p-2 rounded-xl border border-[#F2E6DA]">
                  ⏳ {card.leadTime}
                </div>

                <p className="text-xs text-[#432818]/80 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F2E6DA]">
                <a href="#cotizador" className="text-xs font-bold text-[#C44E72] hover:text-[#AB3A5D] inline-flex items-center gap-1">
                  <span>Verificar fecha</span>
                  <span>→</span>
                </a>
              </div>
            </div>))}
        </div>

        {/* Visual Interactive Calendar Widget */}
        <div className="bg-white rounded-[36px] p-6 sm:p-10 border border-[#F7D5D9] shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F2E6DA] mb-6">
            <div>
              <span className="badge-artesanal bg-[#FBE8EC] text-[#C44E72] mb-1">
                Agenda del Taller
              </span>
              <h4 className="font-fraunces text-2xl font-bold text-[#432818]">
                Semáforo de Cupos en Vivo
              </h4>
            </div>

            {/* Month selector indicator */}
            <div className="flex items-center gap-3">
              <span className="font-fraunces text-base font-bold text-[#432818] bg-[#FFF8F2] px-4 py-1.5 rounded-full border border-[#F2E6DA]">
                {currentMonth}
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold mb-6">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500"/>
              <span className="text-emerald-800">Cupos Disponibles</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500"/>
              <span className="text-amber-800">Últimos 2 Cupos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400"/>
              <span className="text-rose-700">Taller Lleno / Producción Cerrada (No disponible)</span>
            </div>
          </div>

          {/* Calendar Day Grid */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3 text-center mb-6">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => (<div key={d} className="text-xs font-bold text-[#8A645A] py-1">
                {d}
              </div>))}

            {CALENDAR_DAYS_SEPTEMBER_2026.map((item) => {
            const isSelected = selectedDay === item.day;
            const isBusy = item.status === 'busy';
            return (<button key={item.day} type="button" id={`calendar-day-${item.day}`} disabled={isBusy} aria-disabled={isBusy} title={isBusy ? `Día ${item.day}: Lleno (sin cupos)` : `Día ${item.day}: ${item.badgeText}`} onClick={() => handleSelectDay(item.day)} className={`p-2 sm:p-3 rounded-2xl border text-xs font-bold transition-all relative ${getDayStatusClasses(item.status, isSelected)}`}>
                  <span className={isBusy ? 'text-rose-400' : ''}>{item.day}</span>
                  {item.status === 'few' && (<span className="block text-[9px] text-amber-700 font-normal">2 cupos</span>)}
                  {item.status === 'busy' && (<span className="block text-[9px] text-rose-500 font-semibold no-underline">
                      Lleno
                    </span>)}
                </button>);
        })}
          </div>

          {/* Status of Selected Day */}
          <div className="bg-[#FFF8F2] p-5 rounded-2xl border border-[#F2E6DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C44E72] text-white flex items-center justify-center font-bold text-sm">
                {selectedDay}
              </div>
              <div>
                <p className="text-xs font-bold text-[#432818]">
                  Fecha seleccionada: {selectedDay} de Septiembre
                </p>
                {selectedSlot?.status === 'few' ? (<p className="text-[11px] text-amber-700 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600"/>
                    Últimos 2 cupos disponibles para esta fecha
                  </p>) : (<p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5"/>
                    Cupo disponible para hornear tu pedido
                  </p>)}
              </div>
            </div>

            <button type="button" onClick={handleReserveDay} className="inline-flex items-center gap-2 bg-[#C44E72] hover:bg-[#AB3A5D] text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-xs transition-all cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C49D]"/>
              <span>Apartar para este día</span>
            </button>
          </div>

        </div>

      </div>
    </section>);
};
