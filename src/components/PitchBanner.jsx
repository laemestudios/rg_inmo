import React from 'react';
import { Award } from 'lucide-react';

export default function PitchBanner() {
  return (
    <div className="bg-slate-900 text-slate-200 border-b border-slate-800 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/30 text-red-300 font-bold uppercase tracking-wider text-[10px] border border-red-500/40">
            <Award className="w-3 h-3 text-red-400" />
            PRESENTACIÓN PROPUESTA WEB
          </span>
          <span className="hidden sm:inline text-slate-300 text-[11px] font-medium">
            Casaoro Inmobiliaria Málaga • Calle Esperanto, 15
          </span>
        </div>

        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Modo Demo
        </span>
      </div>
    </div>
  );
}
