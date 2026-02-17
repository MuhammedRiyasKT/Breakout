import { motion } from "framer-motion";
import { Shield, BookOpen, AlertTriangle, CreditCard, Users, Lock, Monitor, Scale, Eye, FileText, Gavel } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: BookOpen,
    title: "1. Educational Purpose Only",
    content:
      "Breakout Academy provides stock market training strictly for educational purposes. We are not SEBI-registered and do not provide investment advice, stock tips, or portfolio management services.",
  },
  {
    icon: CreditCard,
    title: "2. No Refund Policy",
    content:
      "All payments made to Breakout Academy are non-refundable under any circumstances. This includes, but is not limited to: difficulty understanding the content, teaching style preference, missed classes or sessions, and live trading sessions. The academy incurs fixed operational expenses, and 50% of the fee is paid to the mentor. Therefore, refunds are not possible.",
  },
  {
    icon: Users,
    title: "3. Learning Support",
    content:
      "Mentors will assist students until they understand the topic. If required, a mentor change can be requested at no additional cost.",
  },
  {
    icon: AlertTriangle,
    title: "4. No Guarantee of Profits",
    content:
      "Trading involves high risk. Breakout Academy does not guarantee profits or successful trading results. All trades and decisions are made at the student's own risk.",
  },
  {
    icon: Shield,
    title: "5. Third-Party Account Handling",
    content:
      "If a student allows any third party (mentor, staff, or others) access to their trading account, it is entirely their own responsibility. Breakout Academy is not liable for any loss or actions taken.",
  },
  {
    icon: Lock,
    title: "6. Authorized Payments Only",
    content:
      "Payments must be made only through official Breakout Academy payment methods. The academy is not responsible for money paid to unauthorized individuals or third parties without written approval.",
  },
  {
    icon: Monitor,
    title: "7. Online Classes & Attendance",
    content:
      "All classes are conducted online. Regular attendance is expected. Missed sessions do not qualify for refunds.",
  },
  {
    icon: Scale,
    title: "8. Code of Conduct",
    content:
      "The following are strictly prohibited: sharing trading tips, abusive or disrespectful behavior, copyright or content violations. Violation of these rules will result in immediate removal without refund.",
  },
  {
    icon: Eye,
    title: "9. Privacy & Data",
    content:
      "We collect minimal personal information for communication and payment purposes. Breakout Academy does not sell or misuse personal data.",
  },
  {
    icon: FileText,
    title: "10. Intellectual Property",
    content:
      "All course materials are the intellectual property of Breakout Academy. Sharing, copying, recording, or reselling content without permission is prohibited.",
  },
  {
    icon: Gavel,
    title: "11. Governing Law",
    content:
      "These Terms & Conditions are governed by Indian law. Any disputes shall fall under Indian jurisdiction.",
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="bg-hero-dark pt-28 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-primary/20">
              Legal
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-surface-foreground mb-3">
              Terms & <span className="text-gradient-red">Conditions</span>
            </h1>
            <p className="text-dark-surface-foreground/60 text-sm md:text-base max-w-lg mx-auto">
              Breakout Academy — Please read carefully before enrolling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group rounded-xl border border-border bg-card p-5 md:p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-semibold text-base md:text-lg text-card-foreground mb-2">
                      {s.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Final Consent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 rounded-xl bg-primary/5 border-2 border-primary/20 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                <Shield size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  Final Consent
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By enrolling or making a payment, you confirm that you have read, understood, and agreed to these Terms & Conditions. For any clarification, contact official support before enrolling.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
