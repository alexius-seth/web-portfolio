import { ExternalLink, Terminal, Cpu, Database, BookOpen, Clock } from "lucide-react";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface Project {
  sysId: string;
  title: string;
  role?: string;
  tagline: string;
  githubUrl: string;
  liveUrl?: string;
  icon: typeof Terminal;
  highlights: string[];
  techStack: string[];
}

const PROJECTS: Project[] = [
  {
    sysId: "SYS_PRJ // 01",
    title: "AI-CAMS",
    role: "Lead Developer",
    tagline: "AI-Assisted Centralized Assessment Monitoring System",
    githubUrl: "https://github.com/alexius-seth/Thesis---AI-CAMS",
    icon: Cpu,
    highlights: [
      "Win32 low-level keyboard lockdown shell preventing unauthorized task switching",
      "On-device computer vision pipeline using OpenCvSharp4 & Dlib 68-point gaze telemetry",
      "Multi-language isolated compiler sandbox (GCC, JDK, Python) with EF Core 8 & SQL Server",
    ],
    techStack: ["C#", ".NET 8", "OpenCvSharp4", "SQL Server"],
  },
  {
    sysId: "SYS_PRJ // 02",
    title: "Talaan (PWA)",
    tagline: "Local-First Double-Entry Ledger & Inventory Management PWA",
    githubUrl: "https://github.com/alexius-seth/TalaanPH",
    icon: Database,
    highlights: [
      "Offline-first local persistence architecture powered by Dexie.js (IndexedDB)",
      "Zero-sum double-entry accounting engine storing currency in integer centavos",
      "Background transactional outbox sync to Neon PostgreSQL with native SIM SMS receipts",
    ],
    techStack: ["PWA", "Dexie.js", "Neon PostgreSQL", "TypeScript"],
  },
  {
    sysId: "SYS_PRJ // 03",
    title: "CaseKo",
    tagline: "Supreme Court Case Digest & Legal Research System",
    githubUrl: "https://github.com/alexius-seth/case-digest-repo",
    liveUrl: "https://case-digest-repo-pied.vercel.app/",
    icon: BookOpen,
    highlights: [
      "PostgreSQL weighted Full-Text Search (FTS) indexed with GIN",
      "Next.js App Router streaming architecture with RFC 4180 CSV bulk ingest",
      "Supabase Row-Level Security (RLS) and custom legal brief print stylesheets",
    ],
    techStack: ["Next.js", "PostgreSQL FTS", "Supabase RLS", "TypeScript"],
  },
  {
    sysId: "SYS_PRJ // 04",
    title: "Pomodoro Web App",
    tagline: "Personalized Productivity & Focus Timer Web Application",
    githubUrl: "https://github.com/alexius-seth/PomodoroWeb",
    liveUrl: "https://pomodoro-web-six.vercel.app/",
    icon: Clock,
    highlights: [
      "High-precision timer engine with background tab drift compensation",
      "Customizable work-to-rest cycle telemetry and task sequence state machine",
      "Persistent session logging with browser storage, deployed globally on Vercel Edge",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 border-b border-obsidian-border space-y-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-slate-muted flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-emerald" />
            01 // REPOSITORY_INDEX
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-text font-display uppercase mt-1">
            Featured Systems Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-muted max-w-sm">
          Architectural breakdowns of production systems, computer vision runtimes, and local-first ledgers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((proj) => {
          const Icon = proj.icon;
          return (
            <article
              key={proj.title}
              className="group relative flex flex-col justify-between rounded-lg bg-obsidian-surface border border-obsidian-border hover:border-accent-emerald hover:shadow-glow transition-all duration-300 p-6 space-y-5"
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-muted">{proj.sysId}</span>
                  <div className="flex items-center gap-3">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-muted hover:text-accent-emerald transition-colors"
                        title="Live Deployment"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>LIVE</span>
                      </a>
                    )}
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-muted hover:text-slate-text transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>SRC</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-obsidian border border-obsidian-border text-slate-text group-hover:border-accent-emerald/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-slate-text flex items-center gap-2">
                      {proj.title}
                      {proj.role && (
                        <span className="text-[11px] font-mono font-normal px-2 py-0.5 rounded bg-obsidian border border-obsidian-border text-slate-muted lowercase tracking-normal">
                          {proj.role}
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-slate-muted font-mono mt-0.5">{proj.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Highlights List - 3 max */}
              <div className="space-y-2">
                <ul className="space-y-2 text-xs text-slate-muted">
                  {proj.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-500 font-mono select-none">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3-4 Primary Tech Stack Badges & Links */}
              <div className="space-y-3 pt-3 border-t border-obsidian-border/80">
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-obsidian border border-obsidian-border text-slate-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-muted hover:text-slate-text transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-emerald hover:underline"
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
