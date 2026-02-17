import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row items-center gap-4">
      
      {/* Instagram Glass Orb */}
      <a
        href="https://www.instagram.com/break_outacademy?igsh=MTI0YTV1azlzZGtubQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-pink-500/30 overflow-hidden"
        aria-label="Instagram"
      >
        {/* Hover Gradient Background (Fade In) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <FaInstagram size={20} className="relative z-10 text-white/90 group-hover:text-white transition-colors" />
      </a>

      {/* WhatsApp Glass Orb */}
      <a
        href="https://wa.me/918891149827"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-green-500/30 hover:bg-green-600 overflow-hidden"
        aria-label="WhatsApp"
      >
        {/* Icon */}
        <FaWhatsapp size={20} className="relative z-10 text-white/90 group-hover:text-white transition-colors" />
      </a>
      
    </div>
  );
};

export default SocialIcons;