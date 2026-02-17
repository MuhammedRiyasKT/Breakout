import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Enroll", desc: "Complete enrollment and payment" },
  { num: "02", title: "Get Assigned", desc: "Get a dedicated personal mentor" },
  { num: "03", title: "Train", desc: "Attend online one-to-one sessions" },
  { num: "04", title: "Observe", desc: "Learn with live market observation" },
  { num: "05", title: "Clarify", desc: "Get doubt clarification until clarity" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How the Training <span className="text-primary">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-primary/20 mb-2">
                {s.num}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-xs">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block mt-4 mx-auto w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
