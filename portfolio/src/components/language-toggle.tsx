import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="font-bold text-sm tracking-widest px-3"
    >
      <span className={language === "fr" ? "text-primary dark:text-primary" : "text-muted-foreground"}>FR</span>
      <span className="mx-1 text-muted-foreground">|</span>
      <span className={language === "en" ? "text-primary dark:text-primary" : "text-muted-foreground"}>EN</span>
    </Button>
  );
}
