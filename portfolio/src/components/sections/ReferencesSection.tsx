import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface Reference {
  id: number;
  name: string;
  profession: { fr: string; en: string };
  phone: string;
  linkedin: string;
  image: string;
}

const references: Reference[] = [
  {
    id: 1,
    name: "RENE MASSOU",
    profession: { fr: "CEO DE LA COOPERATIVE LE SUCCES", en: "CEO OF SUCCESS COOPERATIVE" },
    phone: "+228 93 63 15 42",
    linkedin: "https://linkedin.com/in/kodjovi-rené-massou-527011372",
    image: "/references/Ref.1.png",
  },
  {
    id: 2,
    name: "CHARLES DZADU",
    profession: { fr: "MANAGER DE L'EQUIPE TECH CHEZ EDOMATCH", en: "LEAD SOFTWARE ENGINEER AT EDOMATCH" },
    phone: "+228 92 56 99 18",
    linkedin: "https://linkedin.com/in/charlesdzadu",
    image: "/references/Ref.2.png",
  },
  {
    id: 3,
    name: "CHRIST-JOEL APETOGBO ",
    profession: { fr: "CEO DE HUSTLERS CORPORATION ", en: "CEO OF HUSTLERS CORPORATION" },
    phone: "+228 79 79 54 14",
    linkedin: "https://linkedin.com/in/christapetogbo",
    image: "/references/Ref.3.png",
  },
  {
    id: 4,
    name: "JULIEN ADOBOE",
    profession: { fr: "CO-FONDATEUR DE HUSTLERS CORPORATION", en: "CO-FOUNDER OF HUSTLERS CORPORATION" },
    phone: "+228 70 14 61 80 ",
    linkedin: "https://linkedin.com/in/julien-comlan-adoboe-76bb47396",
    image: "/references/Ref.4.png",
  },
  {
    id: 5,
    name: "CLARISSE ESSE",
    profession: { fr: "CO-FONDATEUR DE HUSTLERS CORPORATION", en: "CO-FOUNDER OF HUSTLERS CORPORATION" },
    phone: "+228 96 77 06 02",
    linkedin: "https://linkedin.com/in/clarisse-akouto-esse-377824327",
    image: "/references/Ref.5.png",
  },
];

export default function ReferencesSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate references for seamless loop
  const duplicatedRefs = [...references, ...references];

  return (
    <section id="references" className="section-padding bg-background" data-testid="references-section">
      <div className="max-w-full mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <span className="text-[#ffcc29] text-sm font-semibold tracking-widest uppercase">
            {language === "fr" ? "...Collaborateurs..." : "My Network"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mt-2">
            {t("references.title")}
          </h2>
          <div className="w-16 h-1 bg-[#ffcc29] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* References Carousel - LTR (opposite direction) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-fit"
            initial={{ x: -1400 }}
            animate={isPaused ? {} : { x: 0 }}
            transition={{
              duration: 40,
              repeat: isPaused ? 0 : Infinity,
              ease: "linear",
            }}
          >
            {duplicatedRefs.map((ref, idx) => (
              <motion.div
                key={`${ref.id}-${idx}`}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-72 group cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative h-96 bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[#ffcc29]/40 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 bg-[#2a3f54]/10 overflow-hidden flex-shrink-0">
                    <img
                      src={ref.image}
                      alt={ref.name}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    {/* Name and profession */}
                    <div className="mb-4">
                      <h3 className="font-display font-bold text-foreground text-base leading-tight">
                        {ref.name}
                      </h3>
                      <p className="text-[#2a3f54] dark:text-[#ffcc29] font-semibold text-sm mt-1">
                        {language === "fr" ? ref.profession.fr : ref.profession.en}
                      </p>
                    </div>

                    {/* Hover Info */}
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Phone */}
                      <div className="flex items-center gap-2 text-xs text-white/70 bg-[#2a3f54]/20 p-2 rounded-lg">
                        <Phone size={14} />
                        <span>{ref.phone}</span>
                      </div>

                      {/* LinkedIn Button */}
                      <motion.a
                        href={ref.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#005885] transition-colors w-full"
                      >
                        <Linkedin size={16} />
                        {t("references.linkedin")}
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
