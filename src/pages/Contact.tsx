import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold mb-4">ENCUÉNTRANOS</h1>
          <div className="w-24 h-1 bg-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
             <div className="glass-panel p-8 rounded-3xl flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="p-3 bg-fuchsia-600/20 text-fuchsia-400 rounded-lg">
                    <MapPin />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Dirección</h3>
                    <p className="text-slate-400">Av. de la Moda 123, Distrito de Diseño<br/>Ciudad Capital, CP 55500</p>
                </div>
             </div>
             
             <div className="glass-panel p-8 rounded-3xl flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="p-3 bg-fuchsia-600/20 text-fuchsia-400 rounded-lg">
                    <Phone />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                    <p className="text-slate-400">+52 (55) 1234-5678</p>
                </div>
             </div>

             <div className="glass-panel p-8 rounded-3xl flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="p-3 bg-fuchsia-600/20 text-fuchsia-400 rounded-lg">
                    <Mail />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-slate-400">contacto@neonstudio.com</p>
                </div>
             </div>

             <div className="flex gap-4 mt-8">
                <a href="#" className="p-4 glass-panel rounded-full hover:bg-fuchsia-600 hover:text-white transition-all text-slate-300"><Instagram /></a>
                <a href="#" className="p-4 glass-panel rounded-full hover:bg-blue-600 hover:text-white transition-all text-slate-300"><Facebook /></a>
             </div>
          </div>

          <div className="glass-panel p-2 rounded-3xl h-[500px] overflow-hidden">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.536894080928!2d-99.1686940240409!3d19.432607681846743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b4c0b4c0b5%3A0x85d1f8b4c0b4c0b5!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0, borderRadius: '1.5rem', filter: 'invert(90%) hue-rotate(180deg)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;