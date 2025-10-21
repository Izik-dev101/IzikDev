import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Showroom from "./pages/Showroom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="shadow-md sticky top-0 z-50 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img
              src="/izik.png"
              alt="Izik Logo"
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-xl font-bold">
              Izik<span className="text-blue-500">Dev</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/projects" className="hover:text-blue-500">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Animated Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden"
            >
              <nav className="flex flex-col items-center py-4 gap-4 text-gray-300 font-medium">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/projects", label: "Projects" },
                  { path: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="hover:text-blue-500 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showroom" element={<Showroom />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Izik — Crafted with React & TailwindCSS
      </footer>
    </div>
  );
}

export default App;
