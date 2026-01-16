import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    category: "Corte & Estilo",
    items: [
      { name: "Corte de Autor", price: "$45", desc: "Diagnóstico capilar + lavado + corte + styling" },
      { name: "Trim de Puntas", price: "$25", desc: "Mantenimiento rápido para cabello largo" },
      { name: "Barbería Premium", price: "$35", desc: "Corte caballero + perfilado de barba + toalla caliente" },
    ]
  },
  {
    category: "Colorimetría",
    items: [
      { name: "Balayage / Babylights", price: "$180+", desc: "Técnica a mano alzada para un degradado natural" },
      { name: "Full Color", price: "$90+", desc: "Color completo raíz a puntas (Sin decoloración)" },
      { name: "Efecto Neón", price: "$120+", desc: "Colores fantasía vibrantes (Requiere decoloración previa)" },
    ]
  },
  {
    category: "Tratamientos",
    items: [
      { name: "Botox Capilar", price: "$80", desc: "Restauración profunda y brillo espejo" },
      { name: "Keratina Orgánica", price: "$150", desc: "Alisado progresivo sin formol" },
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient">NUESTROS SERVICIOS</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Precios transparentes. Productos premium de marcas como Kérastase y Olaplex.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 flex flex-col hover:border-fuchsia-500/50 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold text-fuchsia-400 mb-8 border-b border-white/10 pb-4">{category.category}</h2>
              <div className="flex flex-col gap-8">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-300 transition-colors">{item.name}</h3>
                      <span className="text-xl font-display font-bold text-fuchsia-500">{item.price}</span>
                    </div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promo Section */}
        <div className="mt-20 glass-panel rounded-3xl p-12 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500"></div>
            <h3 className="text-3xl font-bold mb-6">Paquete "New You"</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Obtén un 20% de descuento al combinar Corte + Color + Tratamiento en una sola sesión. Incluye copa de champagne.</p>
            <button className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-fuchsia-400 hover:text-white transition-all">Consultar Disponibilidad</button>
        </div>
      </div>
    </div>
  );
};

export default Services;