import { useState, useEffect, createContext, useContext } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.certifications": "Diplômes",
    "nav.references": "Références",
    "nav.contact": "Contact",
    "hero.tagline1": "Web Design & Communication Digitale",
    "hero.tagline2": "UX/UI · Graphisme · Front-end · Product",
    "hero.contact": "Me Contacter",
    "hero.projects": "Mes Projets",
    "hero.cv": "Télécharger CV",
    "hero.available": "Disponible pour collaborer",
    "hero.location": "Du Togo - Vers l'Afrique",
    "about.title": "À propos",
    "about.bio": "Je suis un passionné du numérique, spécialisé en design UX/UI, graphisme, développement web front-end et communication digitale. Mon parcours m'a permis d'allier sens de la créativité et maîtrise des outils numériques pour concevoir des interfaces intuitives et des expériences utilisateurs engageantes. Curieux et toujours en quête d'évolution, je me forme en continu pour affiner mes compétences et suivre les dernières tendances du digital.",
    "about.keywords": "Curiosité · Autodidacte · Dynamisme",
    "skills.title": "Outils & Compétences",
    "skills.design": "Design & Communication",
    "skills.dev": "Développement Web",
    "exp.title": "Parcours",
    "proj.title": "Projets",
    "proj.platforms": "Plateformes",
    "proj.design": "Graphisme & Montage",
    "proj.comms": "Communication Digitale",
    "proj.coming_soon": "...",
    "contact.title": "Contact",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.success": "Message envoyé avec succès!",
    "certifications.title": "Diplômes & Certifications",
    "certifications.view": "Voir",
    "references.title": "Références & Collaborateurs",
    "references.linkedin": "Profil",
    "footer.location": "Marcelin de NOTSE - TOGO",
    "footer.rights": "Tous droits réservés",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.references": "References",
    "nav.contact": "Contact",
    "hero.tagline1": "Web Design & Digital Communication",
    "hero.tagline2": "UX/UI · Graphic Design · Front-end · Product",
    "hero.contact": "Contact Me",
    "hero.projects": "My Projects",
    "hero.cv": "Download CV",
    "hero.available": "Available · Open to work",
    "hero.location": "From Togo - To Africa",
    "about.title": "About",
    "about.bio": "I am passionate about digital technology, specializing in UX/UI design, graphic design, front-end web development, and digital communication. My journey has allowed me to combine creativity with mastery of digital tools to design intuitive interfaces and engaging user experiences. Curious and always evolving, I continuously train to sharpen my skills and stay current with the latest digital trends.",
    "about.keywords": "Curiosity · Self-taught · Dynamism",
    "skills.title": "Tools & Skills",
    "skills.design": "DESIGN & COMMUNICATION",
    "skills.dev": "Web Development",
    "exp.title": "Experiences",
    "proj.title": "Projects",
    "proj.platforms": "Platforms",
    "proj.design": "Design & Video",
    "proj.comms": "Digital Communication",
    "proj.coming_soon": "...",
    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.success": "Message sent successfully!",
    "certifications.title": "Diplomas & Certifications",
    "certifications.view": "View",
    "references.title": "References & Collaborators",
    "references.linkedin": "Profile",
    "footer.location": "Marcelin from NOTSE - TOGO",
    "footer.rights": "All rights reserved",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
