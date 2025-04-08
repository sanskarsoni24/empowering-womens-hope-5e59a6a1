
import { cn } from "@/lib/utils";

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
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className={cn("", englishClassName)}>{english}</div>
      <div className={cn("hindi-text", hindiClassName)}>{hindi}</div>
    </div>
  );
};

export default BilingualText;
