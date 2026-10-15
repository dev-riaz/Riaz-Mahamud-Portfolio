"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  "Education Qualification",
  "Short Course",
  "Experience",
  "Details",
  "Certification",
];

const education = [
  {
    title: "Bachelor of Honours",
    institute: "Carmichael College",
    session: "2025 - 26",
    result: "Running (1st Year)",
  },
  {
    title: "Higher Secondary Certificate",
    institute: "Kurigram Govment College",
    session: "2023 - 24",
    result: "GPA 4.00 out of 5.00",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institute: "Baralai High School",
    session: "2022 - 23",
    result: "GPA 5.00 out of 5.00",
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("Education Qualification");

  return (
    <section
      id="about"
      className="min-h-screen -mt-4 bg-[#303744] px-5 py-16 text-white md:px-10 md:py-16"
    >
      <div className="">
        {/* Section Title */}
        <h2 className="mb-10 text-center text-xl font-bold">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10 ">
          {/* Profile Card */}
          <div className="relative mx-auto mt-12 w-full h-full rounded-md bg-cyan-400 px-3 pb-5 pt-[68px] text-center text-black md:mx-0">
            {/* Profile Image */}
            <div className="absolute -top-[94px] left-1/2 h-[180px] w-[180px] -translate-x-1/2 overflow-hidden rounded-full border-[5px] border-white bg-white ring-4 ring-[#303744]">
              <Image
                width={200}
                height={200}
                src="/portfolio short image.png"
                alt="Profile"
                className="h-fit w-full  object-top"
              />
            </div>

            <h3 className="mt-10 whitespace-nowrap text-[15px] font-bold">
              Riaz Mahamud
            </h3>

            <div className="mt-1.5 space-y-1 text-[10px] font-medium">
              <p>Frontend Developer</p>
              <p>Jr.Fullstack Developer</p>
              <p>MERN Stack Developer</p>
            </div>
          </div>

          {/* Information Section */}
          <div className="min-w-0">
            {/* Tabs */}
            <div className="mb-6 flex flex-wrap gap-x-7 gap-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative whitespace-nowrap pb-1 text-[10px] font-bold transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[210px]">
              {activeTab === "Education Qualification" && (
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.title}>
                      <h3 className="mb-1 text-[11px] font-bold text-cyan-400">
                        {item.title}
                      </h3>

                      <div className="space-y-0.5 text-[9px] leading-[1.5] text-white">
                        <p>
                          <span className="font-medium">Institute :</span>{" "}
                          {item.institute}
                        </p>
                        <p>
                          <span className="font-medium">Session :</span>{" "}
                          {item.session}
                        </p>
                        <p>
                          <span className="font-medium">Result :</span>{" "}
                          {item.result}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Short Course" && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[11px] font-bold text-cyan-400">
                      Web Development
                    </h3>
                    <p className="mt-1 text-[9px]">Programming Hero</p>
                    <p className="text-[9px]">Course: Web Development 25</p>
                  </div>

                  <div>
                    <h3 className="text-[11px] font-bold text-cyan-400">
                      Full Stack Development
                    </h3>
                    <p className="mt-1 text-[9px]">
                      React, Next.js, Node.js, Express.js
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "Experience" && (
                <div>
                  <h3 className="text-[11px] font-bold text-cyan-400">
                    Personal Projects
                  </h3>
                  <p className="mt-1 text-[9px] leading-5">
                    Developing responsive web applications using React, Next.js,
                    Tailwind CSS, Node.js and MongoDB.
                  </p>
                  <p>A Recipe Shearing Platform (Recipe Hub)</p>
                  <p>Doctor Appoinment Platform (DocPoint)</p>
                </div>
              )}

              {activeTab === "Details" && (
                <div className="space-y-2 text-[10px]">
                  <p>
                    <span className="font-bold text-cyan-400">Name :</span> MD
                    Riaz Mahamud
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">
                      Profession :
                    </span>{" "}
                    Web Developer
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Skills :</span>{" "}
                    React, Next.js, Node.js, Express.js, MongoDB
                  </p>
                </div>
              )}
              {activeTab === "Certification" && (
                <div className="space-y-2 text-[10px]">
                  <p>
                    <span className="font-bold text-cyan-400">Certified :</span>
                    Complete Web Development Course Programming Hero 2026
                  </p>
                  <Link href={"/"}>View Certificate</Link>

                  <p>
                    <span className="font-bold text-cyan-400">Certified :</span>{" "}
                    National Skills Certificate (NSDA) Web Design & Development
                    for Freelancing (Level 3)
                  </p>
                  <Link href={"/"}>View Certificate</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
