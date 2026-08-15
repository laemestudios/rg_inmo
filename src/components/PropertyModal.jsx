import React, { useState } from 'react';
import { X, BedDouble, Bath, Square, Car, Zap, MapPin, Phone, MessageSquare, ShieldCheck, Calculator, CheckCircle2 } from 'lucide-react';

export default function PropertyModal({ property, onClose, onMortgageClick }) {
  if (!property) return null;

  const [activeImage, setActiveImage] = useState(property.image);

  const whatsappMessage = `Hola Casaoro Inmobiliaria, estoy interesado en la propiedad Ref: ${property.ref} - ${property.title} (${property.price.toLocaleString()}€). Quisiera solicitar una visita.`;
  const whatsappUrl = `https://wa.me/34952301111?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container in Crisp White */}
      <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-all hover:scale-110 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header / Title Bar */}
        <div className="p-6 sm:p-8 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-red-50 text-red-700 border border-red-200">
              Ref: {property.ref}
            </span>
            <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-red-600 text-white">
              {property.badge}
            </span>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Certificado Energético {property.energyRating}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {property.title}
          </h2>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-slate-600 text-sm flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-red-600" />
              {property.address} ({property.zone})
            </p>

            <div className="text-right">
              <span className="text-xs text-slate-400 block font-semibold">Precio de Salida</span>
              <span className="font-serif text-3xl font-bold text-red-600">
                {property.price.toLocaleString()} € {property.transaction === 'alquilar' ? '/ mes' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Image & Gallery thumbnails */}
          <div>
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-3 border border-slate-200">
              <img
                src={activeImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {property.gallery && property.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImage === img ? 'border-red-600 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Vista ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <div className="p-2">
              <BedDouble className="w-5 h-5 text-red-600 mx-auto mb-1" />
              <span className="block text-sm font-bold text-slate-900">{property.bedrooms} Dormitorios</span>
              <span className="text-[11px] text-slate-500">Habitaciones dobles</span>
            </div>
            <div className="p-2">
              <Bath className="w-5 h-5 text-red-600 mx-auto mb-1" />
              <span className="block text-sm font-bold text-slate-900">{property.bathrooms} Baños</span>
              <span className="text-[11px] text-slate-500 font-medium">Equipados</span>
            </div>
            <div className="p-2">
              <Square className="w-5 h-5 text-red-600 mx-auto mb-1" />
              <span className="block text-sm font-bold text-slate-900">{property.area} m²</span>
              <span className="text-[11px] text-slate-500 font-medium">Superficie construida</span>
            </div>
            <div className="p-2">
              <Car className="w-5 h-5 text-red-600 mx-auto mb-1" />
              <span className="block text-sm font-bold text-slate-900">{property.garage ? 'Sí incluye' : 'No'}</span>
              <span className="text-[11px] text-slate-500 font-medium">Plaza de garaje</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
              Descripción de la Propiedad
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Highlight Features */}
          {property.features && (
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
                Características Destacadas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-slate-800 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Action Bar */}
          <div className="bg-red-50/60 p-5 rounded-2xl border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                Gestionado en Exclusiva por Casaoro Málaga
              </p>
              <p className="text-xs text-slate-600">
                Atención directa en C/ Esperanto 15 o por teléfono
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="tel:952301111"
                className="flex-1 sm:flex-none bg-white hover:bg-slate-100 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-xs border border-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-red-600" />
                952 30 11 11
              </a>

              {property.transaction === 'comprar' && (
                <button
                  onClick={() => {
                    onClose();
                    if (onMortgageClick) onMortgageClick(property.price);
                  }}
                  className="w-full sm:w-auto red-gradient-bg text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-casaoro-glow transition-all cursor-pointer uppercase tracking-wider"
                >
                  <Calculator className="w-4 h-4" />
                  Calcular Hipoteca
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
