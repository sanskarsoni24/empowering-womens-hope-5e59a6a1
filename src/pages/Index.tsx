
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VisionSection from "@/components/VisionSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";
import MotherStory from "@/components/MotherStory";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VisionSection />
        <ProgramsSection />
        <TestimonialsSection />
        <MotherStory />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
