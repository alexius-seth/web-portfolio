import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-obsidian-border bg-obsidian/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4 font-mono text-xs">
        {/* Terminal node identifier */}
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-slate-muted" />
          <span className="text-slate-muted">node://</span>
          <span className="text-slate-text font-semibold">alexius-seth</span>
        </div>

        {/* Quiet Architecture Specifier */}
        <div className="text-slate-muted text-[11px] hidden sm:block">
          <span>SYS_ARCH // </span>
          <span className="text-slate-text">FULL-STACK &amp; SYSTEMS</span>
        </div>
      </div>
    </header>
  );
}
