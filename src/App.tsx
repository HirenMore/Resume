import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar.tsx";
import { ScrollProgress } from "@/components/layout/ScrollProgress.tsx";
import { About } from "@/sections/About.tsx";
import { Hero } from "@/sections/Hero.tsx";
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
      </main>
    </>
  );
}
