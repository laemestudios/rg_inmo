import React, { useState } from 'react';
import { Search, Building, MapPin, Euro, ArrowRight } from 'lucide-react';
import { ZONES_MALAGA } from '../data/properties';

export default function Hero({ filters, setFilters, onSearch }) {
  const [transactionTab, setTransactionTab] = useState('comprar');

  const handleTransactionChange = (type) => {
    setTransactionTab(type);
    setFilters(prev => ({ ...prev, transaction: type }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch();
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden bg-navy-950">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Inmuebles en Málaga"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
        
        {/* Minimalist Subtitle Pill */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-6">
          Inmobiliaria en Málaga Capital
        </div>

        {/* Clean Strong Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          Encuentra tu próximo hogar en <span className="gold-gradient-text">Málaga</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
          Casas, pisos y áticos seleccionados con la máxima transparencia y garantía inmobiliaria.
        </p>

        {/* Compact Clean Search Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-3 sm:p-4 shadow-2xl text-slate-800">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-3">
            <button
              type="button"
              onClick={() => handleTransactionChange('comprar')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                transactionTab === 'comprar'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Comprar
            </button>
            <button
              type="button"
              onClick={() => handleTransactionChange('alquilar')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                transactionTab === 'alquilar'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Alquilar
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Tipo */}
            <div className="sm:col-span-3 text-left">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Tipo
              </label>
              <select
                name="type"
                value={filters.type || 'todos'}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-gold-500"
              >
                <option value="todos">Todos los tipos</option>
                <option value="piso">Piso</option>
                <option value="atico">Ático</option>
                <option value="chalet">Chalet / Villa</option>
              </select>
            </div>

            {/* Zona */}
            <div className="sm:col-span-4 text-left">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Ubicación
              </label>
              <select
                name="zone"
                value={filters.zone || 'Todas las zonas'}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-gold-500"
              >
                {ZONES_MALAGA.map(zone => (
                  <option key={zone} value={zone}>{zone}</option>
                ))}
              </select>
            </div>

            {/* Precio */}
            <div className="sm:col-span-3 text-left">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Precio Máximo
              </label>
              <select
                name="maxPrice"
                value={filters.maxPrice || ''}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-gold-500"
              >
                <option value="">Sin límite</option>
                <option value="300000">300.000 €</option>
                <option value="500000">500.000 €</option>
                <option value="750000">750.000 €</option>
                <option value="1000000">1.000.000 €</option>
              </select>
            </div>

            {/* Submit button */}
            <div className="sm:col-span-2 pt-3 sm:pt-4">
              <button
                type="submit"
                className="w-full gold-gradient-bg text-navy-950 font-bold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 text-xs"
              >
                <Search className="w-4 h-4" />
                <span>Buscar</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
