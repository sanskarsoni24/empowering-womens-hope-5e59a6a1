
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface BilingualTextProps {
  english: string;
  hindi: string;
  className?: string;
  englishClassName?: string;
  hindiClassName?: string;
}

const BilingualText = ({
  english,
  hindi,
  className,
  englishClassName,
  hindiClassName
}: BilingualTextProps) => {
  const { isHindi } = useLanguage();

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className={cn(isHindi ? "text-sm opacity-75" : "", englishClassName)}>
        {english}
      </div>
      <div className={cn("hindi-text", isHindi ? "font-bold text-lg" : "", hindiClassName)}>
        {hindi}
      </div>
    </div>
  );
};

export default BilingualText;
