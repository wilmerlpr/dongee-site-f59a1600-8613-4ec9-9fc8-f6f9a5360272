import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const team = [
  {
    name: "Valeria Neon",
    role: "Directora Creativa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Especialista en cortes asimétricos y color fantasía."
  },
  {
    name: "Marco Polo",
    role: "Master Colorist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    bio: "Mago del Balayage y rubios platinados."
  },
  {
    name: "Sarah J.",
    role: "Stylist Senior",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    bio: "Experta en texturas y cabello rizado."
  }
];

const Team = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-display font-bold text-center mb-16">NUESTROS <span className="text-fuchsia-500">ARTISTAS</span></h1>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                <p className="text-fuchsia-400 font-bold mb-2">{member.role}</p>
                <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{member.bio}</p>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                   <button className="p-2 bg-white/10 rounded-full hover:bg-fuchsia-600 transition-colors text-white"><Instagram size={20} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;