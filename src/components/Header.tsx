
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const handleLanguageToggle = () => {
    setLanguage(language === "zh-TW" ? "en" : "zh-TW");
  };
  
  return (
    <header className="w-full p-4 flex justify-between items-center glass-card rounded-b-2xl sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="text-xl font-medium text-morandi-text">旅館 In-Room Guide</h1>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleLanguageToggle}
          className="text-morandi-text bg-morandi-green/20 border-morandi-green/30 hover:bg-morandi-green/30"
        >
          {t("switchLang")}
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleTheme}
          className="text-morandi-text bg-morandi-green/20 border-morandi-green/30 hover:bg-morandi-green/30"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
