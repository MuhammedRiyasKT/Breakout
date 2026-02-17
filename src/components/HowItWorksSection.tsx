import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Enroll", desc: "Secure your spot." },
  { num: "02", title: "Assign", desc: "Meet your mentor." },
  { num: "03", title: "Train", desc: "1-on-1 Sessions." },
  { num: "04", title: "Live", desc: "Market observation." },
  { num: "05", title: "Refine", desc: "Clear all doubts." },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 bg-neutral-950 overflow-hidden" ref={ref}>
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary/80 tracking-widest uppercase mb-4 backdrop-blur-md">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Mastery</span>
          </h2>
        </motion.div>

        {/* Process Flow Container */}
        <div className="relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10"
          >
           {steps.map((s, i) => (
  <motion.div
    key={s.num}
    variants={itemVariants}
    initial="hidden"
    animate="visible"
    className="group relative"
  >
    {/* Glass Card */}
    <div className="relative h-48 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-primary/10">
      
      {/* Big Watermark Number */}
      <span className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 select-none transition-colors group-hover:text-white/10">
        {s.num}
      </span>

      {/* Icon/Dot Indicator */}
      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-purple-500 mb-6 shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20 relative">
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white relative z-10 mb-2">
        {s.title}
      </h3>
      <p className="text-sm text-gray-400 font-light relative z-10 leading-snug">
        {s.desc}
      </p>
    </div>

    {/* Mobile Connector Arrow (Hidden on Desktop) */}
    {i < steps.length - 1 && (
      <div className="flex md:hidden justify-center py-4 text-white/20">
        <ArrowRight className="rotate-90" />
      </div>
    )}
  </motion.div>
))}

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;