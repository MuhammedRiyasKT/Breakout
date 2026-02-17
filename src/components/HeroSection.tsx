import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroTrader from "@/assets/hero-trader.png";

const HeroSection = () => {
  return (
    <section className="bg-hero-dark min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Subtle red accent glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - shown first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex lg:hidden justify-center relative order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
              <img
                src={heroTrader}
                alt="Professional stock market mentor"
                className="w-full max-w-xs rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
              One-to-One Training
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark-surface-foreground mb-6">
              Learn Trading the Right Way.{" "}
              <span className="text-gradient-red">One-to-One.</span>
              <br />
              No False Promises.
            </h1>
            <p className="text-dark-surface-foreground/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Personalized stock market training from NISM-certified mentors, designed for serious learners who want skill, discipline, and proper risk awareness — not shortcuts or fake guarantees.
            </p>
            <p className="text-primary font-medium text-sm mb-8 italic">
              This is education, not tip-selling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold text-sm hover:bg-primary/90 transition-all animate-pulse-red"
              >
                Book a Free Intro Call
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-dark-surface-foreground/20 text-dark-surface-foreground px-7 py-3 rounded-md font-semibold text-sm hover:border-primary hover:text-primary transition-all"
              >
                <Phone size={16} />
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center relative order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
              <img
                src={heroTrader}
                alt="Professional stock market mentor"
                className="w-full max-w-md rounded-2xl"
              />
              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-xl border border-border"
              >
                <p className="text-xs text-muted-foreground">NISM Certified</p>
                <p className="font-display font-bold text-primary text-lg">Personal Mentors</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
