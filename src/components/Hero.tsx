import Image from "next/image";
import { ArrowDownRight, ExternalLink } from "lucide-react";

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
    <section className="relative pt-12 pb-16 border-b border-obsidian-border">
      {/* Top telemetry coordinate in muted slate */}
      <div className="flex items-center justify-between font-mono text-[11px] text-slate-muted mb-8">
        <span>// SYSTEM_CORE &gt;&gt; HOST_ALEXIUS</span>
        <span className="hidden sm:inline">LOC: 127.0.0.1 // TLS_1.3</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column: narrative & CTAs */}
        <div className="lg:col-span-8 space-y-7">
          {/* Status badge & Main headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-obsidian-surface border border-accent-emerald/40 shadow-glow font-mono text-xs text-accent-emerald">
              <span className="w-2 h-2 rounded-full bg-accent-emerald shadow-[0_0_8px_#10B981] animate-pulse" />
              STATUS: 🟢 OPERATIONAL
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-text font-display uppercase">
              Alexius Seth
              <span className="block text-xl sm:text-2xl font-semibold text-slate-muted mt-1.5 tracking-normal font-sans normal-case">
                Systems &amp; Software Engineer
              </span>
            </h1>
          </div>

          {/* Core capabilities narrative */}
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl">
            Specializing in{" "}
            <strong className="text-slate-text font-medium">Desktop Applications</strong>,{" "}
            <strong className="text-slate-text font-medium">Computer Vision</strong>,{" "}
            <strong className="text-slate-text font-medium">Database Engineering</strong>, and{" "}
            <strong className="text-slate-text font-medium">High-Performance Web Systems</strong>.
            Architecting reliable low-level software and high-throughput pipelines.
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
                  className="font-mono text-xs px-3 py-1 rounded bg-obsidian-surface border border-obsidian-border text-slate-muted hover:border-slate-muted/60 hover:text-slate-text transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-accent-emerald text-obsidian font-mono text-xs font-bold hover:bg-accent-emerald/90 transition-all shadow-sm shadow-accent-emerald/20"
            >
              <span>Explore Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/alexius-seth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-obsidian-surface border border-obsidian-border text-slate-text font-mono text-xs font-medium hover:border-slate-muted transition-all"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right column: Styled Circular Profile Photo */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 aspect-square rounded-full overflow-hidden border border-slate-800 bg-obsidian-surface hover:border-emerald-500/50 hover:shadow-glow transition-all duration-500 group">
            <Image
              src="/profile.jpg"
              alt="Alexius Seth"
              fill
              priority
              className="object-cover object-[center_85%] grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 1024px) 288px, 240px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
