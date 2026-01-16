import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans selection:bg-fuchsia-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;