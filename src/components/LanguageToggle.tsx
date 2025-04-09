
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Globe size={16} />
          <span className="hidden sm:inline">{language === 'hindi' ? 'हिन्दी' : 'English'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('english')}>
          English {language === 'english' && '✓'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('hindi')}>
          हिन्दी (Hindi) {language === 'hindi' && '✓'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
