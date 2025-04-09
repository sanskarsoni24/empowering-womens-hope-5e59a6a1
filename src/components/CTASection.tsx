
import React from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BilingualText from "./BilingualText";

const CTASection = () => {
  const handleGetSupport = () => {
    window.location.href = "tel:7627093032";
  };

  return (
    <section className="py-16 banner-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We're Here For You
          </h2>
          
          <BilingualText
            english="Every Step of the Way"
            hindi="हर कदम पर आपके साथ"
            englishClassName="text-xl md:text-2xl mb-8"
            hindiClassName="text-lg md:text-xl mb-8"
          />
          
          <p className="mb-10 text-lg opacity-90">
            No one should face breast cancer alone. Our team is ready to provide the support, 
            resources, and community you need on your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-dark hover:bg-purple-light flex items-center gap-2 text-lg py-6"
              onClick={handleGetSupport}
            >
              <Phone size={20} />
              <span>Call Now: 762-709-3032</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 flex items-center gap-2 text-lg py-6"
            >
              <CalendarCheck size={20} />
              <span>Join a Support Group</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
