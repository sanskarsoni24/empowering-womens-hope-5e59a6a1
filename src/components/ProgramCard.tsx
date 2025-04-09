
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import BilingualText from "./BilingualText";

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
        <div className="relative min-h-[180px]">
          <p className="text-gray-700 text-center mb-4">{description}</p>
          <p className="text-gray-700 text-center hindi-text text-sm mt-2">{descriptionHindi}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
