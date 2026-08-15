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
    <section id="servicios" className="py-16 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
            Servicios Inmobiliarios
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
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
                className="bg-navy-950/80 p-6 rounded-2xl border border-navy-800 hover:border-gold-500/40 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {serv.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
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
