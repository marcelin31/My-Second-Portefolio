import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, BookOpen, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const traits = [
  { icon: Lightbulb, key: "Curiosité", keyEn: "Curiosity", desc: { fr: "Toujours à l'affût des nouvelles tendances", en: "Always exploring the latest trends" } },
  { icon: BookOpen, key: "Autodidacte", keyEn: "Self-taught", desc: { fr: "Apprentissage continu par la pratique", en: "Continuous learning through practice" } },
  { icon: Zap, key: "Dynamisme", keyEn: "Dynamism", desc: { fr: "Energie et engagement dans chaque projet", en: "Energy and commitment in every project" } },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" data-testid="about-section">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ffcc29] text-sm font-semibold tracking-widest uppercase">
            {language === "fr" ? "Qui suis-je" : "Who I am"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mt-2">
            {t("about.title")}
          </h2>
          <div className="w-16 h-1 bg-[#ffcc29] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-gradient-to-b from-[#ffcc29] to-[#2a3f54]" />
              <p className="pl-6 text-muted-foreground text-lg leading-relaxed">
                {t("about.bio")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "7+", label: language === "fr" ? "Expériences" : "Experiences" },
                { value: "5+", label: language === "fr" ? "Projets livrés" : "Projects delivered" },
                { value: "3+", label: language === "fr" ? "Années de pratique" : "Years of practice" },
              ].map(stat => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 rounded-2xl bg-card border border-border shadow-sm"
                  data-testid={`stat-${stat.label}`}
                >
                  <div className="font-display text-3xl font-black text-[#2a3f54] dark:text-[#ffcc29]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-5"
          >
            {traits.map(({ icon: Icon, key, keyEn, desc }) => (
              <motion.div
                key={key}
                variants={item}
                whileHover={{ x: 6, boxShadow: "0 8px 30px rgba(42,63,84,0.12)" }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-[#ffcc29]/50 transition-all duration-300 cursor-default"
                data-testid={`trait-${key}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#2a3f54] flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-[#ffcc29]" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">
                    {language === "fr" ? key : keyEn}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {language === "fr" ? desc.fr : desc.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
