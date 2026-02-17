import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import heroTrader from "@/assets/hero-trader.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">

      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />

      {/* --- Grid Pattern Overlay --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* --- LEFT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            {/* Glass Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-red-400 text-xs font-semibold tracking-widest uppercase shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Live 1-on-1 Mentorship
              </span>
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Trade with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-500 animate-gradient-x">
                Precision.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Stop gambling. Start trading. personalized training from <span className="text-white font-medium">NISM-certified mentors</span> designed for serious execution, risk management, and discipline.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Free Intro Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Plans
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> No False Claims
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Pure Price Action
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT IMAGE (Glass Card Effect) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* The Main Glass Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm shadow-2xl">

              {/* Inner Glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10" />

              {/* Image */}
              <img
                src={heroTrader}
                alt="Stock Market Mentor"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-700 ease-in-out"
              />


              {/* Floating Glass Widget 1: NISM Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-xl"
              >
                <div className="bg-green-500/20 p-2.5 rounded-lg text-green-400">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Certification</p>
                  <p className="text-white font-bold text-lg">NISM Certified</p>
                </div>
              </motion.div>

              {/* Floating Glass Widget 2: Top Right Tag */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg"
              >
                <span className="text-xs font-medium text-white">Mentor Mode</span>
              </motion.div>
            </div>

            {/* Decorative background circle behind image */}
            <div className="absolute -z-10 w-[120%] h-[80%] bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full opacity-30" />

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;