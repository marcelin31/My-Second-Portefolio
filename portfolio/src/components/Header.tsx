import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { LanguageToggle } from "@/components/language-toggle";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.projects", href: "#projects" },

  { key: "nav.contact", href: "#contact" },
];

export default function Header() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "experience", "projects", "certifications", "references", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2a3f54]/95 backdrop-blur-md shadow-lg"
          : "bg-[#2a3f54]"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer z-50"
            onClick={() => scrollTo("#home")}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/Imgs/profil.png"
              alt="Marcelin Kotche"
              className="w-10 h-10 rounded-full object-cover scale-x-[-1]"
            />
            <span className="hidden sm:block text-white font-semibold text-lg tracking-wide">
              Marcelin <span className="text-[#ffcc29]">KOTCHE</span>
            </span>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map(({ key, href }) => (
              <button
                key={key}
                onClick={() => scrollTo(href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  activeSection === href.replace("#", "")
                    ? "text-[#ffcc29]"
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`nav-link-${key}`}
              >
                {t(key)}
                {activeSection === href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ffcc29]"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              data-testid="theme-toggle"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a
              href="/CV_KOTCHE_MARCELIN_MPN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#ffcc29] text-[#ffcc29] hover:bg-[#ffcc29] hover:text-[#2a3f54] transition-all duration-200 text-sm font-semibold"
              data-testid="cv-download"
            >
              <Download size={14} />
              CV
            </a>
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#1e2f40] border-t border-white/10"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ key, href }) => (
                <button
                  key={key}
                  onClick={() => { scrollTo(href); setMobileOpen(true); }}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === href.replace("#", "")
                      ? "bg-[#ffcc29]/10 text-[#ffcc29]"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t(key)}
                </button>
              ))}
              <a
                href="/CV_KOTCHE_MARCELIN_MPN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-[#ffcc29]/50 text-[#ffcc29] text-sm font-semibold mt-2"
              >
                <Download size={14} />
                CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
