
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsSection from "@/components/ProgramsSection";

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-dark">
                Our Programs
              </h1>
              
              <p className="text-xl text-gray-700">
                Explore the various support programs and resources we offer to breast cancer patients and survivors.
              </p>
            </div>
          </div>
        </section>
        
        <ProgramsSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-pink-dark">
                How to Join Our Programs
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Participating in our support programs is simple and free. We welcome all breast cancer 
                patients, survivors, and their families to join our community.
              </p>
              
              <div className="bg-purple-light/40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-dark">
                  Get Started Today
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Email us at <span className="font-medium">support@cancercareforher.org</span> or 
                  call <span className="font-medium">+91 123 456 7890</span> to join any of our programs.
                </p>
                
                <p className="text-gray-700">
                  All our support services are provided completely free of charge to those affected by breast cancer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
