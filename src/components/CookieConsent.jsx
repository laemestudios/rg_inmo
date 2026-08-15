import React, { useState, useEffect } from 'react';
import { Cookie, Check, X, Shield, Settings } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('casaoro_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth appearance
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('casaoro_cookie_consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    setShowConfigModal(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('casaoro_cookie_consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    setShowConfigModal(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem('casaoro_cookie_consent', JSON.stringify({
      ...cookieSettings,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    setShowConfigModal(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Bottom Sticky Banner (AEPD Compliant) */}
      <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-fadeIn">
        <div className="bg-navy-950/95 backdrop-blur-md border border-gold-500/40 text-white rounded-2xl p-5 shadow-2xl space-y-4">
          
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-gold-400" />
            </div>

            <div className="flex-1">
              <h4 className="font-serif text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-gold-400" />
                Uso de Cookies y Privacidad
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia en Casaoro Inmobiliaria. Puedes aceptar todas, rechazarlas o configurar tus preferencias.
              </p>
            </div>
          </div>

          {/* Action Buttons with Equal Prominence (AEPD Requirement) */}
          <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-navy-800">
            <button
              onClick={() => setShowConfigModal(true)}
              className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-2 rounded-xl transition-colors flex items-center gap-1"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configurar</span>
            </button>

            <button
              onClick={handleRejectAll}
              className="text-xs font-bold bg-navy-800 hover:bg-navy-700 text-slate-200 px-4 py-2 rounded-xl border border-navy-700 transition-all"
            >
              Rechazar
            </button>

            <button
              onClick={handleAcceptAll}
              className="text-xs font-bold gold-gradient-bg text-navy-950 px-5 py-2 rounded-xl shadow-gold-glow hover:shadow-lg transition-all"
            >
              Aceptar Todas
            </button>
          </div>

        </div>
      </div>

      {/* Configuration Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-navy-700 text-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            
            <div className="flex justify-between items-center border-b border-navy-800 pb-3">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-gold-400" />
                Configuración de Cookies
              </h3>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Essential */}
              <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-white mb-0.5">Cookies Técnicas (Necesarias)</h5>
                  <p className="text-slate-400 text-[11px]">Imprescindibles para el correcto funcionamiento de la web.</p>
                </div>
                <span className="text-[10px] font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                  Siempre Activas
                </span>
              </div>

              {/* Analytics */}
              <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-white mb-0.5">Cookies Analíticas</h5>
                  <p className="text-slate-400 text-[11px]">Permiten medir las visitas y el comportamiento de navegación.</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.analytics}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, analytics: e.target.checked })}
                  className="w-4 h-4 rounded accent-gold-500 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-white mb-0.5">Cookies de Publicidad</h5>
                  <p className="text-slate-400 text-[11px]">Utilizadas para ofrecer ofertas personalizadas de inmuebles.</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.marketing}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, marketing: e.target.checked })}
                  className="w-4 h-4 rounded accent-gold-500 cursor-pointer"
                />
              </div>

            </div>

            <div className="flex justify-between items-center pt-3 border-t border-navy-800 text-xs">
              <button
                onClick={handleRejectAll}
                className="text-slate-400 hover:text-white"
              >
                Rechazar Todo
              </button>

              <button
                onClick={handleSaveCustom}
                className="gold-gradient-bg text-navy-950 font-bold px-5 py-2 rounded-xl shadow-md"
              >
                Guardar Selección
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
