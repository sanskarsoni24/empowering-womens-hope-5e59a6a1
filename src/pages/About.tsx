
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BilingualText from "@/components/BilingualText";
import TeamMember from "@/components/TeamMember";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-dark">
                About Us
              </h1>
              
              <BilingualText
                english="Empowering breast cancer patients across with support, awareness, and vital services for hope and resilience."
                hindi="कैंसर मरीजों को समर्थन, जागरूकता और आवश्यक सेवाओं के माध्यम से सशक्त बनाना, ताकि वे आशा और दृढ़ता के साथ आगे बढ़ सकें।"
                englishClassName="text-xl md:text-2xl font-semibold text-pink-dark"
                hindiClassName="text-lg md:text-xl font-medium text-pink-dark"
                className="mb-8"
              />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <BilingualText
                english="We are a group of motivated people dedicated to supporting breast cancer patients across India, a country where breast cancer cases are on the rise. With over 200,000 new cases reported annually, we aim to provide essential, awareness, and emotional to those affected. Our mission is to empower patients with and connect them with vital services, fostering a community hope and resilience in the fight against this growing health challenge. Together, we can make a meaningful impact in the lives of countless individuals breast cancer patients."
                hindi="हम एक समर्पित समूह हैं जो भारत में स्तन कैंसर मरीजों का समर्थन करने के लिए प्रतिबद्ध हैं, जहाँ इस बीमारी के मामले तेजी से बढ़ रहे हैं। हर साल 2,00,000 से अधिक नए मामलों की रिपोर्ट की जाती है, और हमारा उद्देश्य प्रभावित लोगों को आवश्यक सहायता, जागरूकता और भावनात्मक संबल प्रदान करना है। हमारा मिशन मरीजों को सशक्त बनाना और उन्हें महत्वपूर्ण सेवाओं से जोड़ना है, जिससे इस बढ़ती स्वास्थ्य चुनौती के खिलाफ आशा और दृढ़ता का एक मजबूत समुदाय बनाया जा सके। एक साथ मिलकर, हम स्तन कैंसर मरीजों के जीवन में एक सार्थक बदलाव ला सकते हैं।"
                englishClassName="text-lg text-gray-700 mb-6"
                hindiClassName="text-base text-gray-700 mb-6"
              />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-purple-light/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-dark">
              Meet The Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TeamMember
                name="Sanskar Soni"
                nameHindi="संस्कार सोनी"
                role="Co-Founder"
                linkedIn="https://linkedin.com/"
              />
              
              <TeamMember
                name="Ananya Misra"
                nameHindi="अनन्या मिश्रा"
                role="Co-Founder"
                linkedIn="https://linkedin.com/"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
