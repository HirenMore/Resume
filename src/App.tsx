import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar.tsx";
import { ScrollProgress } from "@/components/layout/ScrollProgress.tsx";
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
        <p style={{ padding: "2rem", color: "hsl(var(--muted-foreground))" }}>
          Sections coming soon…
        </p>
      </main>
    </>
  );
}
