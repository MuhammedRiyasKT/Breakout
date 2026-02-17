import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, AlertTriangle, Send, MessageSquare, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import SocialIcons from "@/components/SocialIcons";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a brief delay for UX before redirecting
    setTimeout(() => {
      const text = encodeURIComponent(
        `*New Inquiry from Website* \n\n👤 *Name:* ${form.name}\n📧 *Email:* ${form.email}\n📱 *Phone:* ${form.phone}\n💬 *Message:* ${form.message}`
      );
      window.open(`https://wa.me/918891149827?text=${text}`, "_blank");
      toast({ 
        title: "Redirecting to WhatsApp", 
        description: "Opening WhatsApp to send your message..." 
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-neutral-950 relative selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* --- Ambient Background Lighting --- */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top Left Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        {/* Bottom Right Glow */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* --- Header Section --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Support Online
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Let's Start the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Conversation
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
              Have questions about the mentorship? We strongly recommend clarifying everything before you enroll.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* --- Left Column: Contact Info (Span 5) --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Contact Details</h3>

              {/* Email Card */}
              <a 
                href="mailto:academybreakout@gmail.com"
                className="group relative flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div className="relative">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email Us</p>
                  <p className="text-white font-medium group-hover:text-primary transition-colors">academybreakout@gmail.com</p>
                </div>
                <ArrowUpRight className="absolute top-5 right-5 text-white/20 group-hover:text-white/60 transition-colors" size={18} />
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+918891149827"
                className="group relative flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div className="relative">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">WhatsApp / Call</p>
                  <p className="text-white font-medium group-hover:text-green-400 transition-colors">+91 88911 49827</p>
                </div>
                <ArrowUpRight className="absolute top-5 right-5 text-white/20 group-hover:text-white/60 transition-colors" size={18} />
              </a>

              {/* Warning Glass Box */}
              <div className="mt-8 p-6 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 p-1.5 bg-red-500/10 rounded-full shrink-0 animate-pulse">
                    <AlertTriangle size={16} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-red-200 font-semibold text-sm mb-1">Payment Warning</h4>
                    <p className="text-xs text-red-200/60 leading-relaxed font-light">
                      Only make payments through official Breakout Academy channels. We are not responsible for transfers to unauthorized personal accounts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- Right Column: Glass Form (Span 7) --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 shadow-2xl">
                
                {/* Subtle light reflection on top edge */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-1 bg-primary rounded-full" />
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        maxLength={255}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                      <input
                        type="tel"
                        maxLength={15}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                        placeholder="+91..."
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Your Message</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="I'm interested in the 1-on-1 mentorship..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <span className="animate-pulse">Processing...</span>
                      ) : (
                        <>
                          <MessageSquare size={18} className="fill-current" />
                          <span>Send via WhatsApp</span>
                          <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                    {/* Button Shine Animation */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                  
                  <p className="text-center text-[10px] text-gray-500">
                    By contacting us, you agree to our <span className="text-gray-400 hover:text-white cursor-pointer underline decoration-gray-600">Privacy Policy</span>.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      <Footer />
      <SocialIcons />
    </div>
  );
};

export default Contact;