import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inmuebles', href: '#catalogo' },
    { label: 'Valorar Inmueble', href: '#tasador' },
    { label: 'Calculadora Hipoteca', href: '#hipoteca' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="w-full relative z-40 transition-all">
      {/* Top light info strip */}
      <div className="bg-slate-100 text-slate-600 text-xs py-2 px-4 border-b border-slate-200 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-700 hover:text-gold-600 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              Calle Esperanto, 15, 29007 Málaga
            </span>
            <a href="tel:952301111" className="flex items-center gap-1.5 text-slate-700 hover:text-gold-600 transition-colors font-bold">
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              952 30 11 11
            </a>
            <span className="flex items-center gap-1.5 text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              Gestión Inmobiliaria en Málaga
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/34952301111?text=Hola,%20quisiera%20información%20sobre%20sus%20servicios%20inmobiliarios%20en%20Málaga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
          : 'bg-white py-3.5 border-b border-slate-100'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo with Relative Path for GitHub Pages */}
          <a href="#" className="flex items-center group">
            <img
              src="./images/logo_transparent.png"
              alt="Casaoro Inmobiliaria Málaga"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links - Clean & Uniform */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-gold-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:952301111"
              className="text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-50 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              952 30 11 11
            </a>

            <a
              href="#tasador"
              className="gold-gradient-bg text-navy-950 text-xs font-bold px-4 py-2 rounded-xl shadow-gold-glow hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>Vender mi Casa</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-800 hover:text-gold-600 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a
                href="tel:952301111"
                className="w-full text-center text-xs font-bold py-2.5 rounded-xl border border-slate-300 text-slate-800 bg-slate-50"
              >
                Llamar: 952 30 11 11
              </a>
              <a
                href="#tasador"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center gold-gradient-bg text-navy-950 text-xs font-bold py-3 rounded-xl shadow-gold-glow"
              >
                Valorar Vivienda Gratis
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
