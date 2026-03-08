"use client";
import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Cloud } from "lucide-react";

// Extracted exactly from your resume
const projectsData = [
  {
    title: "AI Icon Generation SaaS Platform",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    techStack: [
      "Java (Spring Boot)",
      "React",
      "TypeScript",
      "MongoDB",
      "AWS (EC2, S3)",
      "Tailwind CSS",
    ],
    bullets: [
      "Engineered a full-stack SaaS platform using Java (Spring Boot), React, and TypeScript, integrated with Hugging Face API to generate AI-driven icons from text/URLs.",
      "Developed scalable backend services with Spring REST and MongoDB, handling 10,000+ daily API requests with 99.9% uptime.",
      "Optimized UI/UX with React, Tailwind CSS, and Webpack, reducing user bounce rate by 15% through enhanced navigation and responsive design.",
      "Deployed application on AWS EC2 and S3, leveraging CloudWatch for monitoring, achieving 30% faster response times for image generation.",
    ],
  },
  {
    title: "College Event Management System",
    icon: <Layout className="w-6 h-6 text-indigo-400" />,
    techStack: ["Java", "Spring Boot", "ReactJS", "MySQL", "Docker", "Jenkins"],
    bullets: [
      "Built a full-stack web application using Java, Spring Boot, and ReactJS, serving 100+ users and reducing manual event management efforts by 60%.",
      "Designed RESTful APIs with Spring REST and MySQL, enabling efficient event scheduling, registration, and feedback collection for college stakeholders.",
      "Implemented CI/CD pipelines with Jenkins and Docker, reducing deployment time by 35% and ensuring consistent application performance.",
      "Enhanced security with Spring Security, implementing JWT-based authentication to protect user data and prevent unauthorized access.",
    ],
  },
  {
    title: "Inventory Management System",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    techStack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "Kubernetes",
      "Gradle",
    ],
    bullets: [
      "Developed a Java-based inventory tracking application using Spring Boot, Hibernate, and PostgreSQL, reducing stock discrepancies by 25% for a retail client.",
      "Integrated RESTful APIs with third-party logistics systems, improving order processing efficiency by 20% and enabling real-time inventory updates.",
      "Utilized Gradle for build automation and Kubernetes for container orchestration, ensuring high availability and scalability for 1,000+ daily transactions.",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-24 z-10 relative"
    >
      <div className="mb-16 md:text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4 flex items-center md:justify-center gap-3">
          <Code2 className="w-8 h-8 text-indigo-400" />
          Featured Projects
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A showcase of my end-to-end development experience, from system
          architecture to cloud deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative h-full rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)] flex flex-col"
          >
            {/* Top glowing gradient effect on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-8 flex-1 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-300 shadow-lg">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                {project.title}
              </h3>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-indigo-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Bullets */}
              <ul className="space-y-3 mt-auto">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-300/90 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
