import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/marcelin-k-kotche-59b75429a", label: "LinkedIn", color: "#0A66C2" },
  { icon: FaFacebook, href: "https://www.facebook.com/share/196azwbghb/", label: "Facebook", color: "#1877F2" },
  { icon: FaInstagram, href: "https://www.instagram.com/marcelinkotche", label: "Instagram", color: "#E1306C" },
  { icon: FaWhatsapp, href: "https://wa.me/22870068377", label: "WhatsApp", color: "#25D366" },
  { icon: FaGithub, href: "https://github.com/marcelin31", label: "GitHub", color: "#ffffff" },
];

const floatingBadges = [
  { label: "Web Design", x: "-120px", y: "10px", delay: 0 },
  { label: "UX / UI", x: "100px", y: "-80px", delay: 0.2 },
  { label: "Figma", x: "120px", y: "110px", delay: 0.4 },
  { label: "Branding", x: "-110px", y: "130px", delay: 0.6 },
  { label: "Front-end", x: "30px", y: "170px", delay: 0.8 },
];

const taglineKeys = ["hero.tagline1", "hero.tagline2"];

export default function HeroSection() {
  const { t } = useLanguage();
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex(prev => (prev + 1) % taglineKeys.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a2d42]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,204,41,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,41,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#ffcc29]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#2a3f54]/80 blur-[100px] pointer-events-none" />

      {/* Gold diagonal accent bar */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#ffcc29]/30 to-transparent pointer-events-none hidden lg:block" style={{ right: "42%" }} />

      {/* Fixed social sidebar (desktop) */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, x: 3 }}
            className="w-8 h-8 rounded-full bg-white/8 backdrop-blur hover:bg-[#ffcc29] flex items-center justify-center text-white/50 hover:text-[#2a3f54] transition-all duration-200 shadow"
            aria-label={label}
          >
            <Icon size={14} />
          </motion.a>
        ))}
        <div className="w-px h-14 bg-white/15 mt-1" />
      </div>

      {/* ─── Main layout ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen">

        {/* ── LEFT column ── */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-8 bg-[#ffcc29]/10 border border-[#ffcc29]/25 rounded-full px-4 py-1.5 pt-[3px]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#ffcc29] text-xs font-semibold tracking-widest uppercase">
              {t("hero.available") || "Disponible pour collaborer"}
            </span>
          </motion.div>

          {/* Name block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5"
          >
            <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
              Marcelin K.
            </p>
            <h1 className="font-display font-black leading-none tracking-tight">
              <span
                className="block text-[clamp(3.5rem,9vw,7rem)] text-transparent"
                style={{
                  WebkitTextStroke: "2px rgba(255,255,255,0.85)",
                }}
              >
                KOTCHE
              </span>
              <span className="block text-[clamp(2rem,5vw,3.5rem)] text-[#ffcc29] font-bold tracking-wide mt-1">
                KKM
              </span>
            </h1>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, origin: 0 }}
            className="w-16 h-1 bg-[#ffcc29] rounded-full mb-6 origin-left"
          />

          {/* Animated tagline */}
          <div className="h-8 mb-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="text-white/60 text-base md:text-lg font-light tracking-wide"
              >
                {t(taglineKeys[taglineIndex])}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Spec tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["Web Design", "UX/UI", "Graphic Design", "Front-end", "Digital Com."].map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/60 border border-white/15 rounded-full px-3 py-1 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-start gap-3 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(255,204,41,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-7 py-3.5 bg-[#ffcc29] text-[#2a3f54] rounded-xl font-bold text-sm tracking-wide shadow-lg hover:bg-yellow-300 transition-all"
            >
              <ExternalLink size={15} />
              {t("hero.contact")}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/CV_KOTCHE_MARCELIN_MPN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 font-semibold text-sm tracking-wide hover:border-[#ffcc29]/60 hover:text-[#ffcc29] transition-all"
            >
              <Download size={15} />
              {t("hero.cv") || "Télécharger CV"}
            </motion.a>
          </motion.div>

          {/* Mobile socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 xl:hidden"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-[#ffcc29] flex items-center justify-center text-white/50 hover:text-[#2a3f54] transition-all"
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT column — Avatar card ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0 hidden lg:block"
        >
          {/* Floating badges */}
          {floatingBadges.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + badge.delay }}
              style={{ position: "absolute", left: badge.x, top: badge.y }}
              className="bg-[#1e3347] border border-[#ffcc29]/30 rounded-full px-4 py-1.5 text-[#ffcc29] text-xs font-semibold tracking-wide shadow-lg whitespace-nowrap z-20"
            >
              {badge.label}
            </motion.div>
          ))}

          {/* Avatar card */}
          <div className="relative w-72 h-72">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #ffcc29, transparent 60%, #ffcc29 100%)",
                padding: "2px",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#1a2d42]" />
            </motion.div>

            {/* Inner card */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#2a3f54] to-[#1e3347] border border-[#ffcc29]/10 flex flex-col items-center justify-center shadow-2xl">
                {/* Profile image */}
                <img
                  src="/Imgs/profil.png"
                  alt="Marcelin Kotche"
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
              <p className="text-[#ffcc29] text-xs tracking-widest uppercase font-medium mt-0.5">..........</p>

              {/* Stats row */}
              <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10 w-full justify-center">
                <div className="text-center">
                  <p className="text-[#ffcc29] font-black text-lg leading-none">7+</p>
                  <p className="text-white/40 text-[10px] tracking-wide mt-0.5">Expériences</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-[#ffcc29] font-black text-lg leading-none">5+</p>
                  <p className="text-white/40 text-[10px] tracking-wide mt-0.5">Projets</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-[#ffcc29] font-black text-lg leading-none">3</p>
                  <p className="text-white/40 text-[10px] tracking-wide mt-0.5">Pays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location tag below card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1e3347] border border-white/10 rounded-full px-4 py-2 text-white/60 text-xs tracking-wide whitespace-nowrap shadow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t("hero.location")}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/35 hover:text-[#ffcc29] transition-colors cursor-pointer z-20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
