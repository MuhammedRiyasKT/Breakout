import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  User,
  Award,
  Clock,
  BarChart3,
  RefreshCw,
  GraduationCap,
} from "lucide-react";

const features = [
  { icon: User, title: "100% One-to-One Personal Training" },
  { icon: Award, title: "NISM-Certified Mentors" },
  { icon: Clock, title: "Flexible Schedules" },
  { icon: BarChart3, title: "Live Market Learning" },
  { icon: RefreshCw, title: "Option to Change Mentor" },
  { icon: GraduationCap, title: "Beginner to Intermediate Friendly" },
];

const WhySection = () => {
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
            Why <span className="text-primary">Breakout Academy</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Most trading academies teach theory in large batches. We don't.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">
                {f.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-secondary rounded-xl p-6 md:p-8 border border-border"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">If you are looking for guaranteed profits, this academy is not for you.</strong>
            <br />
            If you want structured, practical trading education — you are in the right place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
