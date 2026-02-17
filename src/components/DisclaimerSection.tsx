import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-card border border-primary/20 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={24} className="text-primary" />
            <h2 className="font-display text-xl font-bold">Important Disclaimer</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Trading involves high financial risk. Breakout Academy does not guarantee profits and does not provide investment advice, stock tips, or portfolio management services. All learning and trading decisions are at the student's own risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
