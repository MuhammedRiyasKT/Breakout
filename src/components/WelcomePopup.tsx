import { useState, useEffect } from "react";
import { X, AlertTriangle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("breakout_popup_seen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("breakout_popup_seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-xl shadow-2xl"
          >
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="p-8 text-center">
              
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <AlertTriangle size={28} className="text-primary animate-pulse" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Welcome to Breakout
              </h2>

              <p className="text-xs font-medium text-primary/80 uppercase tracking-widest mb-6">
                Important Disclaimer
              </p>

              <div className="space-y-4 text-sm text-gray-400 leading-relaxed text-left bg-white/5 p-4 rounded-xl border border-white/5">
                <p>
                  <span className="text-gray-200 font-semibold">
                    Risk Warning:
                  </span>{" "}
                  Trading involves high financial risk. We provide{" "}
                  <span className="text-white">education only</span> — we do not
                  offer stock tips, advisory services, or guaranteed profits.
                </p>

                <div className="w-full h-px bg-white/5" />

                <p>
                  <span className="text-gray-200 font-semibold">
                    Payment Safety:
                  </span>{" "}
                  Please <span className="text-white">contact us</span> before
                  making any payment.
                </p>
              </div>

              {/* Button */}
              <button
                onClick={handleClose}
                className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  I Understand & Agree
                  <ShieldCheck size={16} />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
