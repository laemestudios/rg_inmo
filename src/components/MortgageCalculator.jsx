import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function MortgageCalculator({ initialPrice = 350000 }) {
  const [propertyPrice, setPropertyPrice] = useState(initialPrice);
  const [depositPercent, setDepositPercent] = useState(20);
  const [years, setYears] = useState(25);

  const depositAmount = (propertyPrice * depositPercent) / 100;
  const loanAmount = Math.max(0, propertyPrice - depositAmount);
  
  const monthlyRate = 2.9 / 100 / 12;
  const totalPayments = years * 12;
  
  const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
  const itpTax = propertyPrice * 0.07; // ITP Andalucia 7%

  return (
    <section id="hipoteca" className="py-16 bg-sand-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-1">
            Financiación
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy-950">
            Calculadora Hipotecaria & Gastos (ITP 7%)
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Precio Vivienda</span>
                <span className="text-navy-950 font-serif text-base">{propertyPrice.toLocaleString()} €</span>
              </div>
              <input
                type="range"
                min="100000"
                max="1200000"
                step="10000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Entrada ({depositPercent}%)</span>
                <span className="text-navy-950">{depositAmount.toLocaleString()} €</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={depositPercent}
                onChange={(e) => setDepositPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Plazo de Amortización</label>
              <select
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs font-semibold text-slate-800"
              >
                <option value={15}>15 años</option>
                <option value={20}>20 años</option>
                <option value={25}>25 años</option>
                <option value={30}>30 años</option>
              </select>
            </div>
          </div>

          {/* Results Box */}
          <div className="md:col-span-5 bg-navy-950 text-white rounded-2xl p-6 shadow-xl text-center space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 block mb-1">
                Cuota Mensual Estimada
              </span>
              <div className="font-serif text-3xl font-bold text-white">
                {Math.round(monthlyPayment).toLocaleString()} €<span className="text-xs font-sans font-normal text-slate-400">/mes</span>
              </div>
            </div>

            <div className="text-xs text-slate-300 space-y-1.5 py-3 border-y border-navy-800 text-left">
              <div className="flex justify-between">
                <span>Préstamo:</span>
                <strong>{loanAmount.toLocaleString()} €</strong>
              </div>
              <div className="flex justify-between">
                <span>ITP Andalucía (7%):</span>
                <strong>{Math.round(itpTax).toLocaleString()} €</strong>
              </div>
            </div>

            <a
              href="https://wa.me/34952301111?text=Hola,%20quisiera%20asesoramiento%20financiero%20para%20comprar%20una%20propiedad%20en%20Málaga"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gold-gradient-bg text-navy-950 font-bold py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 text-xs"
            >
              <span>Consultar Estudio Financiero</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
