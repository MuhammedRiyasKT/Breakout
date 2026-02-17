import { motion } from "framer-motion";
import { 
  Shield, BookOpen, AlertTriangle, CreditCard, Users, 
  Lock, Monitor, Scale, Eye, FileText, Gavel, CheckCircle2 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: BookOpen,
    title: "Educational Purpose Only",
    content: "Breakout Academy provides stock market training strictly for educational purposes. We are not SEBI-registered and do not provide investment advice, stock tips, or portfolio management services."
  },
  {
    icon: CreditCard,
    title: "No Refund Policy",
    content: "All payments made to Breakout Academy are non-refundable under any circumstances. This includes difficulty understanding content, teaching style preference, or missed sessions. As 50% of the fee is paid to the mentor immediately, refunds are not possible."
  },
  {
    icon: Users,
    title: "Learning Support",
    content: "Mentors will assist students until they understand the topic. If required, a mentor change can be requested at no additional cost to ensure your learning continuity."
  },
  {
    icon: AlertTriangle,
    title: "No Guarantee of Profits",
    content: "Trading involves high risk. Breakout Academy does not guarantee profits or successful trading results. All trades and decisions are made at the student's own risk."
  },
  {
    icon: Shield,
    title: "Third-Party Account Handling",
    content: "If a student allows any third party (mentor, staff, or others) access to their trading account, it is entirely their own responsibility. Breakout Academy is not liable for any loss."
  },
  {
    icon: Lock,
    title: "Authorized Payments Only",
    content: "Payments must be made only through official Breakout Academy payment methods. The academy is not responsible for money paid to unauthorized individuals or third parties without written approval."
  },
  {
    icon: Monitor,
    title: "Online Classes & Attendance",
    content: "All classes are conducted online. Regular attendance is expected. Missed sessions due to student negligence do not qualify for refunds or indefinite rescheduling."
  },
  {
    icon: Scale,
    title: "Code of Conduct",
    content: "Prohibited actions: sharing trading tips, abusive behavior, copyright violations. Violation results in immediate removal without refund."
  },
  {
    icon: Eye,
    title: "Privacy & Data",
    content: "We collect minimal personal information for communication and payment purposes only. Breakout Academy does not sell or misuse personal data."
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    content: "All course materials are the intellectual property of Breakout Academy. Sharing, copying, recording, or reselling content without permission is strictly prohibited."
  },
  {
    icon: Gavel,
    title: "Governing Law",
    content: "These Terms & Conditions are governed by Indian law. Any disputes shall fall under Indian jurisdiction."
  }
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-neutral-950 relative selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* --- Hero Header --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 tracking-widest uppercase mb-6 backdrop-blur-md">
              Legal Documentation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Conditions</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
              Please read these terms carefully before enrolling. By proceeding, you agree to our policies.
            </p>
          </motion.div>

          {/* --- Terms List --- */}
          <div className="space-y-6">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md p-6 md:p-8 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-6">
                    <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-white/20">0{i + 1}</span>
                        <h2 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                          {s.title}
                        </h2>
                      </div>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                        {s.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* --- Final Consent Box --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent backdrop-blur-xl p-8 text-center"
          >
             {/* Glow behind the box */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
             
             <div className="flex justify-center mb-4">
               <div className="p-3 bg-primary/20 rounded-full text-primary animate-pulse">
                 <CheckCircle2 size={32} />
               </div>
             </div>
             
             <h3 className="text-xl font-bold text-white mb-3">Acknowledgment</h3>
             <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
               By enrolling in Breakout Academy or making a payment, you explicitly confirm that you have read, understood, and agreed to these Terms & Conditions.
             </p>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;