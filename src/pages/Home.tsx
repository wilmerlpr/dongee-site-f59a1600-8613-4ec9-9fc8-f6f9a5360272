import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-fuchsia-300">Tendencia 2024</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-none tracking-tighter mb-6">
              <span className="text-white">TU ESTILO,</span><br />
              <span className="text-gradient">ELEVADO.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              No es solo un corte, es una declaración. Experimenta el lujo moderno en el corazón de la ciudad. Especialistas en colorimetría radical y cortes de precisión.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/bookings" className="px-8 py-4 bg-fuchsia-600 text-white font-bold rounded-xl hover:bg-fuchsia-500 transition-all shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2">
                Reservar Cita <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="px-8 py-4 glass-panel rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2">
                Ver Servicios
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" 
                alt="Modelo Hair Fashion" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 text-left">
                <p className="text-fuchsia-400 font-bold mb-1">Colección Neón</p>
                <p className="text-2xl font-bold text-white">Colorimetría Avanzada</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -10 }} className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Estilistas Galardonados</h3>
              <p className="text-slate-400 mb-6 max-w-md">Nuestro equipo ha sido reconocido en premios internacionales por su técnica en Balayage y cortes arquitectónicos.</p>
              <Link to="/team" className="text-fuchsia-400 font-bold hover:text-fuchsia-300 transition-colors">Conoce al equipo &rarr;</Link>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center bg-gradient-to-b from-fuchsia-900/20 to-slate-900/50">
              <div className="w-16 h-16 bg-fuchsia-600 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(217,70,239,0.5)]">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Servicio Express</h4>
              <p className="text-slate-400 text-sm">¿Poco tiempo? Pregunta por nuestros servicios flash de 30 minutos.</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-panel p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-2 border-slate-950" alt="user" />
                    ))}
                 </div>
                 <div className="flex flex-col">
                    <div className="flex text-yellow-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                    <span className="text-sm text-slate-400">5.0 Rating (500+ Reviews)</span>
                 </div>
              </div>
              <p className="italic text-slate-300">"Increíble atención al detalle. El ambiente es super chic y salí sintiéndome una diosa."</p>
            </motion.div>

             <motion.div whileHover={{ y: -10 }} className="glass-panel p-0 rounded-3xl col-span-1 md:col-span-2 overflow-hidden h-64 relative">
                <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" alt="Salon Interior" />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-slate-950 to-transparent w-full">
                    <h3 className="text-2xl font-bold">Espacio de Lujo</h3>
                    <p className="text-slate-300">Bebidas de cortesía y masajes capilares incluidos.</p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;