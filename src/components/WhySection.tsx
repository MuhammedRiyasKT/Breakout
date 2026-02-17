import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Award,
  Clock,
  BarChart3,
  RefreshCw,
  GraduationCap,
  AlertCircle,
} from "lucide-react";

const features = [
  { 
    icon: User, 
    title: "1-on-1 Personal Training", 
    desc: "Direct access to your mentor. No crowded batches." 
  },
  { 
    icon: Award, 
    title: "NISM-Certified Mentors", 
    desc: "Learn from qualified professionals, not influencers." 
  },
  { 
    icon: Clock, 
    title: "Flexible Schedules", 
    desc: "Training sessions that fit around your busy life." 
  },
  { 
    icon: BarChart3, 
    title: "Live Market Execution", 
    desc: "Theory is useless without live market application." 
  },
  { 
    icon: RefreshCw, 
    title: "Mentor Switch Option", 
    desc: "Not clicking? Change your mentor instantly." 
  },
  { 
    icon: GraduationCap, 
    title: "Beginner Friendly", 
    desc: "Zero prior knowledge required to start your journey." 
  },
];

const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 bg-neutral-950 overflow-hidden" ref={ref}>
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 tracking-wider uppercase mb-4 backdrop-blur-sm">
            The Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Breakout Academy</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Most academies sell courses. We build disciplined traders through personalized mentorship.
          </p>
        </motion.div>

        {/* Glass Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="text-white w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimalist Disclaimer Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm p-6 flex flex-col sm:flex-row gap-5 items-center text-center sm:text-left">
             <div className="flex-shrink-0 bg-red-500/10 p-3 rounded-full">
                <AlertCircle className="text-red-400 w-6 h-6" />
             </div>
             <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-red-300 block mb-1">Reality Check:</strong>
                  We do not sell "Tips" or "Get Rich Quick" schemes. If you are looking for guaranteed profits without effort, this academy is not for you. We teach skill, not luck.
                </p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhySection;