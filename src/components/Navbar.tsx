import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* ✅ Navbar background change on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ✅ Close mobile menu when route changes */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  /* ✅ FIX: Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/terms", label: "Terms" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-white/5 shadow-2xl py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center gap-3 relative z-50 group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={logo}
                alt="Breakout Academy"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_currentColor]" />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Free Call
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 relative z-50 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-neutral-950/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-8 w-full px-6">
          {links.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-light tracking-wider transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-white font-semibold scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}

          <div className="w-16 h-px bg-white/10 my-4" />

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs bg-white text-black py-4 rounded-xl text-center text-lg font-bold shadow-xl hover:bg-gray-200 transition-colors"
          >
            Book Free Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
