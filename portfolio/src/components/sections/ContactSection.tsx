import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Mail, MessageSquare, User, FileText } from "lucide-react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n";

export default function ContactSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#1e2f40] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ffcc29]/60 focus:ring-2 focus:ring-[#ffcc29]/20 transition-all duration-200 text-sm";

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "marcelinkotche70@gmail.com",
      href: "mailto:marcelinkotche70@gmail.com",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Marcelin K. KOTCHE",
      href: "https://www.linkedin.com/in/marcelin-k-kotche-59b75429a",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+228 70 06 83 77",
      href: "https://wa.me/22870068377",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "marcelin31",
      href: "https://github.com/marcelin31",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[#2a3f54]" data-testid="contact-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#ffcc29] text-sm font-semibold tracking-widest uppercase">
            {language === "fr" ? "Travaillons ensemble" : "Let's work together"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-2">
            {t("contact.title")}
          </h2>
          <div className="w-16 h-1 bg-[#ffcc29] rounded-full mx-auto mt-4" />
          <p className="text-white/60 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            {language === "fr"
              ? "Une idée, un projet, une collaboration ? Je suis disponible et à l'écoute."
              : "An idea, a project, a collaboration? I'm available and ready to listen."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ffcc29]/40 transition-all duration-200 group"
                data-testid={`contact-link-${label.toLowerCase()}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffcc29]/10 flex items-center justify-center text-[#ffcc29] flex-shrink-0 group-hover:bg-[#ffcc29] group-hover:text-[#2a3f54] transition-all duration-200">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-medium">{label}</div>
                  <div className="text-white text-sm font-semibold mt-0.5">{value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-2xl bg-[#ffcc29]/10 border border-[#ffcc29]/30 text-center"
              >
                <CheckCircle size={48} className="text-[#ffcc29]" />
                <p className="text-white font-bold text-xl">{t("contact.success")}</p>
                <p className="text-white/60 text-sm">
                  {language === "fr" ? "Je vous répondrai dans les plus brefs délais." : "I'll get back to you as soon as possible."}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
                data-testid="contact-form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                      <User size={12} />
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder={language === "fr" ? "Votre nom & prénoms" : "Your full name"}
                      required
                      className={inputClass}
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                      <Mail size={12} />
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder={language === "fr" ? "Votre adresse email" : "Your email address"}
                      required
                      className={inputClass}
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                    <FileText size={12} />
                    {t("contact.subject")}
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder={language === "fr" ? "Objet du message" : "Subject"}
                    required
                    className={inputClass}
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                    <MessageSquare size={12} />
                    {t("contact.message")}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder={language === "fr" ? "Votre message..." : "Your message..."}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    data-testid="input-message"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,204,41,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#ffcc29] text-[#2a3f54] font-bold text-sm tracking-wide hover:bg-yellow-300 transition-all duration-200"
                  data-testid="btn-submit"
                >
                  <Send size={16} />
                  {t("contact.send")}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
