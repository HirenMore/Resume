import { Moon, Sun } from "lucide-react";
import { FloatingNav, type NavItem } from "@/components/ui/floating-navbar.tsx";
import { useThemeStore } from "@/store/theme.ts";

const NAV_ITEMS: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export function Navbar() {
  const { isDark, toggle } = useThemeStore();

  return (
    <FloatingNav
      navItems={NAV_ITEMS}
      rightSlot={
        <button
          onClick={toggle}
          type="button"
          aria-label="Toggle theme"
          className="flex items-center justify-center p-1 rounded-full transition-opacity hover:opacity-70"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      }
    />
  );
}
