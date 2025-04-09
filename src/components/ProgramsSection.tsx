
import { Book, Users, FileText, Calendar } from "lucide-react";
import BilingualText from "./BilingualText";
import ProgramCard from "./ProgramCard";

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-light/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-light/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-dark">
            Our Support Programs
          </h2>
          
          <BilingualText
            english="Empowering Services Available"
            hindi="हमारे सहायता कार्यक्रम सशक्तिकरण सेवाएँ उपलब्ध हैं"
            englishClassName="text-xl font-medium text-pink-dark"
            hindiClassName="text-lg font-medium text-pink-dark"
            className="mb-6"
          />
          
          <div className="max-w-3xl mx-auto">
            <BilingualText
              english="Our support programs are designed to provide a safe space for breast cancer patients and survivors to connect, access resources, and share experiences. We offer online support groups, informative resources, survivor stories, and more."
              hindi="हमारे सहायता कार्यक्रम विशेष रूप से स्तन कैंसर के रोगियों और उत्तरजीवियों के लिए एक सुरक्षित स्थान प्रदान करने के लिए बनाए गए हैं, जहाँ वे जुड़ सकें, संसाधनों तक पहुँच प्राप्त कर सकें और अपने अनुभव साझा कर सकें। हम ऑनलाइन सहायता समूह, जानकारीपूर्ण संसाधन, उत्तरजीवियों की कहानियाँ और बहुत कुछ प्रदान करते हैं।"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProgramCard
            title="Online Support"
            titleHindi="ऑनलाइन सहायता"
            subtitle="Virtual Connections"
            description="Join our online support groups designed to offer a supportive community and valuable resources to those fighting against breast cancer. Connect, share, and find solace with others on similar paths."
            descriptionHindi="हमारे ऑनलाइन सहायता समूहों से जुड़ें, जो स्तन कैंसर से लड़ने वालों के लिए एक सहायक समुदाय और मूल्यवान संसाधन प्रदान करने के लिए डिज़ाइन किए गए हैं। जुड़ें, साझा करें, और समान संघर्षों से गुज़र रहे लोगों के साथ संबल पाएँ।"
            icon={<Users size={48} className="text-pink-dark" />}
          />
          
          <ProgramCard
            title="Resource Sharing"
            titleHindi="संसाधन साझा करना"
            subtitle="Educational Materials"
            description="Access our library of informative resources covering various aspects of breast cancer, treatment options, survivor stories, and tips for coping. Stay informed and empowered throughout your journey."
            descriptionHindi="हमारे संसाधन पुस्तकालय तक पहुँच प्राप्त करें, जहाँ स्तन कैंसर, उपचार विकल्प, उत्तरजीवियों की कहानियाँ, और सामना करने के सुझावों से संबंधित महत्वपूर्ण जानकारी उपलब्ध है। अपनी यात्रा के दौरान जागरूक और सशक्त बने रहें।"
            icon={<FileText size={48} className="text-pink-dark" />}
          />
          
          <ProgramCard
            title="Survivor Stories"
            titleHindi="उत्तरजीवी कहानियाँ"
            subtitle="Inspiring Narratives"
            description="Read real-life survivor stories that provide hope, courage, and inspiration. These stories remind us that we are not alone in our battles and that there is always light at the end of the tunnel."
            descriptionHindi="वास्तविक जीवन के उत्तरजीवियों की कहानियाँ पढ़ें जो आशा, साहस और प्रेरणा देती हैं। ये कहानियाँ हमें याद दिलाती हैं कि हम अपनी लड़ाई में अकेले नहीं हैं और हर सुरंग के अंत में रोशनी होती है।"
            icon={<Book size={48} className="text-pink-dark" />}
          />
          
          <ProgramCard
            title="Online Workshops"
            titleHindi="ऑनलाइन कार्यशालाएँ"
            subtitle="Educational Sessions"
            description="Participate in our online workshops covering various topics related to breast cancer, survivorship, emotional well-being, and self-care. Gain insights, practical advice, and support from our experts."
            descriptionHindi="हमारी ऑनलाइन कार्यशालाओं में भाग लें, जहाँ स्तन कैंसर, उत्तरजीविता, भावनात्मक कल्याण और आत्म-देखभाल से जुड़े विभिन्न विषयों पर चर्चा की जाती है। हमारे विशेषज्ञों से ज्ञान, व्यावहारिक सलाह और सहायता प्राप्त करें।"
            icon={<Calendar size={48} className="text-pink-dark" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
