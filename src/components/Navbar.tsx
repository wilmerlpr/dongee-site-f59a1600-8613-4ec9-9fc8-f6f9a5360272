import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Servicios' },
    { path: '/team', label: 'Equipo' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-fuchsia-600 rounded-lg group-hover:bg-fuchsia-500 transition-colors shadow-[0_0_20px_rgba(217,70,239,0.5)]">
            <Scissors className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-display tracking-tighter text-white">NEON</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-fuchsia-400',
                location.pathname === link.path ? 'text-fuchsia-500' : 'text-slate-300'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/bookings" 
            className="px-6 py-2.5 bg-white text-slate-950 font-bold rounded-full hover:bg-fuchsia-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Reservar Cita
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-fuchsia-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/bookings"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-fuchsia-600 rounded-lg text-white font-bold"
            >
              Reservar Ahora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;