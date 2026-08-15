import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200 text-xs py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Brand & Short Description (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <img
              src="./images/logo_transparent.png"
              alt="Casaoro Inmobiliaria Málaga"
              className="h-10 w-auto object-contain"
            />
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Agencia inmobiliaria de referencia en Málaga Capital. Intermediación transparente en compra, venta, alquiler y valoración de propiedades.
            </p>
          </div>

          {/* Nav Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li>
                <a href="#catalogo" className="hover:text-red-600 transition-colors">Inmuebles en Málaga</a>
              </li>
              <li>
                <a href="#tasador" className="hover:text-red-600 transition-colors">Valorar mi Inmueble</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-red-600 transition-colors">Contacto & Ubicación</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-serif text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Sede Málaga
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>Calle Esperanto, 15, 29007 Málaga</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a href="tel:952301111" className="font-bold text-slate-900 hover:text-red-600 transition-colors">
                  952 30 11 11
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <span>info@casaoro.es</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Casaoro Inmobiliaria Málaga. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-slate-600">Aviso Legal</a>
            <a href="#" className="hover:text-slate-600">Privacidad</a>
            <a href="#" className="hover:text-slate-600">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
