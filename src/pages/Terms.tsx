import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Educational Purpose Only",
    content:
      "Breakout Academy provides stock market training strictly for educational purposes. We are not SEBI-registered and do not provide investment advice, stock tips, or portfolio management services.",
  },
  {
    title: "2. No Refund Policy",
    content:
      "All payments made to Breakout Academy are non-refundable under any circumstances. This includes, but is not limited to: difficulty understanding the content, teaching style preference, missed classes or sessions, and live trading sessions. The academy incurs fixed operational expenses, and 50% of the fee is paid to the mentor. Therefore, refunds are not possible.",
  },
  {
    title: "3. Learning Support",
    content:
      "Mentors will assist students until they understand the topic. If required, a mentor change can be requested at no additional cost.",
  },
  {
    title: "4. No Guarantee of Profits",
    content:
      "Trading involves high risk. Breakout Academy does not guarantee profits or successful trading results. All trades and decisions are made at the student's own risk.",
  },
  {
    title: "5. Third-Party Account Handling",
    content:
      "If a student allows any third party (mentor, staff, or others) access to their trading account, it is entirely their own responsibility. Breakout Academy is not liable for any loss or actions taken.",
  },
  {
    title: "6. Authorized Payments Only",
    content:
      "Payments must be made only through official Breakout Academy payment methods. The academy is not responsible for money paid to unauthorized individuals or third parties without written approval.",
  },
  {
    title: "7. Online Classes & Attendance",
    content:
      "All classes are conducted online. Regular attendance is expected. Missed sessions do not qualify for refunds.",
  },
  {
    title: "8. Code of Conduct",
    content:
      "The following are strictly prohibited: sharing trading tips, abusive or disrespectful behavior, copyright or content violations. Violation of these rules will result in immediate removal without refund.",
  },
  {
    title: "9. Privacy & Data",
    content:
      "We collect minimal personal information for communication and payment purposes. Breakout Academy does not sell or misuse personal data.",
  },
  {
    title: "10. Intellectual Property",
    content:
      "All course materials are the intellectual property of Breakout Academy. Sharing, copying, recording, or reselling content without permission is prohibited.",
  },
  {
    title: "11. Governing Law",
    content:
      "These Terms & Conditions are governed by Indian law. Any disputes shall fall under Indian jurisdiction.",
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-muted-foreground text-sm mb-12">
              Breakout Academy — Please read carefully before enrolling.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="font-display font-semibold text-lg mb-2">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6"
          >
            <h3 className="font-display font-semibold mb-2">Final Consent</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              By enrolling or making a payment, you confirm that you have read, understood, and agreed to these Terms & Conditions. For any clarification, contact official support before enrolling.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
