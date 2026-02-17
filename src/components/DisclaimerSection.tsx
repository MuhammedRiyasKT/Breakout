import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden" ref={ref}>
      
      {/* --- Background Ambient Glow (Red/Caution theme) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-red-500/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md p-8 md:p-10"
        >
          {/* Subtle top highlight line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

          <div className="flex flex-col md:flex-row items-start gap-6">
            
            {/* Warning Icon with Glow */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <AlertTriangle size={24} className="text-red-400" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white tracking-wide">
                Risk Disclosure
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                <span className="text-gray-300 font-medium">Trading involves high financial risk.</span> Breakout Academy does not guarantee profits and does not provide investment advice, stock tips, or portfolio management services. All learning and trading decisions are at the student's own risk. We are purely an educational initiative.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Footer tiny text */}
        <div className="text-center mt-6">
           <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Breakout Academy. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;