
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import BilingualText from "./BilingualText";
import { motion } from "framer-motion";

interface ProgramCardProps {
  title: string;
  titleHindi: string;
  subtitle: string;
  subtitleHindi?: string;
  description: string;
  descriptionHindi: string;
  icon: React.ReactNode;
}

const ProgramCard = ({
  title,
  titleHindi,
  subtitle,
  subtitleHindi,
  description,
  descriptionHindi,
  icon
}: ProgramCardProps) => {
  return (
    <Card className="border-t-4 border-t-pink h-full overflow-hidden group hover-lift hover-glow transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-4 text-pink-dark group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <BilingualText
          english={title}
          hindi={titleHindi}
          englishClassName="text-xl font-bold text-center text-pink-dark"
          hindiClassName="text-lg font-medium text-center text-pink-dark"
        />
        
        {subtitle && (
          <BilingualText
            english={subtitle}
            hindi={subtitleHindi || ""}
            englishClassName="text-lg font-medium text-center text-purple-dark mt-1"
            hindiClassName={subtitleHindi ? "text-base font-medium text-center text-purple-dark" : "hidden"}
          />
        )}
      </CardHeader>
      
      <CardContent>
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-500 transform group-hover:-translate-y-full">
            <p className="text-gray-700 text-center mb-2">{description}</p>
          </div>
          
          <div className="absolute top-0 left-0 w-full transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
            <p className="text-gray-700 text-center hindi-text text-sm">{descriptionHindi}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
