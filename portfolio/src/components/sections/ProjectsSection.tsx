import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

type Category = "all" | "platforms" | "design" | "comms";

interface Project {
  name: { fr: string; en: string };
  category: Exclude<Category, "all">;
  href?: string;
  comingSoon?: boolean;
  tags: string[];
}

const projects: Project[] = [
  { name: { fr: "Droit Juridique", en: "Legal Law" }, category: "platforms", href: "https://robertzaneavocat.fr/", tags: ["WordPress", "Law", "Website"] },
  { name: { fr: "Finance", en: "Finance" }, category: "platforms", href: "https://projet-twallet.42web.io/", tags: ["WordPress", "FinTech", "Website"] },
  { name: { fr: "Éducation", en: "Education" }, category: "platforms", href: "https://tinyurl.com/6ce8nz6w", tags: ["WordPress", "EdTech", "Website"] },
  { name: { fr: "E-commerce", en: "E-commerce" }, category: "platforms", href: "https://eliscotechnova.com", tags: ["WordPress", "E-commerce", "Website"] },
  { name: { fr: "Design Graphique", en: "Graphic Design" }, category: "design", href: "https://drive.google.com/drive/folders/1GRPddE84aYPLR9i3jD8LnF2TP4GnqKp2", tags: ["Photoshop", "Canva", "Branding"] },
  { name: { fr: "Montage Vidéo", en: "Video Editing" }, category: "design", href: "https://drive.google.com/drive/folders/18gGWug_4AkXq_z6xXb48Y442vFSty4au", tags: ["CapCut", "Premiere Pro", "Video"] },
  { name: { fr: "Stratégies de Communication", en: "Communication Strategies" }, category: "comms", comingSoon: true, tags: ["Strategy", "Planning", "Social Media"] },
  { name: { fr: "Emailing Marketing & Automation", en: "Email Marketing & Automation" }, category: "comms", comingSoon: true, tags: ["Brevo", "Automation", "Campaigns"] },
  { name: { fr: "Gestion de Projet", en: "Project Management" }, category: "comms", comingSoon: true, tags: ["Agile", "Product", "Strategy"] },
];

const filterButtons: { key: Category; fr: string; en: string }[] = [
  { key: "all", fr: "Tous", en: "All" },
  { key: "platforms", fr: "Plateformes", en: "Platforms" },
  { key: "design", fr: "Graphisme & Vidéo", en: "Design & Video" },
  { key: "comms", fr: "Com. Digitale", en: "Digital Comm." },
];

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-[#2a3f54]" data-testid="projects-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#ffcc29] text-sm font-semibold tracking-widest uppercase">
            {language === "fr" ? "Mes réalisations" : "What I've created"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-2">
            {t("proj.title")}
          </h2>
          <div className="w-16 h-1 bg-[#ffcc29] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filterButtons.map(({ key, fr, en }) => (
            <motion.button
              key={key}
              onClick={() => setActiveFilter(key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === key
                  ? "bg-[#ffcc29] text-[#2a3f54]"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
              data-testid={`filter-${key}`}
            >
              {language === "fr" ? fr : en}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={`${project.name.fr}-${project.category}`}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={!project.comingSoon ? { y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" } : {}}
                className={`relative group rounded-2xl bg-white/5 border border-white/10 p-6 transition-all duration-300 ${
                  !project.comingSoon ? "hover:border-[#ffcc29]/40 cursor-pointer" : "opacity-70"
                }`}
                data-testid={`project-card-${i}`}
              >
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#ffcc29]/80 uppercase tracking-wider">
                    {project.category === "platforms"
                      ? (language === "fr" ? "Plateforme" : "Platform")
                      : project.category === "design"
                      ? (language === "fr" ? "Graphisme" : "Design")
                      : (language === "fr" ? "Com. Digitale" : "Digital Comm.")}
                  </span>
                  {project.comingSoon ? (
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <Lock size={10} />
                      {t("proj.coming_soon")}
                    </span>
                  ) : (
                    <ExternalLink size={14} className="text-white/30 group-hover:text-[#ffcc29] transition-colors" />
                  )}
                </div>

                <h3 className="font-display font-bold text-white text-base mb-3 leading-tight group-hover:text-[#ffcc29] transition-colors duration-200">
                  {language === "fr" ? project.name.fr : project.name.en}
                </h3>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.href && !project.comingSoon && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffcc29] hover:gap-3 transition-all duration-200"
                    data-testid={`project-link-${i}`}
                  >
                    {language === "fr" ? "Découvrir" : "View project"}
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
