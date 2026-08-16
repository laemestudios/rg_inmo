import React, { useState, useEffect } from 'react';
import { Lock, User, Key, Eye, EyeOff, ShieldCheck, AlertCircle, LogOut } from 'lucide-react';

const EXPECTED_USERNAME = import.meta.env.VITE_SITE_USERNAME || 'admin';
const EXPECTED_PASSWORD = import.meta.env.VITE_SITE_PASSWORD || 'goldhouse2026';

export default function AccessGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem('rg_inmo_authenticated') || sessionStorage.getItem('rg_inmo_authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (username.trim() === EXPECTED_USERNAME && password === EXPECTED_PASSWORD) {
        setIsAuthenticated(true);
        if (rememberMe) {
          localStorage.setItem('rg_inmo_authenticated', 'true');
        } else {
          sessionStorage.setItem('rg_inmo_authenticated', 'true');
        }
      } else {
        setError('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
      }
      setIsLoading(false);
    }, 400);
  };

  const handleLogout = () => {
    localStorage.removeItem('rg_inmo_authenticated');
    sessionStorage.removeItem('rg_inmo_authenticated');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-slate-800/30 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-md w-full relative z-10">
          {/* Logo Card Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-xl mb-4">
              <img
                src="./images/logo_transparent.png"
                alt="Casaoro Inmobiliaria Málaga"
                className="h-12 sm:h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex items-center justify-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-widest mt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Acceso a la demo</span>
            </div>
            <h1 className="text-2xl font-bold text-white mt-1">Casaoro Inmobiliaria</h1>
            <p className="text-slate-400 text-xs mt-1">
              Introduzca sus credenciales para acceder a la plataforma.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Error de autenticación</p>
                  <p className="mt-0.5 text-red-300">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Usuario
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ej: demo.user"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Key className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-11 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-red-600 focus:ring-red-500 focus:ring-offset-slate-900"
                  />
                  <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                    Recordar en este navegador
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 red-gradient-bg text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-red-600/30 hover:opacity-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Entrar a la Web</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Security Notice Footer */}
          <div className="mt-8 text-center text-slate-500 text-xs flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-600" />
            <span>Sitio restringido a usuarios autorizados </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Floating Logout Button for Authenticated Sessions */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleLogout}
          title="Cerrar sesión / Bloquear sitio"
          className="bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-950 border border-slate-700 backdrop-blur-md px-3 py-2 rounded-xl text-xs font-semibold shadow-2xl transition-all flex items-center gap-2 group"
        >
          <LogOut className="w-3.5 h-3.5 text-red-500 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Cerrar Sesión</span>
        </button>
      </div>

      {children}
    </>
  );
}
