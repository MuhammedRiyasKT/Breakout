import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-surface text-dark-surface-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display font-bold text-xl mb-3">
              <span className="text-primary">BREAKOUT</span> ACADEMY
            </h3>
            <p className="text-dark-surface-foreground/60 text-sm leading-relaxed">
              One-to-One Stock Market Training. Personalized, practical education for serious learners.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-dark-surface-foreground/60 hover:text-primary transition-colors">Home</Link>
              <Link to="/contact" className="block text-sm text-dark-surface-foreground/60 hover:text-primary transition-colors">Contact</Link>
              <Link to="/terms" className="block text-sm text-dark-surface-foreground/60 hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-dark-surface-foreground/60">
              <p>academybreakout@gmail.com</p>
              <p>+91 88911 49827</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 mt-10 pt-6 text-center">
          <p className="text-xs text-dark-surface-foreground/40">
            © {new Date().getFullYear()} Breakout Academy. All rights reserved. Trading involves risk. This is education, not investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
