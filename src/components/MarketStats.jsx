import React from 'react';

export default function MarketStats() {
  const stats = [
    { number: "+1.200", label: "Inmuebles Transaccionados" },
    { number: "15+ Años", label: "En Málaga Capital" },
    { number: "98%", label: "Clientes Satisfechos" },
    { number: "C/ Esperanto 15", label: "Sede Física Málaga" }
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-sand-50 border border-slate-100">
              <div className="font-serif text-3xl font-bold text-navy-950 mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
