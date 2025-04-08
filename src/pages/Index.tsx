
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VisionSection from "@/components/VisionSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VisionSection />
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
