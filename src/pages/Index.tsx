import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WelcomePopup />
      <HeroSection />
      <WhySection />
      <WhatYouLearnSection />
      <HowItWorksSection />
      <DisclaimerSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
