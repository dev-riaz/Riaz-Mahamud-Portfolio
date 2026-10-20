"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaFacebookF,
  FaCheckCircle,
  FaTimes,
  FaExclamationCircle,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaPhoneAlt, label: "Phone", href: "tel:+8801871133064" },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:riazmahamud113@gmail.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ria-mahamud-dev/",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    href: "https://www.google.com/maps",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/mohammad.riaz.mahamud.2024",
  },
];

const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  subject: "",
  email: "",
  message: "",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, [showPopup]);

  useEffect(() => {
    if (!showPopup) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setShowPopup(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPopup]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");
    setStatusType("");
    setShowPopup(false);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS credentials missing. Check your .env.local file.",
        );
      }

      const templateParams = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        to_email: "riazmahamud113@gmail.com",
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey },
      );

      console.log("EmailJS success:", response.status, response.text);

      setStatus("Message sent successfully!");
      setStatusType("success");
      setShowPopup(true);
      setFormData({ ...initialFormData });
    } catch (error) {
      console.error("EmailJS status:", error?.status);
      console.error("EmailJS response:", error?.text);
      console.error("EmailJS message:", error?.message);

      const errorMessage =
        error?.text ||
        error?.message ||
        (error?.status
          ? `Email sending failed (HTTP ${error.status}).`
          : "Email could not be sent. Please try again.");

      setStatus(errorMessage);
      setStatusType("error");
      setShowPopup(true);
    } finally {
      setIsSending(false);
    }
  };

  const closePopup = () => setShowPopup(false);

  const inputClass =
    "h-8 min-w-0 rounded-md border border-transparent bg-[#1b2433] px-3 text-[10px] text-[#e2e8f0] outline-none transition shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]";

  return (
    <>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerVariants}
        className="bg-[#1b2433] px-5 py-12 text-[#e5e5e5] sm:px-8 sm:py-14"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-5xl border-transparent bg-[#1b2433] p-4 text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044]"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-10 text-center text-xl font-bold"
          >
            Contact <span className="text-cyan-400">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <motion.div variants={itemVariants} className="pt-1">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.03 }}
                className="mb-4 inline-flex items-center gap-1.5"
              >
                <span className="text-3xl font-black italic text-white">
                  <span className="text-red-500">R</span>
                </span>

                <span className="leading-tight">
                  <span className="block text-sm font-bold tracking-[3px]">
                    Riaz Mahamud
                  </span>
                  <span className="block text-[6px] tracking-[1.5px] text-gray-300">
                    WEB DEVELOPER
                  </span>
                </span>
              </motion.a>

              <p className="max-w-sm text-[10px] leading-[1.6] text-gray-200">
                I am a passionate Web Developer specializing in building modern,
                responsive, and user-friendly websites. I work with technologies
                like HTML, CSS, Tailwind CSS, JavaScript, React, Next.js,
                Node.js, Express.js, and MongoDB. I enjoy creating clean,
                functional, and visually appealing web applications that provide
                a great user experience. I am committed to writing quality code,
                meeting project requirements, and delivering reliable solutions
                that satisfy my clients.
              </p>

              <div className="mt-8 flex items-center gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const isExternal = social.href.startsWith("https://");

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -4, scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white transition-colors hover:text-cyan-400"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-2"
            >
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  aria-label="Phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />

                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full ${inputClass}`}
              />

              <motion.textarea
                whileFocus={{ scale: 1.005 }}
                name="message"
                placeholder="Message"
                aria-label="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`min-h-[52px] w-full resize-y py-2 ${inputClass}`}
              />

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={!isSending ? { scale: 1.015 } : undefined}
                whileTap={!isSending ? { scale: 0.98 } : undefined}
                className="flex h-8 w-full items-center justify-center gap-2 rounded-md border border-transparent bg-[#1b2433] px-3 text-[10px] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] outline-none transition hover:text-cyan-400 hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending && (
                  <motion.span
                    aria-hidden="true"
                    className="h-3 w-3 rounded-full border-2 border-cyan-400/30 border-t-cyan-400"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.7,
                      ease: "linear",
                    }}
                  />
                )}
                {isSending ? "Sending..." : "Submit"}
              </motion.button>

              <AnimatePresence mode="wait">
                {status && (
                  <motion.p
                    key={statusType + status}
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`pt-2 text-center text-[10px] ${
                      statusType === "success"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </motion.div>
      </motion.section>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="contact-popup-title"
              aria-describedby="contact-popup-description"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#1b2433] p-7 text-center text-[#e5e5e5] shadow-2xl"
            >
              <button
                type="button"
                onClick={closePopup}
                aria-label="Close popup"
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaTimes className="h-3 w-3" />
              </button>

              {statusType === "success" ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10"
                >
                  <FaCheckCircle className="h-10 w-10 text-emerald-400" />
                </motion.div>
              ) : (
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-400/10">
                  <FaExclamationCircle className="h-10 w-10 text-red-400" />
                </div>
              )}

              <h3 id="contact-popup-title" className="mb-2 text-lg font-bold">
                {statusType === "success"
                  ? "Message Sent!"
                  : "Message Not Sent"}
              </h3>

              <p
                id="contact-popup-description"
                className="text-sm leading-6 text-gray-300"
              >
                {statusType === "success"
                  ? "Thank you for contacting me. Your message has been sent successfully. I will get back to you soon."
                  : status}
              </p>

              <motion.button
                type="button"
                onClick={closePopup}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#1b2433] transition hover:bg-cyan-300"
              >
                {statusType === "success" ? "Awesome!" : "Close"}
              </motion.button>

              <motion.div
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-1 rounded-b-2xl ${
                  statusType === "success" ? "bg-emerald-400" : "bg-red-400"
                }`}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
