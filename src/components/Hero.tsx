
import { Button } from "@/components/ui/button";
import BilingualText from "./BilingualText";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  const handleGetSupport = () => {
    window.location.href = "tel:7627093032";
  };

  return (
    <div className="gradient-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-dark">
            Cancer Care for Her
          </h1>
          
          <BilingualText 
            english="Supporting Women"
            hindi="महिलाओं का सशक्तिकरण, समर्थन की शक्ति"
            className="mb-8"
            englishClassName="text-2xl md:text-3xl font-semibold text-purple-dark"
            hindiClassName="text-xl md:text-2xl font-medium text-purple-dark"
          />
          
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Providing support, resources, and community for breast cancer patients and survivors across India.
          </p>
          
          <div className="flex justify-center">
            <Button 
              className="bg-pink-dark hover:bg-pink text-white px-8 py-6 text-lg flex items-center gap-2"
              onClick={handleGetSupport}
            >
              <Phone size={20} className="shrink-0" />
              <span>Get Support</span>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center text-purple-dark">
              <Phone size={20} className="mr-2" />
              <span className="font-medium">7627093032</span>
            </div>
            <div className="flex items-center text-purple-dark">
              <Mail size={20} className="mr-2" />
              <span className="font-medium">sanskarsoni.iitd@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
