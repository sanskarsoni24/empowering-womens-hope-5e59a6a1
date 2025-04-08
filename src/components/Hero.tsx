
import { Button } from "@/components/ui/button";
import BilingualText from "./BilingualText";

const Hero = () => {
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
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-pink-dark hover:bg-pink text-white px-8 py-6 text-lg">
              Get Support
            </Button>
            <Button variant="outline" className="border-purple hover:bg-purple-light text-purple-dark px-8 py-6 text-lg">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
