
import BilingualText from "./BilingualText";
import { Heart } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 right-20 w-64 h-64 bg-pink-light/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-20 w-80 h-80 bg-purple-light/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-light/20 p-3 rounded-full mb-6">
            <Heart size={32} className="text-pink-dark animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-dark">Our Vision</h2>
          
          <BilingualText 
            english="Supporting Women"
            hindi="महिलाओं का सशक्तिकरण, समर्थन की शक्ति"
            className="mb-8"
            englishClassName="text-2xl md:text-3xl font-semibold text-pink-dark"
            hindiClassName="text-xl md:text-2xl font-medium text-pink-dark"
          />
          
          <div className="bg-gradient-to-r from-pink-light/20 to-purple-light/20 p-8 rounded-lg shadow-sm hover-lift">
            <p className="text-lg text-gray-700 mb-4">
              We envision a future where every woman facing breast cancer in India has access to the support, 
              resources, and community she needs on her healing journey.
            </p>
            
            <p className="text-lg text-gray-700 hindi-text">
              हम एक ऐसे भविष्य की कल्पना करते हैं जहां भारत में स्तन कैंसर का सामना करने वाली हर महिला को 
              अपनी उपचार यात्रा पर आवश्यक समर्थन, संसाधन और समुदाय तक पहुंच हो।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
