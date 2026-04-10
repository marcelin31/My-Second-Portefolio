import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface Experience {
  company: string;
  role: { fr: string; en: string };
  period: { fr: string; en: string };
  location: { fr: string; en: string };
  type: { fr: string; en: string };
  tags: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Pandore",
    role: { fr: "Stagiaire en Design Graphique", en: "Graphic Design Intern" },
    period: { fr: "Juillet — Septembre 2024", en: "July — September 2024" },
    location: { fr: "Sur site", en: "On-site" },
    type: { fr: "Stage", en: "Internship" },
    tags: ["Graphic Design", "Photoshop", "Canva"],
  },
  {
    company: "EliscoTechnova",
    role: { fr: "Développement du premier site E-commerce (WordPress)", en: "First E-commerce Website Development (WordPress)" },
    period: { fr: "Septembre — Novembre 2024", en: "September — November 2024" },
    location: { fr: "À distance", en: "Remote" },
    type: { fr: "Freelance", en: "Freelance" },
    tags: ["WordPress", "E-commerce", "Web Dev"],
  },
  {
    company: "Cabinet Robert Zane",
    role: { fr: "Développement du site WordPress (Cabinet d'avocats)", en: "WordPress Website Development (Law Firm)" },
    period: { fr: "Janvier — Mars 2025", en: "January — March 2025" },
    location: { fr: "À distance", en: "Remote" },
    type: { fr: "Freelance", en: "Freelance" },
    tags: ["WordPress", "Web Design", "Legal"],
  },
  {
    company: "Corna Communication",
    role: { fr: "Community Manager (Bénévolat)", en: "Community Manager (Volunteer)" },
    period: { fr: "Mars — Juillet 2025", en: "March — July 2025" },
    location: { fr: "À distance", en: "Remote" },
    type: { fr: "Bénévolat", en: "Volunteer" },
    tags: ["Social Media", "Content Strategy", "Community"],
  },
  {
    company: "Concours inter-universitaire organisé par CS-QUARED",
    role: { fr: "Conception UX UI de l'application Mobile et Web", en: "UX UI Design for Mobile and Web Application" },
    period: { fr: "Avril — Juin 2025", en: "April — June 2025" },
    location: { fr: "Hybride", en: "Hybrid" },
    type: { fr: "Concours", en: "Competition" },
    tags: ["Figma", "WordPress", "Dev web"],
  },
  {
    company: "Digitalisation des processus fonciers togolais",
    role: { fr: "Designer UX/UI · Chef de produit · Manager Marketing", en: "UX/UI Designer · Product Manager · Marketing Manager" },
    period: { fr: "Juin 2025 — Présent", en: "June 2025 — Present" },
    location: { fr: "Temps partiel", en: "Part-time" },
    type: { fr: "Projet", en: "Project" },
    tags: ["UX/UI", "Product Management", "Marketing", "GovTech"],
    current: true,
  },
  {
    company: "CoTIA — ScAI_Tutor",
    role: { fr: "Designer UX/UI — Application mobile éducative (IA intégrée)", en: "UX/UI Designer — Educational Mobile App (AI-powered)" },
    period: { fr: "Mai — Décembre 2025", en: "May — December 2025" },
    location: { fr: "À distance", en: "Remote" },
    type: { fr: "Contrat", en: "Contract" },
    tags: ["UX/UI", "Mobile Design", "EdTech", "AI"],
    current: true,
  },
  {
    company: "Edomatch",
    role: { fr: "Assistant Chef de Projet Digital · Product Manager · Emailing Marketing · UX", en: "Digital Project Management Assistant · Product Manager · Email Marketing · UX" },
    period: { fr: "Octobre 2025 — Avril 2026", en: "October 2025 — April 2026" },
    location: { fr: "Sur site", en: "On-site" },
    type: { fr: "CDD", en: "Fixed-term" },
    tags: ["Product Management", "Email Marketing", "UX", "Apps Testing", "Content Writing"],
    current: true,
  },
];

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding bg-background" data-testid="experience-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ffcc29] text-sm font-semibold tracking-widest uppercase">
            {language === "fr" ? "...Expériences..." : "My Journey"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mt-2">
            {t("exp.title")}
          </h2>
          <div className="w-16 h-1 bg-[#ffcc29] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ffcc29] via-[#2a3f54]/30 to-transparent" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex gap-6 md:gap-0 mb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                data-testid={`experience-${i}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 z-10">
                  <div className={`w-5 h-5 rounded-full border-2 border-[#ffcc29] flex items-center justify-center ${exp.current ? "bg-[#ffcc29]" : "bg-background"}`}>
                    {exp.current && <div className="w-2 h-2 rounded-full bg-[#2a3f54]" />}
                  </div>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-[#ffcc29]/30 animate-ping" />
                  )}
                </div>

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                  <motion.div
                    whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(42,63,84,0.15)" }}
                    className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-[#ffcc29]/40"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-foreground text-base leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-[#2a3f54] dark:text-[#ffcc29] font-semibold text-sm mt-1 leading-snug">
                          {language === "fr" ? exp.role.fr : exp.role.en}
                        </p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#2a3f54]/10 dark:bg-[#ffcc29]/10 text-[#2a3f54] dark:text-[#ffcc29] whitespace-nowrap flex-shrink-0">
                        {language === "fr" ? exp.type.fr : exp.type.en}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-muted-foreground text-xs mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {language === "fr" ? exp.period.fr : exp.period.en}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {language === "fr" ? exp.location.fr : exp.location.en}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-[#2a3f54]/8 dark:bg-white/8 border border-[#2a3f54]/15 dark:border-white/15 text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
