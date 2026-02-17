import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  BarChart2,
  Shield,
  ClipboardList,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

const topics = [
  { icon: TrendingUp, label: "Stock Market Fundamentals" },
  { icon: BarChart2, label: "Chart Reading & Price Action" },
  { icon: Shield, label: "Risk Management & Capital Protection" },
  { icon: ClipboardList, label: "Trade Planning & Execution Logic" },
  { icon: AlertCircle, label: "Trader Psychology & Mistakes" },
];

const WhatYouLearnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 bg-neutral-950 overflow-hidden" ref={ref}>
      
      {/* --- Background Decoration (Grid & Glow) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary/80 tracking-widest uppercase mb-4 backdrop-blur-md">
            Curriculum
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Craft</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-lg mx-auto">
            We focus on the process, discipline, and execution—not just prediction.
          </p>
        </motion.div>

        {/* Glass Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {topics.map((t, i) => (
            <motion.div
              key={t.label}
              variants={itemVariants}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                i === 0 || i === 3 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Internal Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/10 group-hover:border-primary/30 group-hover:text-primary transition-colors text-gray-300">
                    <t.icon size={24} />
                  </div>
                  <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" size={18} />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                    {t.label}
                  </h3>
                  <div className="h-1 w-12 bg-primary/30 mt-3 rounded-full group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;