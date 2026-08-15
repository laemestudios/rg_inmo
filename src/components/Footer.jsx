import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: High-Contrast Light Logo for Dark Footer */}
          <div className="space-y-4">
            <img
              src="./images/logo_light.png"
              alt="Casaoro Inmobiliaria Málaga"
              className="h-10 w-auto object-contain drop-shadow-md"
            />

            <p className="text-slate-400 text-xs leading-relaxed">
              Agencia Inmobiliaria en Málaga Capital (C/ Esperanto, 15). Intermediación rigurosa en compra, venta y arrendamientos.
            </p>

            <div className="text-xs text-gold-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Asesoría Inmobiliaria Profesional
            </div>
          </div>

          {/* Col 2: Zonas Destacadas */}
          <div>
            <h4 className="font-serif text-xs font-bold text-white mb-4 uppercase tracking-wider">
              Zonas en Málaga
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#catalogo" className="hover:text-gold-400 transition-colors">Pisos en Centro Histórico</a></li>
              <li><a href="#catalogo" className="hover:text-gold-400 transition-colors">Áticos en La Malagueta</a></li>
              <li><a href="#catalogo" className="hover:text-gold-400 transition-colors">Casas en El Limonar</a></li>
              <li><a href="#catalogo" className="hover:text-gold-400 transition-colors">Viviendas en Teatinos</a></li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="font-serif text-xs font-bold text-white mb-4 uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#tasador" className="hover:text-gold-400 transition-colors">Valoración de Inmuebles</a></li>
              <li><a href="#hipoteca" className="hover:text-gold-400 transition-colors">Calculadora Hipotecaria</a></li>
              <li><a href="#servicios" className="hover:text-gold-400 transition-colors">Gestión de Venta y Alquiler</a></li>
              <li><a href="#contacto" className="hover:text-gold-400 transition-colors">Oficina C/ Esperanto 15</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="font-serif text-xs font-bold text-white mb-4 uppercase tracking-wider">
              Contacto Sede
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Calle Esperanto, 15, 29007 Málaga</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:952301111" className="hover:text-gold-400 font-bold">952 30 11 11</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>info@casaoro.es</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Casaoro Inmobiliaria Málaga. Todos los derechos reservados.</p>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-slate-300">Aviso Legal</a>
            <a href="#" className="hover:text-slate-300">Privacidad</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
