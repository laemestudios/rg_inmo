import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 bg-sand-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-1">
            Ubicación y Contacto
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy-950">
            Visítanos en Calle Esperanto, 15 (Málaga)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold-700" />
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-xs uppercase tracking-wider mb-1">Dirección</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Calle Esperanto, 15<br />
                  29007 Málaga
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold-700" />
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-xs uppercase tracking-wider mb-1">Teléfono</h4>
                <a href="tel:952301111" className="text-gold-700 font-bold text-sm hover:underline">
                  952 30 11 11
                </a>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-950 text-xs uppercase tracking-wider mb-1">WhatsApp Directo</h4>
                <a
                  href="https://wa.me/34952301111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold text-xs hover:underline"
                >
                  Abrir conversación →
                </a>
              </div>
            </div>
          </div>

          {/* Clean Form */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-navy-950">¡Mensaje Enviado!</h4>
                <p className="text-slate-600 text-xs">Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-navy-950 mb-4">
                  Envíanos tu consulta
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 text-xs"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 text-xs"
                    placeholder="600 000 000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mensaje</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 text-xs"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-navy-950 font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
