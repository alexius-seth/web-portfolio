import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-obsidian-border bg-obsidian/90 backdrop-blur-md">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4 font-mono text-xs sm:text-sm">
        {/* Terminal node identifier */}
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-4 h-4 text-slate-muted group-hover:text-emerald-400 transition-colors" />
          <span className="text-slate-muted">node://</span>
          <span className="text-slate-text font-semibold group-hover:text-emerald-400 transition-colors">alexius-seth</span>
        </a>

        {/* Monospace Navigation Links */}
        <nav className="flex items-center gap-3 sm:gap-6 font-mono text-xs text-slate-400">
          <a
            href="#projects"
            className="hover:text-emerald-400 transition-colors"
          >
            [// PROJECTS]
          </a>
          <a
            href="#skills"
            className="hover:text-emerald-400 transition-colors"
          >
            [// SKILLS]
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-400 transition-colors"
          >
            [// CONTACT]
          </a>
        </nav>
      </div>
    </header>
  );
}
