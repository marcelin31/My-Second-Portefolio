import { motion } from "framer-motion";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaHeart } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2a3f54] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#ffcc29] flex items-center justify-center font-display font-black text-[#2a3f54] text-lg">
            KKM
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">Marcelin KOTCHE</p>
            <p className="text-white/60 text-sm mt-1">{t("footer.location")}</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <motion.a
              href="https://www.facebook.com/share/196azwbghb/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffcc29" }}
              className="text-white/70 text-2xl transition-colors"
              data-testid="footer-facebook"
            >
              <FaFacebookSquare />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/marcelinkotche"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffcc29" }}
              className="text-white/70 text-2xl transition-colors"
              data-testid="footer-instagram"
            >
              <FaInstagramSquare />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/marcelin-k-kotche-59b75429a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffcc29" }}
              className="text-white/70 text-2xl transition-colors"
              data-testid="footer-linkedin"
            >
              <FaLinkedin />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-white/20" />

          <p className="text-white/50 text-sm text-center flex items-center gap-1.5 flex-wrap justify-center">
            Copyright &copy; 2026 — {t("footer.rights")} Marcelin K. KOTCHE 
          </p>
        </div>
      </div>
    </footer>
  );
}
