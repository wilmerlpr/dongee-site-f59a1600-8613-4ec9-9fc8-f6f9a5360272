import { Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-fuchsia-600/5 blur-[100px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-fuchsia-600 rounded-lg">
                <Scissors className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-display tracking-tighter text-white">NEON</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 NEON Hair Studio. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-fuchsia-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-fuchsia-400 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;