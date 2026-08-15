import React, { useState } from 'react';
import { Calculator, ArrowRight, Send, Sparkles } from 'lucide-react';
import { ZONES_MALAGA } from '../data/properties';

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
    let basePricePerM2 = 2900;
    if (formData.zone.includes('Limonar')) basePricePerM2 = 3600;
    if (formData.zone.includes('Malagueta')) basePricePerM2 = 4200;
    if (formData.zone.includes('Centro')) basePricePerM2 = 3400;

    const estimatedValue = Math.round(formData.area * basePricePerM2);
    const minVal = Math.round(estimatedValue * 0.94);
    const maxVal = Math.round(estimatedValue * 1.06);

    setValuationResult({ minVal, maxVal });
    setStep(3);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.ownerName}! Un agente de Casaoro te contactará al ${formData.phone} para la valoración presencial en Málaga.`);
  };

  return (
    <section id="tasador" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
            Servicio de Valoración
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Valora tu Vivienda en Málaga <span className="gold-gradient-text">Gratis</span>
          </h2>
          <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
            Estimación rápida basada en precios reales de venta en tu zona.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 max-w-2xl mx-auto">
          
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
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-3 text-xs focus:border-gold-500 focus:outline-none font-semibold"
                  >
                    <option value="piso">Piso</option>
                    <option value="atico">Ático</option>
                    <option value="chalet">Chalet / Villa</option>
                    <option value="local">Local / Oficina</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Zona en Málaga</label>
                  <select
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-3 text-xs focus:border-gold-500 focus:outline-none font-semibold"
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
                className="w-full gold-gradient-bg text-navy-950 font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-serif text-xl font-bold text-slate-900 text-center">
                Paso 2: Superficie en m²
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Superficie útil aproximada (m²)</label>
                <input
                  type="number"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-3 text-xs focus:border-gold-500 focus:outline-none font-semibold"
                  placeholder="Ej. 90"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl text-xs"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={calculateEstimate}
                  className="w-2/3 gold-gradient-bg text-navy-950 font-bold py-3.5 rounded-xl shadow-md text-xs flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Obtener Valoración</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && valuationResult && (
            <div className="space-y-6 text-center">
              <div className="bg-sand-100 p-6 rounded-2xl border border-gold-300">
                <span className="text-xs text-gold-700 font-bold uppercase tracking-wider block mb-1">
                  Valor Estimado de Mercado
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                  {valuationResult.minVal.toLocaleString()} € - {valuationResult.maxVal.toLocaleString()} €
                </div>
              </div>

              <form onSubmit={handleSubmitContact} className="space-y-3 text-left">
                <div>
                  <label className="block text-xs text-slate-700 font-bold mb-1">Tu Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-2.5 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-700 font-bold mb-1">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl p-2.5 text-xs font-semibold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-navy-950 font-bold py-3.5 rounded-xl shadow-md text-xs flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Estudio Presencial Gratuito</span>
                </button>
              </form>

              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:underline"
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
