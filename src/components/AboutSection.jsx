"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGraduationCap,
  FaBookOpen,
  FaCode,
  FaCertificate,
  FaCheckCircle,
} from "react-icons/fa";

// const qualifications = [
//   {
//     number: "01",
//     title: "Education Qualification",
//     icon: FaGraduationCap,
//     items: [
//       {
//         title: "Higher Secondary Certificate (HSC)",
//         subtitle: "Completed",
//         date: "2025",
//       },
//       {
//         title: "Honours",
//         subtitle: "1st Year Running",
//         date: "Present",
//       },
//     ],
//   },
//   {
//     number: "02",
//     title: "Short Course Experience",
//     icon: FaBookOpen,
//     items: [
//       {
//         title: "Web Design & Development for Freelancing",
//         subtitle: "NSDA · Level 3",
//         date: "",
//       },
//     ],
//     items: [
//       {
//         title: "Web Design & Development ",
//         subtitle: "NSDA · Level 3",
//         date: "",
//       },
//     ],
//   },
//   {
//     number: "03",
//     title: "Experience Details",
//     icon: FaCode,
//     items: [
//       {
//         title: "Personal Projects & Practical Development Experience",
//         points: [
//           "Frontend Development",
//           "Full-Stack Projects",
//           "Problem Solving & Learning",
//         ],
//       },
//     ],
//   },
//   {
//     number: "04",
//     title: "Certification",
//     icon: FaCertificate,
//     items: [
//       {
//         title: "Web Design & Development for Freelancing",
//         subtitle: "NSDA · Level 3",
//         date: "",
//       },
//     ],
//   },
// ];

const qualifications = [
  {
    number: "01",
    title: "Education Qualification",
    icon: FaGraduationCap,
    items: [
      {
        title: "Higher Secondary Certificate (HSC)",
        subtitle: "Completed",
        date: "2025",
      },
      {
        title: "Honours",
        subtitle: "1st Year Running",
        date: "Present",
      },
    ],
  },
  {
    number: "02",
    title: "Short Course Experience",
    icon: FaBookOpen,
    items: [
      {
        title: "Complete Web Development Course",
        subtitle: "Programming Hero Batch-13",
        date: "2026",
      },
      {
        title: "Web Design & Development for Freelancing",
        subtitle: "NSDA · Level 3",
        date: "2026",
      },
    ],
  },
  {
    number: "03",
    title: "Experience Details",
    icon: FaCode,
    items: [
      {
        title: "Personal Projects & Practical Development Experience",
        points: [
          "Frontend Development",
          "Full-Stack Projects",
          "Problem Solving & Learning",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Certification",
    icon: FaCertificate,
    items: [
      {
        title: "Complete Web Development Course",
        subtitle: "Programming Hero",
        date: "2026",
        Link: "https://drive.google.com/file/d/1H0UN_OlJp3dPZrbnkI5nUIdpku32o5z7/view?usp=sharing",
      },
      {
        title: "Web Design & Development for Freelancing",
        subtitle: "NSDA · Level 3",
        date: "2026",
      },
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1b2433] px-5 py-16 text-[#e5e5e5] sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#e5e5e5]/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-400/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-5xl pt-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-start"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5e5e5]/75">
                About Me
              </span>
              <span className="h-px w-12 bg-[#e5e5e5]/50" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              My Journey &{" "}
              <span className="text-slate-400">Qualifications</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Here&apos;s a quick overview of my education, skills, learning
              journey and professional experience.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-slate-500/50 px-4 py-2 text-xs text-slate-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-slate-200" />
            Open to new opportunities
          </div>
        </motion.div>

        {/* Qualification cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {qualifications.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl p-5
                   border-transparent bg-[#1b2433] text-[#e2e8f0] shadow-[5px_5px_10px_#101722,-5px_-5px_10px_#263044] hover:text-[#e2e8f0] hover:shadow-[inset_4px_4px_8px_#101722,inset_-4px_-4px_8px_#263044]"
              >
                {/* Icon and number */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5e5e5] text-[#1b2433] shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-semibold text-slate-400">
                    {card.number}
                  </span>
                </div>

                {/* Card title */}
                <h3 className="min-h-7 text-base font-bold leading-6 tracking-tight">
                  {card.title}
                </h3>

                <div className="my-3 h-px bg-slate-500/60 transition-colors group-hover:bg-slate-300/60" />

                {/* Card content */}
                <div className="space-y-4">
                  {card.items.map((item, itemIndex) => (
                    <div key={item.title} className="relative pl-5">
                      {/* Timeline marker */}
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-300 bg-[#1b2433] shadow-[0_0_8px_rgba(226,232,240,0.35)]" />

                      {itemIndex < card.items.length - 1 && (
                        <span className="absolute bottom-[-18px] left-[4px] top-4 w-px bg-slate-500/70" />
                      )}

                      <h4 className="text-sm font-semibold leading-5 text-slate-100">
                        {item.title}
                      </h4>

                      {item.subtitle && (
                        <p className="mt-1.5 text-xs leading-5 text-slate-400">
                          {item.subtitle}
                        </p>
                      )}

                      {item.date && (
                        <p className="mt-1.5 text-xs text-slate-400">
                          {item.date}
                        </p>
                      )}

                      {item.points && (
                        <ul className="mt-2 space-y-2">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-xs leading-5 text-slate-300"
                            >
                              <FaCheckCircle className="mt-1 shrink-0 text-slate-300" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-500/30 pt-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-slate-400" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Always Learning&nbsp; / &nbsp;Always Growing
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`h-1.5 rounded-full ${
                  dot === 0 ? "w-6 bg-[#e5e5e5]" : "w-4 bg-slate-500/60"
                }`}
              />
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
