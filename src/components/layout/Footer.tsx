export function Footer() {
  return (
    <footer
      className="py-6 text-center text-sm border-t"
      style={{
        color: "hsl(var(--muted-foreground))",
        borderColor: "hsl(var(--border))",
      }}
    >
      <p>Built with React 19, Tailwind v4, Framer Motion &amp; Bun</p>
    </footer>
  );
}
