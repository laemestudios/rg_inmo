import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Settings, X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('casaoro_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 800);
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
      {/* Bottom Sticky Card in White & Red */}
      <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-fadeIn">
        <div className="bg-white border-2 border-red-500 text-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-red-600" />
            </div>

            <div className="flex-1">
              <h4 className="font-serif text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-red-600" />
                Uso de Cookies y Privacidad
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Utilizamos cookies propias y de terceros para analizar la navegación y ofrecerte la mejor experiencia en Casaoro Inmobiliaria. Puedes aceptar todas, rechazarlas o configurar tus preferencias.
              </p>
            </div>
          </div>

          {/* Action Buttons - 100% High Visibility */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
            <button
              onClick={() => setShowConfigModal(true)}
              className="text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configurar</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRejectAll}
                className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-xl border border-slate-300 transition-all cursor-pointer"
              >
                Rechazar
              </button>

              <button
                onClick={handleAcceptAll}
                className="text-xs font-bold red-gradient-bg text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
              >
                Aceptar Todas
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Configuration Modal in White & Red */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-red-600" />
                Configuración de Cookies
              </h3>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              
              {/* Essential */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-slate-900 mb-0.5">Cookies Técnicas (Necesarias)</h5>
                  <p className="text-slate-500 text-[11px]">Imprescindibles para el correcto funcionamiento de la web.</p>
                </div>
                <span className="text-[10px] font-bold uppercase bg-red-100 text-red-700 border border-red-200 px-2 py-0.5 rounded">
                  Necesarias
                </span>
              </div>

              {/* Analytics */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-slate-900 mb-0.5">Cookies Analíticas</h5>
                  <p className="text-slate-500 text-[11px]">Permiten medir el uso de la página para mejorar la experiencia.</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.analytics}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, analytics: e.target.checked })}
                  className="w-4 h-4 rounded accent-red-600 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-slate-900 mb-0.5">Cookies de Publicidad</h5>
                  <p className="text-slate-500 text-[11px]">Utilizadas para ofrecer recomendaciones personalizadas.</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookieSettings.marketing}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, marketing: e.target.checked })}
                  className="w-4 h-4 rounded accent-red-600 cursor-pointer"
                />
              </div>

            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-xs">
              <button
                onClick={handleRejectAll}
                className="text-slate-500 hover:text-slate-800"
              >
                Rechazar Todo
              </button>

              <button
                onClick={handleSaveCustom}
                className="red-gradient-bg text-white font-bold px-5 py-2.5 rounded-xl shadow-md uppercase tracking-wider"
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
