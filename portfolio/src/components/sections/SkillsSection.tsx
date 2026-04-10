import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiFigma } from "react-icons/fi";
import { SiWordpress, SiCanva, SiFlutter } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaPalette, FaVideo, FaFilm, FaMailBulk, FaEnvelope, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import { useLanguage } from "@/lib/i18n";

type SkillLevel = "expert" | "advanced" | "intermediate" | "beginner";

interface Skill {
  name: string;
  percent: number;
  icon: React.ElementType;
  desc: { fr: string; en: string };
  level: SkillLevel;
}

const levelColors: Record<SkillLevel, string> = {
  expert: "from-emerald-500 to-teal-400",
  advanced: "from-[#ffcc29] to-yellow-400",
  intermediate: "from-orange-500 to-amber-400",
  beginner: "from-rose-500 to-red-400",
};

const levelDot: Record<SkillLevel, string> = {
  expert: "bg-emerald-400",
  advanced: "bg-[#ffcc29]",
  intermediate: "bg-orange-400",
  beginner: "bg-rose-400",
};

const levelLabels: Record<SkillLevel, { fr: string; en: string }> = {
  expert: { fr: "Expert", en: "Expert" },
  advanced: { fr: "Avancé", en: "Advanced" },
  intermediate: { fr: "Intermédiaire", en: "Intermediate" },
  beginner: { fr: "Débutant", en: "Beginner" },
};

// Calculate skill level based on percentage
function getSkillLevel(percent: number): SkillLevel {
  if (percent >= 80) return "expert";
  if (percent >= 60) return "advanced";
  if (percent >= 40) return "intermediate";
  return "beginner";
}

const designSkills: Skill[] = [
  { name: "Canva", percent: 95, icon: SiCanva, level: "expert", desc: { fr: "Design graphique & contenus visuels", en: "Graphic design & visual content" } },
  { name: "WordPress", percent: 90, icon: SiWordpress, level: "expert", desc: { fr: "Développement & personnalisation de sites", en: "Site development & customization" } },
  { name: "Photoshop", percent: 90, icon: FaPalette, level: "expert", desc: { fr: "Retouche photo & création graphique", en: "Photo retouching & graphic creation" } },
  { name: "Figma", percent: 90, icon: FiFigma, level: "expert", desc: { fr: "Design d'interface & prototypage", en: "Interface design & prototyping" } },
  { name: "FlutterFlow", percent: 70, icon: SiFlutter, level: "intermediate", desc: { fr: "Développement d'applications mobiles", en: "Mobile app development" } },
  { name: "Brevo", percent: 65, icon: FaMailBulk, level: "intermediate", desc: { fr: "Email marketing & automation", en: "Email marketing & automation" } },
  { name: "Mailjet", percent: 100, icon: FaEnvelope, level: "expert", desc: { fr: "Campagnes email & transactionnel", en: "Email campaigns & transactional" } },
  { name: "CapCut", percent: 85, icon: FaVideo, level: "advanced", desc: { fr: "Montage vidéo mobile & desktop", en: "Mobile & desktop video editing" } },
  { name: "Premiere Pro", percent: 30, icon: FaFilm, level: "beginner", desc: { fr: "Montage vidéo professionnel", en: "Professional video editing" } },
];

const webSkills = [
  { name: "HTML", icon: FaHtml5, percent: 80, color: "#E44D26" },
  { name: "CSS", icon: FaCss3Alt, percent: 85, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, percent: 60, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, percent: 55, color: "#3178C6" },
  { name: "React", icon: SiReact, percent: 60, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, percent: 85, color: "#06B6D4" },
  { name: "Vite", icon: SiVite, percent: 75, color: "#646CFF" },
  { name: "Git", icon: FaGitAlt, percent: 75, color: "#F1502F" },
];

function SkillCard({ skill, language }: { skill: Skill; language: string }) {
  const Icon = skill.icon;
  const level = getSkillLevel(skill.percent);
  const levelColor = levelColors[level];
  const dot = levelDot[level];

  return (
    <div className="flex-shrink-0 w-52 mx-3 p-4 rounded-2xl bg-[#1e3347] border border-white/8 hover:border-[#ffcc29]/40 transition-all duration-300 group">
      {/* Icon + name row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-[#2a3f54] flex items-center justify-center text-[#ffcc29] text-lg flex-shrink-0">
          <Icon />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-white text-sm leading-tight truncate">{skill.name}</p>
          <p className="text-white/40 text-[10px] leading-tight truncate mt-0.5">
            {language === "fr" ? skill.desc.fr : skill.desc.en}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${levelColor}`}
          style={{ width: `${skill.percent}%` }}
        />
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
          <span className="text-white/50 text-[10px] font-medium">
            {language === "fr" ? levelLabels[level].fr : levelLabels[level].en}
          </span>
        </div>
        <span className="text-[#ffcc29] text-xs font-bold">{skill.percent}%</span>
      </div>
    </div>
  );
}

function CircularSkill({ skill, inView, delay }: { skill: typeof webSkills[0]; inView: boolean; delay: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.percent / 100) * circumference;
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, type: "spring" }}
      className="flex flex-col items-center gap-3"
      data-testid={`web-skill-${skill.name}`}
    >
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 -rotate-90" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r={radius} fill="none" stroke="currentColor" strokeWidth="10" className="text-white/10" />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke={skill.color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.4, delay: delay + 0.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={24} style={{ color: skill.color }} />
          <span className="font-bold text-white text-sm mt-1">{skill.percent}%</span>
        </div>
      </div>
      <span className="font-semibold text-white/80 text-sm">{skill.name}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Duplicate cards for seamless loop
  const loopSkills = [...designSkills, ...designSkills];

  return (
    <section id="skills" className="section-padding bg-[#2a3f54] overflow-hidden" data-testid="skills-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ffcc29] text-sm font-semibold tracking-widest uppercase">
            {language === "fr" ? "...Expertise..." : "...Knowledge..."}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-2">
            {t("skills.title")}
          </h2>
          <div className="w-16 h-1 bg-[#ffcc29] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Section label */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#ffcc29]" />
          {t("skills.design")}
        </motion.h3>

        {/* ── Marquee ticker ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-14"
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#2a3f54] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#2a3f54] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                animation: "marquee-ltr 30s linear infinite",
              }}
            >
              {loopSkills.map((skill, i) => (
                <SkillCard key={`${skill.name}-${i}`} skill={skill} language={language} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Web dev circular ── */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-10 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#ffcc29]" />
          {t("skills.dev")}
        </motion.h3>

        {/* Web Skills Marquee - Right to Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#2a3f54] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#2a3f54] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track - Right to Left */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 justify-center items-center"
              style={{
                animation: "marquee-rtl 35s linear infinite",
              }}
            >
              {[...webSkills, ...webSkills].map((skill, i) => (
                <CircularSkill key={`${skill.name}-${i}`} skill={skill} inView={true} delay={0} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
