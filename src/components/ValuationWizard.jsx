import React, { useState } from 'react';
import { Calculator, ArrowRight, Send } from 'lucide-react';
import { ZONES_MALAGA } from '../data/properties';

// Market price estimates per m² for Málaga zones used behind the scenes
const ZONE_M2_PRICES = {
  "La Malagueta - Paseo Marítimo": 4200,
  "El Limonar - Mayorazgo": 3600,
  "Centro Histórico": 3400,
  "Pedregalejo - El Candado": 3800,
  "Cerrado de Calderón": 3100,
  "Teatinos - Universidad": 2900,
  "Carretera de Cádiz - Pacífico": 2600,
};

export default function ValuationWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: 'piso',
    zone: 'Teatinos - Universidad',
    area: 90,
    ownerName: '',
    phone: '',
  });

  const [valuationResult, setValuationResult] = useState(null);

  const calculateEstimate = () => {
    const currentM2Price = ZONE_M2_PRICES[formData.zone] || 2900;
    const estimatedValue = Math.round(formData.area * currentM2Price);
    const minVal = Math.round(estimatedValue * 0.93);
    const maxVal = Math.round(estimatedValue * 1.07);

    setValuationResult({
      minVal,
      maxVal,
    });
    setStep(3);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.ownerName}! Un asesor de Casaoro te contactará al ${formData.phone} para enviarte el informe oficial de valoración.`);
  };

  return (
    <section id="tasador" className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-2">
            Servicio de Valoración
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Valora tu Vivienda en Málaga <span className="red-gradient-text">Gratis</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
            Estimación rápida basada en precios reales de venta en tu zona.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 max-w-2xl mx-auto">
          
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-serif text-xl font-bold text-slate-900 text-center">
                Paso 1: Tipo y Ubicación
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Tipo de Inmueble</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-3 text-xs focus:border-red-500 focus:outline-none font-semibold"
                  >
                    <option value="piso">Piso / Apartamento</option>
                    <option value="atico">Ático con Terraza</option>
                    <option value="chalet">Chalet / Villa</option>
                    <option value="local">Local / Oficina</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Zona en Málaga</label>
                  <select
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-3 text-xs focus:border-red-500 focus:outline-none font-semibold"
                  >
                    {ZONES_MALAGA.filter(z => z !== 'Todas las zonas').map(z => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full red-gradient-bg text-white font-bold py-3.5 rounded-xl shadow-casaoro-glow transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-serif text-xl font-bold text-slate-900 text-center">
                Paso 2: Superficie de la Vivienda
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Superficie útil construida (m²)</label>
                <input
                  type="number"
                  min="20"
                  max="800"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-3 text-xs focus:border-red-500 focus:outline-none font-semibold text-center text-lg"
                  placeholder="Ej. 90"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl text-xs cursor-pointer"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={calculateEstimate}
                  className="w-2/3 red-gradient-bg text-white font-bold py-3.5 rounded-xl shadow-casaoro-glow text-xs flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Obtener Valoración</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && valuationResult && (
            <div className="space-y-6 text-center">
              
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200 space-y-2">
                <span className="text-xs text-red-700 font-bold uppercase tracking-wider block">
                  Valor Estimado de Mercado en Málaga
                </span>
                
                <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                  {valuationResult.minVal.toLocaleString()} € - {valuationResult.maxVal.toLocaleString()} €
                </div>
              </div>

              {/* Contact Lead Form */}
              <form onSubmit={handleSubmitContact} className="space-y-3 text-left">
                <h4 className="font-serif text-sm font-bold text-slate-900 text-center">
                  Recibe la Valoración Oficial en tu Email o Teléfono
                </h4>

                <div>
                  <label className="block text-xs text-slate-700 font-bold mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-2.5 text-xs font-semibold"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-700 font-bold mb-1">Teléfono de Contacto</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-2.5 text-xs font-semibold"
                    placeholder="600 000 000"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full red-gradient-bg text-white font-bold py-3.5 rounded-xl shadow-casaoro-glow text-xs flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Estudio Presencial Gratuito</span>
                </button>
              </form>

              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:underline cursor-pointer"
              >
                ← Volver a calcular
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
