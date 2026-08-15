import React, { useState, useMemo } from 'react';
import { PROPERTIES_DATA } from '../data/properties';
import PropertyModal from './PropertyModal';
import { BedDouble, Bath, Square, MapPin, Eye, ArrowUpDown, LayoutGrid, Map as MapIcon } from 'lucide-react';

export default function PropertyCatalog({ filters, setFilters, onSelectMortgagePrice }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [sortBy, setSortBy] = useState('relevant');
  const [viewMode, setViewMode] = useState('grid');

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter(prop => {
      if (filters.transaction && prop.transaction !== filters.transaction) return false;
      if (filters.type && filters.type !== 'todos' && prop.type !== filters.type) return false;
      if (filters.zone && filters.zone !== 'Todas las zonas' && prop.zone !== filters.zone) return false;
      if (filters.maxPrice && Number(filters.maxPrice) > 0 && prop.price > Number(filters.maxPrice)) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [filters, sortBy]);

  return (
    <section id="catalogo" className="py-16 bg-sand-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-1 block">
              Catálogo Destacado
            </span>
            <h2 className="font-serif text-3xl font-bold text-navy-950">
              Inmuebles en Málaga
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent focus:outline-none text-slate-700 cursor-pointer"
              >
                <option value="relevant">Más Relevantes</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
              </select>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-1 flex items-center">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'grid' ? 'bg-navy-950 text-white' : 'text-slate-500'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'map' ? 'bg-navy-950 text-white' : 'text-slate-500'
                }`}
              >
                <MapIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Map view mock if active */}
        {viewMode === 'map' && (
          <div className="bg-navy-900 rounded-2xl p-6 border border-navy-800 text-white mb-10">
            <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
              <MapIcon className="w-5 h-5 text-gold-400" /> Mapa de Málaga Capital
            </h3>
            <div className="relative w-full h-80 bg-navy-950 rounded-xl overflow-hidden flex items-center justify-center border border-navy-800">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80"
                alt="Mapa de Málaga"
                className="w-full h-full object-cover opacity-50"
              />
              {filteredProperties.map((prop, idx) => (
                <div
                  key={prop.id}
                  style={{ top: `${30 + (idx * 12)}%`, left: `${25 + (idx * 14)}%` }}
                  className="absolute cursor-pointer bg-gold-500 text-navy-950 font-bold text-xs px-2.5 py-1 rounded-full shadow-lg border border-white hover:scale-110 transition-transform"
                  onClick={() => setSelectedProperty(prop)}
                >
                  {prop.price.toLocaleString()} €
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {prop.badge}
                </span>
                <span className="absolute bottom-3 right-3 text-sm font-serif font-bold text-white bg-navy-950/90 px-3 py-1 rounded-lg border border-white/20">
                  {prop.price.toLocaleString()} €
                </span>
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold text-gold-600 flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5" /> {prop.zone}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-navy-950 line-clamp-1 group-hover:text-gold-600 transition-colors">
                    {prop.title}
                  </h3>
                </div>

                {/* Specs */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1 font-medium">
                    <BedDouble className="w-4 h-4 text-slate-400" /> {prop.bedrooms} hab
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Bath className="w-4 h-4 text-slate-400" /> {prop.bathrooms} baños
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Square className="w-4 h-4 text-slate-400" /> {prop.area} m²
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedProperty(prop)}
                  className="w-full bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Inmueble</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onMortgageClick={(price) => {
            if (onSelectMortgagePrice) onSelectMortgagePrice(price);
          }}
        />
      )}
    </section>
  );
}
