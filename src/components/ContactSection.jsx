"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    href: "tel:+8801871133064",
  },
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

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, subject, email, message } = formData;

    const mailSubject = encodeURIComponent(
      subject || `Contact from ${firstName} ${lastName}`,
    );

    const mailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:riazmahamud113@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    setStatus("Your email application is opening...");
  };

  return (
    <section
      id="contact"
      className="bg-[#1b2433] px-5 py-12 text-[#e5e5e5] sm:px-8 sm:py-14"
    >
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <h2 className="mb-10 text-center text-xl font-bold">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Left Content */}
          <div className="pt-1">
            {/* Logo */}
            <a href="#home" className="mb-4 inline-flex items-center gap-1.5">
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
            </a>

            {/* Description */}
            <p className="max-w-sm text-[10px] leading-[1.6] text-gray-200">
              I am a passionate Web Developer specializing in building modern,
              responsive, and user-friendly websites. I work with technologies
              like HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Node.js,
              Express.js, and MongoDB. I enjoy creating clean, functional, and
              visually appealing web applications that provide a great user
              experience. I am committed to writing quality code, meeting
              project requirements, and delivering reliable solutions that
              satisfy my clients.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target={
                      social.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="text-white transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                aria-label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="h-8 min-w-0 rounded-md border border-transparent bg-[#222831] px-3 text-[10px] text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                aria-label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="h-8 min-w-0 rounded-md border border-transparent bg-[#222831] px-3 text-[10px] text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                aria-label="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="h-8 min-w-0 rounded-md border border-transparent bg-[#222831] px-3 text-[10px] text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-8 min-w-0 rounded-md border border-transparent bg-[#222831] px-3 text-[10px] text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-8 w-full rounded-md border border-transparent bg-[#222831] px-3 text-[10px] text-white outline-none transition focus:border-cyan-400"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="min-h-[52px] w-full resize-y rounded-md border border-transparent bg-[#222831] px-3 py-2 text-[10px] text-white outline-none transition focus:border-cyan-400"
            />

            {/* Submit */}
            <button
              type="submit"
              className="h-8 w-full rounded-md bg-[#222831] text-[10px] font-medium text-white transition duration-300 hover:bg-cyan-400 hover:text-[#222831]"
            >
              Submit
            </button>

            {status && (
              <p
                role="status"
                className="text-center text-[10px] text-cyan-400"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
