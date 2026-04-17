import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/fleet", label: "Fleet" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-gradient-to-b from-[#0A0E1A]/80 to-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 border-2 border-[#00B4D8] rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-condensed font-black text-sm text-[#00B4D8] tracking-widest">HD</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-condensed font-black text-lg tracking-[0.12em] text-white leading-none uppercase">Horizon Drilling</p>
              <p className="font-mono-custom text-[10px] text-[#00B4D8] tracking-[0.3em] leading-none mt-0.5">& CO</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span className={`relative font-condensed font-semibold text-sm tracking-[0.12em] uppercase transition-colors duration-200 group cursor-pointer ${
                    isActive ? "text-[#00B4D8]" : "text-white/80 hover:text-white"
                  }`}>
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00B4D8] to-[#C8A96E] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:flex">
              <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-6 py-2.5 border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </Link>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#0A0E1A]/98 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link href={link.href}>
                      <span className={`block py-3 font-condensed font-bold text-xl tracking-[0.12em] uppercase border-b border-white/5 ${
                        isActive ? "text-[#00B4D8]" : "text-white/80"
                      } cursor-pointer`}>
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="/contact">
                  <button className="w-full mt-4 font-condensed font-bold text-sm tracking-[0.15em] uppercase px-6 py-3 bg-[#00B4D8] text-white hover:bg-[#0096C7] transition-colors duration-300">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
