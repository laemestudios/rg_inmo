import React, { useState } from 'react';
import { Sparkles, Smartphone, TrendingUp, Award, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, UserCheck } from 'lucide-react';

export default function PitchBanner() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-navy-950 text-white border-b border-gold-500/30 sticky top-0 z-50 shadow-2xl backdrop-blur-md bg-opacity-95">
      {/* Top Header Strip */}
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-bold border border-gold-500/40 animate-pulse text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            MODO PRESENTACIÓN COMERCIAL
          </span>
          <span className="hidden sm:inline text-slate-300 font-medium">
            Resumen de Beneficios de Negocio para el Propietario de Casaoro
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 bg-navy-800 hover:bg-navy-700 text-gold-300 px-3 py-1 rounded-lg border border-navy-700 transition-all font-semibold text-[11px]"
        >
          <span>{isOpen ? 'Ocultar Comparativa' : 'Ver Beneficios Clave Antes vs Ahora'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expandable Comparison Panel */}
      {isOpen && (
        <div className="bg-navy-900/95 border-t border-navy-800 px-4 py-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Benefit 1: Mobile Experience */}
              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-gold-400" /> Navegación Móvil
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800">
                    +Fácil Móvil
                  </span>
                </div>
                <div className="space-y-2 text-[11px]">
                  <p className="text-red-300 flex items-start gap-1.5 leading-snug">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Web Actual:</strong> El cliente tiene que ampliar con los dedos y la pantalla se desencaja.</span>
                  </p>
                  <p className="text-emerald-300 flex items-start gap-1.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Nueva Web:</strong> 100% cómoda y perfecta de usar desde cualquier móvil.</span>
                  </p>
                </div>
              </div>

              {/* Benefit 2: WhatsApp & Direct Contact */}
              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-gold-400" /> Contacto Directo
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800">
                    WhatsApp 1-Clic
                  </span>
                </div>
                <div className="space-y-2 text-[11px]">
                  <p className="text-red-300 flex items-start gap-1.5 leading-snug">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Web Actual:</strong> El comprador tiene que llamar por teléfono o rellenar un mail lento.</span>
                  </p>
                  <p className="text-emerald-300 flex items-start gap-1.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Nueva Web:</strong> El cliente envía un WhatsApp con la propiedad elegida en 1 clic.</span>
                  </p>
                </div>
              </div>

              {/* Benefit 3: Captación de Vendedores */}
              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-gold-400" /> Captar Vendedores
                  </span>
                  <span className="text-[10px] font-bold text-gold-300 bg-gold-950/90 px-2 py-0.5 rounded border border-gold-800">
                    Tasador Gratis
                  </span>
                </div>
                <div className="space-y-2 text-[11px]">
                  <p className="text-red-300 flex items-start gap-1.5 leading-snug">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Web Actual:</strong> No ofrece ninguna razón para que un propietario deje sus datos.</span>
                  </p>
                  <p className="text-emerald-300 flex items-start gap-1.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Nueva Web:</strong> Herramienta para tasar la vivienda que capta vendedores automáticamente.</span>
                  </p>
                </div>
              </div>

              {/* Benefit 4: Imagen de Marca en Málaga */}
              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-gold-400" /> Imagen Inmobiliaria
                  </span>
                  <span className="text-[10px] font-bold text-sky-300 bg-sky-950/90 px-2 py-0.5 rounded border border-sky-800">
                    Nivel Lujo
                  </span>
                </div>
                <div className="space-y-2 text-[11px]">
                  <p className="text-red-300 flex items-start gap-1.5 leading-snug">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Web Actual:</strong> Aspecto de plantilla desactualizada de hace más de 10 años.</span>
                  </p>
                  <p className="text-emerald-300 flex items-start gap-1.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Nueva Web:</strong> Imagen de alta gama para competir con las mejores agencias de Málaga.</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
