"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Calendar, MapPin, Award } from "lucide-react";

// Extracted metrics from your resume achievements
const impactMetrics = [
  {
    metric: "40%",
    label: "Faster Release Cycles",
    context: "Automated Jenkins/GitHub Actions pipelines",
  },
  {
    metric: "30%",
    label: "Data Throughput Increase",
    context: "Optimized RESTful APIs via Spring Boot",
  },
  {
    metric: "99.9%",
    label: "SaaS Uptime",
    context: "Maintained for backend handling 10k+ daily requests",
  },
];

// Extracted roles
const experienceData = [
  {
    id: "umbc",
    title: "Graduate Assistant",
    company: "University of Maryland, Baltimore County",
    location: "Baltimore, MD",
    dates: "Jan 2024 - May 2025",
    chips: ["25% grading time reduction", "30% better feedback quality"],
    bullets: [
      "Developed Java-based automated grading tools using Spring Boot and JUnit, reducing grading time by 25% for 150+ students across networking and OS courses.",
      "Enhanced cybersecurity analysis by implementing Python scripts to detect vulnerabilities in student code submissions, improving feedback quality by 30%.",
      "Designed RESTful APIs to support course management systems, enabling real-time data access for faculty and students, increasing operational efficiency by 15%.",
      "Mentored students in Java programming and debugging, improving code quality and reducing error rates by 20% through hands-on guidance.",
      "Streamlined assessment workflows using Jira and Agile methodologies, boosting team productivity by 20% and ensuring timely delivery of academic reports.",
    ],
  },
  {
    id: "mtx",
    title: "Software Developer",
    company: "MTX Group Inc",
    location: "India",
    dates: "Sept 2021 - Jul 2023",
    chips: ["40% faster releases", "25% engagement increase"],
    bullets: [
      "Architected and deployed Salesforce Community Cloud solutions using Lightning Web Components (LWC) and Apex, increasing user engagement by 25% through intuitive public and authenticated portals.",
      "Developed and optimized Java-based RESTful APIs using Spring Boot and Spring REST, improving data processing throughput by 30% for client-facing applications.",
      "Implemented microservices architecture with Spring Boot and Docker, reducing system latency by 20% and enabling seamless scalability for high-traffic applications.",
      "Automated deployment pipelines using Jenkins and GitHub Actions, cutting release cycles by 40% and ensuring zero-downtime deployments.",
      "Integrated Salesforce with external systems using REST APIs and middleware, streamlining data flows and reducing integration time by 25%.",
      "Collaborated with cross-functional Agile teams to deliver user-centric solutions, improving client satisfaction scores by 20% through iterative feedback cycles.",
    ],
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("umbc"); // Default expand the first one

  return (
    <section
      id="experience"
      className="w-full max-w-5xl mx-auto px-6 py-24 z-10 relative"
    >
      {/* IMPACT HIGHLIGHTS STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
      >
        {impactMetrics.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/50 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                {item.metric}
              </h3>
            </div>
            <h4 className="text-lg font-bold text-slate-200 mb-1">
              {item.label}
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.context}
            </p>
          </div>
        ))}
      </motion.div>

      {/* EXPERIENCE TIMELINE */}
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-100 mb-10 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-indigo-400" />
          Professional Experience
        </h2>

        {experienceData.map((job) => {
          const isExpanded = expandedId === job.id;

          return (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "bg-slate-900/80 border-indigo-500/50 shadow-[0_0_30px_rgba(79,70,229,0.1)]"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Card Header (Clickable) */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : job.id)}
                className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-1">
                    {job.title}
                  </h3>
                  <div className="text-indigo-400 font-medium text-lg mb-3">
                    {job.company}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {job.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto mt-4 md:mt-0">
                  <div className="flex gap-2">
                    {job.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hidden sm:block"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`p-2 rounded-full bg-slate-800 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-300" />
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 md:px-8 border-t border-slate-800/50 pt-6">
                      <ul className="space-y-4">
                        {job.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-300 leading-relaxed"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
