
import { Button } from "@/components/ui/button";
import BilingualText from "./BilingualText";
import { Mail, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleGetSupport = () => {
    window.location.href = "tel:7627093032";
  };

  return (
    <div className="gradient-bg py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-light/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-purple-light/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left max-w-2xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pink-dark fade-in">
              Cancer Care for Her
            </h1>
            
            <BilingualText 
              english="Supporting Women"
              hindi="महिलाओं का सशक्तिकरण, समर्थन की शक्ति"
              className="mb-8"
              englishClassName="text-2xl md:text-3xl font-semibold text-purple-dark slide-in"
              hindiClassName="text-xl md:text-2xl font-medium text-purple-dark slide-in"
            />
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              Providing support, resources, and community for breast cancer patients 
              and survivors across India. No one should face this journey alone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-pink-dark hover:bg-pink text-white px-8 py-6 text-lg flex items-center gap-2 hover-glow"
                onClick={handleGetSupport}
              >
                <Phone size={20} className="shrink-0" />
                <span>Get Support</span>
              </Button>
              
              <Link to="/about">
                <Button 
                  variant="outline"
                  className="border-purple-dark text-purple-dark hover:bg-purple-light/10 px-8 py-6 text-lg flex items-center gap-2"
                >
                  <Heart size={20} className="shrink-0" />
                  <span>Learn More</span>
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
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
          
          <div className="w-full max-w-md animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-light/80 to-purple-light/80 rounded-lg transform rotate-3"></div>
              <img 
                src="/lovable-uploads/cf6b32c2-082f-4724-a100-e711a2dde372.png" 
                alt="Cancer Care For Her" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10 transform -rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
