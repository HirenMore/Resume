import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/theme.ts";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const { isDark, toggle } = useThemeStore();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b"
      style={{
        backgroundColor: "hsl(var(--background) / 0.8)",
        borderColor: "hsl(var(--border))",
      }}
    >
      <span className="font-bold text-lg tracking-tight">HP</span>
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        onClick={toggle}
        type="button"
        aria-label="Toggle theme"
        className="p-2 rounded-md transition-colors"
        style={{ color: "hsl(var(--foreground))" }}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </motion.header>
  );
}
