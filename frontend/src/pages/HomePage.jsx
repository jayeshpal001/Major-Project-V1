import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import HowItWorks from "../components/sections/HowItWorks";
import MentorsSection from "../components/sections/MentorsSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";
// import NewsletterSection from "../components/sections/NewsletterSection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <div className="scroll-smooth w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <MentorsSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CtaSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </div>
  );
}