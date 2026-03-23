import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import SkillsEducation from "../components/SkillsEducation";
import Footer from "../components/Footer";
import SplashIntro from "../components/SplashIntro";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden">
      <Hero />
      <Experience />
      <Projects />
      <SkillsEducation />
      <Footer />
      <SplashIntro />
      <ChatBot />
    </main>
  );
}
