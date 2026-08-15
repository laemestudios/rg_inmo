import React from 'react';
import { Home, Camera, Scale, FileCheck } from 'lucide-react';

export default function ServicesMLS() {
  const services = [
    {
      icon: Home,
      title: "Gestión de Compra y Venta",
      description: "Asesoramiento completo para vender o comprar su inmueble en Málaga al mejor precio de mercado."
    },
    {
      icon: FileCheck,
      title: "Alquileres de Larga Temporada",
      description: "Selección rigurosa de inquilinos y gestión documental transparente para propietarios."
    },
    {
      icon: Camera,
      title: "Publicidad y Presentación",
      description: "Fotografías HD y descripción detallada para mostrar su propiedad con la máxima elegancia."
    },
    {
      icon: Scale,
      title: "Asesoramiento Documental y Legal",
      description: "Revisión de escrituras, contratos e impuestos en nuestra sede física de Calle Esperanto, 15."
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
            Servicios Inmobiliarios
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            ¿Por qué confiar en Casaoro?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((serv, idx) => {
            const Icon = serv.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-red-500/40 transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                  {serv.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {serv.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
