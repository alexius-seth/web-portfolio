import Image from "next/image";
import { ArrowDownRight, ExternalLink } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

const TECH_BADGES = [
  "C#",
  ".NET 8",
  "C",
  "Java",
  "Python",
  "SQL Server",
  "Next.js",
];

export function Hero() {
  return (
    <section className="relative pt-10 sm:pt-12 pb-14 sm:pb-16 border-b border-obsidian-border">
      {/* Top telemetry coordinate in muted slate */}
      <div className="flex items-center justify-between font-mono text-[11px] text-slate-muted mb-8">
        <span>// SYSTEM_CORE &gt;&gt; HOST_ALEXIUS</span>
        <span className="hidden sm:inline">LOC: 127.0.0.1 // TLS_1.3</span>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left column: narrative & CTAs */}
        <div className="w-full lg:flex-1 space-y-6 sm:space-y-7">
          {/* Status badge & Main headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-obsidian-surface border border-accent-emerald/40 shadow-glow font-mono text-xs text-accent-emerald">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
              </span>
              <span>STATUS: OPERATIONAL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-text font-display uppercase">
              Alexius Seth
              <span className="block text-xl sm:text-2xl font-semibold text-slate-muted mt-1.5 tracking-normal font-sans normal-case">
                <TypewriterText text="Systems & Software Engineer" />
              </span>
            </h1>
          </div>

          {/* Core capabilities narrative */}
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl">
            Specializing in{" "}
            <strong className="text-slate-text font-medium">Modern Web Applications</strong>,{" "}
            <strong className="text-slate-text font-medium">Desktop Systems</strong>, and{" "}
            <strong className="text-slate-text font-medium">Database Engineering</strong>.
            Architecting reliable low-level software and high-throughput web applications.
          </p>

          {/* Quick tech stack badges */}
          <div className="space-y-2.5">
            <span className="font-mono text-xs text-slate-muted uppercase tracking-wider block">
              Core Runtime &amp; Toolchain
            </span>
            <div className="flex flex-wrap gap-2">
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs sm:text-sm px-3 py-1 rounded bg-obsidian-surface border border-obsidian-border text-slate-muted hover:border-slate-muted/60 hover:text-slate-text transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-accent-emerald text-obsidian font-mono text-xs sm:text-sm font-bold hover:bg-accent-emerald/90 transition-all shadow-sm shadow-accent-emerald/20 w-full sm:w-auto text-center"
            >
              <span>Explore Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/alexius-seth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-obsidian-surface border border-obsidian-border text-slate-text font-mono text-xs sm:text-sm font-medium hover:border-slate-muted transition-all w-full sm:w-auto text-center"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right column: Styled Circular Profile Photo */}
        <div className="flex justify-center flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 aspect-square rounded-full overflow-hidden border border-slate-800 bg-obsidian-surface hover:border-emerald-500/50 hover:shadow-glow transition-all duration-500 group">
            <Image
              src="/profile.jpg"
              alt="Alexius Seth"
              fill
              priority
              className="object-cover object-[center_80%] grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
