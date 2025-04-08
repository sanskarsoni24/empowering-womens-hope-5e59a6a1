
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="card-hover border-t-4 border-t-pink h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-4 text-pink-dark">
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
        <BilingualText
          english={description}
          hindi={descriptionHindi}
          englishClassName="text-gray-700 text-center mb-2"
          hindiClassName="text-gray-700 text-center text-sm"
        />
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
