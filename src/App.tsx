import { useEffect } from "react";
import { Footer } from "@/components/layout/Footer.tsx";
import { Navbar } from "@/components/layout/Navbar.tsx";
import { ScrollProgress } from "@/components/layout/ScrollProgress.tsx";
import { About } from "@/sections/About.tsx";
import { Contact } from "@/sections/Contact.tsx";
import { Experience } from "@/sections/Experience.tsx";
import { Hero } from "@/sections/Hero.tsx";
import { Projects } from "@/sections/Projects.tsx";
import { Skills } from "@/sections/Skills.tsx";
import { useThemeStore } from "@/store/theme.ts";

export default function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
