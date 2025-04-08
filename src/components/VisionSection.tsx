
import BilingualText from "./BilingualText";

const VisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-dark">Our Vision</h2>
          
          <BilingualText 
            english="Supporting Women"
            hindi="महिलाओं का सशक्तिकरण, समर्थन की शक्ति"
            className="mb-8"
            englishClassName="text-2xl md:text-3xl font-semibold text-pink-dark"
            hindiClassName="text-xl md:text-2xl font-medium text-pink-dark"
          />
          
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
    </section>
  );
};

export default VisionSection;
