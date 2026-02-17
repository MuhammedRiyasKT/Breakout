import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  BarChart2,
  Shield,
  ClipboardList,
  AlertCircle,
} from "lucide-react";

const topics = [
  { icon: TrendingUp, label: "Stock market fundamentals" },
  { icon: BarChart2, label: "Chart reading & price action" },
  { icon: Shield, label: "Risk management & capital protection" },
  { icon: ClipboardList, label: "Trade planning & execution logic" },
  { icon: AlertCircle, label: "Common trader mistakes and how to avoid them" },
];

const WhatYouLearnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-dark-surface" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-surface-foreground mb-4">
            What You Will <span className="text-primary">Learn</span>
          </h2>
          <p className="text-dark-surface-foreground/50 text-sm">
            Focus is on process and discipline, not prediction.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {topics.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-dark-surface-foreground/5 border border-dark-surface-foreground/10 rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <t.icon size={18} className="text-primary" />
              </div>
              <span className="text-dark-surface-foreground/80 font-body text-sm font-medium">
                {t.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
