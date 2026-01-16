import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Scissors } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Bookings = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Corte de Autor',
    date: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase
        .from('app_f59a1_bookings')
        .insert([{ ...formData }]);
      
      if (error) throw error;
      setSuccess(true);
    } catch (error) {
      console.error('Error booking:', error);
      alert('Hubo un error al agendar. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative">
        {/* Background ambience */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-display font-bold mb-6">RESERVA TU <br/><span className="text-fuchsia-500">TRANSFORMACIÓN</span></h1>
          <p className="text-lg text-slate-400 mb-8">
            Estás a un paso de tu mejor versión. Completa el formulario y nos pondremos en contacto para confirmar tu cita.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-fuchsia-400"><Clock /></div>
                <div>
                    <p className="font-bold text-white">Horarios</p>
                    <p className="text-sm">Lun - Sab: 10am - 8pm</p>
                </div>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-fuchsia-400"><Scissors /></div>
                <div>
                    <p className="font-bold text-white">Política de Cancelación</p>
                    <p className="text-sm">Avisar con 24hrs de antelación.</p>
                </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-10 rounded-3xl"
        >
          {success ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">¡Solicitud Recibida!</h3>
              <p className="text-slate-300">Te contactaremos pronto por email para confirmar.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-300">Nombre Completo</label>
                <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input 
                        type="text" 
                        required
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                        placeholder="Tu nombre"
                        onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-slate-300">Email</label>
                <input 
                    type="email" 
                    required
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                    placeholder="ejemplo@email.com"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-300">Servicio</label>
                    <select 
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors appearance-none"
                        onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                        <option>Corte de Autor</option>
                        <option>Balayage</option>
                        <option>Full Color</option>
                        <option>Tratamiento</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-300">Fecha Preferida</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input 
                            type="date" 
                            required
                            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                            onChange={e => setFormData({...formData, date: e.target.value})}
                        />
                    </div>
                  </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-slate-300">Notas Adicionales</label>
                <textarea 
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors h-24"
                    placeholder="¿Alguna alergia? ¿Preferencia de estilista?"
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-fuchsia-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? 'Procesando...' : 'Confirmar Reserva'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

import { Check } from 'lucide-react';
export default Bookings;