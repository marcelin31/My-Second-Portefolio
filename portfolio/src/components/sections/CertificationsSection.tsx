import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Eye } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface Certification {
  id: number;
  title: { fr: string; en: string };
  date: string;
  place: { fr: string; en: string };
  image: string;
  pdfUrl: string;
}

const certifications: Certification[] = [

  {
    id: 3,
    title: { fr: "Attestation Camp Nehemiah Education", en: "Nehemiah Education Camp Certificate" },
    date: "2024",
    place: { fr: "Camp Nehemiah Education", en: "Nehemiah Education Camp" },
    image: "/certifications/Attestation_Camp_Nehemiah.jpeg",
    pdfUrl: "/certifications/Attestation_Camp_Nehemiah.pdf",
  },
  {
    id: 4,
    title: { fr: "Stage en Graphisme", en: "Graphic Design Internship" },
    date: "2024",
    place: { fr: "Pandore", en: "Pandore" },
    image: "/certifications/Attestation_Stage_Graphisme.png",
    pdfUrl: "/certifications/Attestation_Stage_Graphisme.pdf",
  },
  {
    id: 5,
    title: { fr: "Email Marketing", en: "Email Marketing" },
    date: "2024",
    place: { fr: "Brevo Accademy", en: "Brevo Accademy" },
    image: "/certifications/Certifiacat_Emailing_Marketing.png",
    pdfUrl: "/certifications/Certifiacat_Emailing_Marketing.pdf",
  },
  {
    id: 6,
    title: { fr: "Production de Contenus Media", en: "Media Content Production" },
    date: "2024",
    place: { fr: "ATINGI - EN LIGNE", en: "ATINGI - ONLINE" },
    image: "/certifications/CERTIFICAT PRODUCTION DE CONTENUS MEDIA.png",
    pdfUrl: "/certifications/CERTIFICAT PRODUCTION DE CONTENUS MEDIA.pdf",
  },
];

export default function CertificationsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate certifications for seamless loop
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <section id="certifications" className="section-padding bg-background" data-testid="certifications-section">
      <div className="max-w-full mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <span className="text-[#ffcc29] text-sm font-semibold tracking-widest uppercase">
            {language === "fr" ? "...Formations..." : "My Achievements"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mt-2">
            {t("certifications.title")}
          </h2>
          <div className="w-16 h-1 bg-[#ffcc29] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Certifications Carousel - RTL */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-fit"
            initial={{ x: 0 }}
            animate={isPaused ? {} : { x: -1400 }}
            transition={{
              duration: 40,
              repeat: isPaused ? 0 : Infinity,
              ease: "linear",
            }}
          >
            {duplicatedCerts.map((cert, idx) => (
              <motion.div
                key={`${cert.id}-${idx}`}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-72 group cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative h-80 bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[#ffcc29]/40">
                  {/* Image Container */}
                  <div className="w-full h-full relative bg-[#2a3f54]/10">
                    <img
                      src={cert.image}
                      alt={language === "fr" ? cert.title.fr : cert.title.en}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay - appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a3f54] via-[#2a3f54]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      {/* Certification Info */}
                      <div className="mb-4">
                        <h3 className="font-display font-bold text-foreground text-base leading-tight mb-2">
                          {language === "fr" ? cert.title.fr : cert.title.en}
                        </h3>
                        <div className="flex flex-col gap-1 text-xs text-white/70">
                          <span>📅 {cert.date}</span>
                          <span>📍 {language === "fr" ? cert.place.fr : cert.place.en}</span>
                        </div>
                      </div>

                      {/* View Button */}
                      <motion.a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-[#ffcc29] text-[#2a3f54] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#ffcc29]/90 transition-colors w-full"
                      >
                        <Eye size={16} />
                        {t("certifications.view")}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
