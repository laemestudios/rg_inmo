import React, { useState } from 'react';
import { Search, Building, MapPin, Euro } from 'lucide-react';
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
    <section className="relative py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-100">
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
        
        {/* Subtitle Pill in Casaoro Red */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-widest mb-6">
          <Building className="w-3.5 h-3.5 text-red-600" />
          Casaoro Inmobiliaria Málaga
        </div>

        {/* Clean Black/Dark Headline with Red Accent */}
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
          Encuentra tu Inmueble en <span className="red-gradient-text">Málaga</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
          Selección de viviendas y propiedades en La Malagueta, El Limonar, Teatinos y Centro Histórico.
        </p>

        {/* PROMINENT WHITE & RED SEARCHER */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-8 shadow-2xl text-slate-800 border border-red-100">
          
          {/* Tabs: Comprar vs Alquilar */}
          <div className="flex items-center justify-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <button
              type="button"
              onClick={() => handleTransactionChange('comprar')}
              className={`px-8 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                transactionTab === 'comprar'
                  ? 'red-gradient-bg text-white shadow-casaoro-glow scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Comprar
            </button>
            <button
              type="button"
              onClick={() => handleTransactionChange('alquilar')}
              className={`px-8 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                transactionTab === 'alquilar'
                  ? 'red-gradient-bg text-white shadow-casaoro-glow scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Alquilar
            </button>
          </div>

          {/* Search Inputs Grid */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* 1. Tipo */}
            <div className="sm:col-span-3 text-left">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-red-600" /> Tipo
              </label>
              <select
                name="type"
                value={filters.type || 'todos'}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-red-500"
              >
                <option value="todos">Todos los tipos</option>
                <option value="piso">Piso</option>
                <option value="atico">Ático</option>
                <option value="chalet">Chalet / Villa</option>
              </select>
            </div>

            {/* 2. Ubicación / Zona */}
            <div className="sm:col-span-4 text-left">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-600" /> Ubicación Málaga
              </label>
              <select
                name="zone"
                value={filters.zone || 'Todas las zonas'}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-red-500"
              >
                {ZONES_MALAGA.map(zone => (
                  <option key={zone} value={zone}>{zone}</option>
                ))}
              </select>
            </div>

            {/* 3. Precio Máximo */}
            <div className="sm:col-span-3 text-left">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Euro className="w-3.5 h-3.5 text-red-600" /> Precio Máximo
              </label>
              <select
                name="maxPrice"
                value={filters.maxPrice || ''}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-red-500"
              >
                <option value="">Sin límite</option>
                <option value="300000">Hasta 300.000 €</option>
                <option value="500000">Hasta 500.000 €</option>
                <option value="750000">Hasta 750.000 €</option>
                <option value="1000000">Hasta 1.000.000 €</option>
              </select>
            </div>

            {/* 4. Action Button in Red */}
            <div className="sm:col-span-2 pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full red-gradient-bg text-white font-bold py-3 px-4 rounded-xl shadow-casaoro-glow hover:shadow-xl transition-all flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider"
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
