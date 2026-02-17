import { Link } from "react-router-dom";
import { Mail, Phone, ExternalLink, ShieldAlert } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Mission (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <h3 className="font-display font-bold text-2xl tracking-tight text-white">
                BREAKOUT <span className="text-white/40 font-light">ACADEMY</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Master the markets with disciplined, 1-on-1 mentorship. We strip away the noise and focus on pure price action and risk management.
            </p>
          </div>

          {/* Column 2: Navigation (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-medium text-xs text-white/50 uppercase tracking-widest mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", to: "/" },
                { name: "Contact Support", to: "/contact" },
                { name: "Terms & Conditions", to: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Span 4) */}
          <div className="md:col-span-4">
            <h4 className="font-medium text-xs text-white/50 uppercase tracking-widest mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:academybreakout@gmail.com" 
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="p-2 bg-neutral-900 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email us at</p>
                  <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    academybreakout@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="tel:+918891149827" 
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="p-2 bg-neutral-900 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call us at</p>
                  <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    +91 88911 49827
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} Breakout Academy. All rights reserved.
          </p>
          
          <div className="flex items-start gap-2 max-w-md text-right md:text-right">
            <ShieldAlert size={14} className="text-gray-600 mt-0.5 flex-shrink-0" />
            <p className="text-[10px] text-gray-600 leading-snug">
              Trading involves financial risk. Content is for educational purposes only and does not constitute investment advice.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;