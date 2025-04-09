
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VisionSection from "@/components/VisionSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";
import MotherStory from "@/components/MotherStory";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VisionSection />
        <ProgramsSection />
        <MotherStory />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
