"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Cpu,
  Cloud,
  Database,
  Wrench,
  Layers,
  Terminal,
} from "lucide-react";

// --- DATA EXTRACTION ---
const skillsData = [
  {
    category: "Programming Languages",
    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    items: [
      "Java (Spring Boot, Spring MVC, Spring REST, Hibernate)",
      "JavaScript (Node.js, TypeScript)",
      "Python",
      "C#",
      "Apex",
      "SQL",
    ],
  },
  {
    category: "Web Technologies",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    items: [
      "HTML5",
      "CSS3",
      "JSON",
      "React",
      "Angular",
      "Lightning Web Components (LWC)",
      "Tailwind CSS",
      "Webpack",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data",
      "JUnit",
      "Mockito",
      "React",
      "Angular",
      "Express.js",
    ],
  },
  {
    category: "Cloud Platforms",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    items: [
      "AWS (EC2, Lambda, S3, RDS, CloudWatch, API Gateway)",
      "Salesforce (Community Cloud, Lightning Platform)",
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    items: ["MySQL", "MongoDB", "PostgreSQL", "Oracle", "DynamoDB"],
  },
  {
    category: "CI/CD & DevOps",
    icon: <Wrench className="w-5 h-5 text-orange-400" />,
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Maven",
      "Gradle",
      "Postman",
    ],
  },
  {
    category: "Methodologies, Tools & Additional",
    icon: <Layers className="w-5 h-5 text-pink-400" />,
    items: [
      "Agile/Scrum",
      "SDLC",
      "Jira",
      "Confluence",
      "Test-Driven Development (TDD)",
      "RESTful API Design",
      "Microservices Architecture",
      "Object-Oriented Design",
      "Design Patterns",
      "Performance Optimization",
      "Code Review",
    ],
  },
];

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Maryland, Baltimore County",
    location: "Baltimore, MD",
    dates: "Aug 2023 - May 2025",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "B.V Raju Institute of Technology",
    location: "Hyderabad, India",
    dates: "Jul 2017 - Jun 2021",
  },
];

const certificationsData = [
  "AWS Certified Developer - Associate",
  "Salesforce Platform Developer",
  "Salesforce Certified Associate",
  "Salesforce Certified Platform App Builder",
  "Salesforce Certified Administrator (SCA)",
  "Applied Generative AI Specialization, Purdue University",
];

// --- COMPONENT ---
export default function SkillsEducation() {
  return (
    <section
      id="skills-education"
      className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* LEFT COLUMN: SKILLS */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl font-extrabold text-slate-100">
              Technical Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800/80">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-bold text-slate-200">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: EDUCATION & CERTS */}
        <div className="lg:col-span-5 space-y-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-extrabold text-slate-100">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:to-transparent"
                >
                  <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-cyan-400 font-medium text-sm mb-2">
                    {edu.school}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span>{edu.dates}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-emerald-400" />
              <h2 className="text-3xl font-extrabold text-slate-100">
                Certifications
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm"
            >
              <ul className="space-y-4">
                {certificationsData.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
