"use client";

import { useState } from "react";
import { Terminal, Database, Code2, Globe } from "lucide-react";

type FilterId = "ALL" | "SQL SERVER" | "POSTGRESQL" | "MYSQL" | "DESKTOP / CV" | "WEB & PWA";

interface Skill {
  name: string;
  filters: FilterId[];
}

interface Category {
  sysId: string;
  title: string;
  icon: typeof Terminal;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    sysId: "CAT_01 // RUNTIME",
    title: "DESKTOP & SYSTEMS",
    icon: Terminal,
    skills: [
      { name: "C#", filters: ["DESKTOP / CV", "SQL SERVER"] },
      { name: ".NET 8 LTS", filters: ["DESKTOP / CV", "SQL SERVER"] },
      { name: "WPF", filters: ["DESKTOP / CV"] },
      { name: "Win32 API Interop (WH_KEYBOARD_LL)", filters: ["DESKTOP / CV"] },
      { name: "OpenCvSharp4", filters: ["DESKTOP / CV"] },
      { name: "DlibDotNet", filters: ["DESKTOP / CV"] },
      { name: "C", filters: ["DESKTOP / CV"] },
    ],
  },
  {
    sysId: "CAT_02 // STORAGE",
    title: "DATABASES & DATA LAYER",
    icon: Database,
    skills: [
      { name: "Microsoft SQL Server (2022/2025)", filters: ["SQL SERVER"] },
      { name: "PostgreSQL (Neon / Supabase FTS)", filters: ["POSTGRESQL"] },
      { name: "MySQL", filters: ["MYSQL"] },
      { name: "EF Core 8", filters: ["SQL SERVER", "POSTGRESQL"] },
      { name: "Prisma ORM", filters: ["POSTGRESQL", "MYSQL"] },
    ],
  },
  {
    sysId: "CAT_03 // CORE",
    title: "LANGUAGES",
    icon: Code2,
    skills: [
      { name: "C#", filters: ["DESKTOP / CV", "SQL SERVER"] },
      { name: "C", filters: ["DESKTOP / CV"] },
      { name: "Python", filters: ["DESKTOP / CV"] },
      { name: "Java", filters: ["DESKTOP / CV"] },
      { name: "PHP", filters: ["MYSQL"] },
      { name: "TypeScript", filters: ["WEB & PWA", "POSTGRESQL"] },
      { name: "Node.js", filters: ["WEB & PWA"] },
    ],
  },
  {
    sysId: "CAT_04 // CLIENT",
    title: "WEB & PWA ARCHITECTURE",
    icon: Globe,
    skills: [
      { name: "Next.js (App Router)", filters: ["WEB & PWA", "POSTGRESQL"] },
      { name: "React", filters: ["WEB & PWA"] },
      { name: "Tailwind CSS", filters: ["WEB & PWA"] },
      { name: "Local-First PWA (IndexedDB / Dexie.js)", filters: ["WEB & PWA", "POSTGRESQL"] },
      { name: "QuestPDF Engine", filters: ["DESKTOP / CV", "WEB & PWA"] },
    ],
  },
];

const FILTERS: FilterId[] = [
  "ALL",
  "SQL SERVER",
  "POSTGRESQL",
  "MYSQL",
  "DESKTOP / CV",
  "WEB & PWA",
];

export function TechMatrix() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("ALL");

  return (
    <section id="stack" className="py-16 border-b border-obsidian-border space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-slate-muted flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-emerald" />
            02 // TECH_MATRIX
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-text font-display uppercase mt-1">
            Architecture &amp; Toolchain
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-muted max-w-sm">
          System runtimes, relational database engines, and client-side application frameworks.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        <span className="text-slate-muted mr-1 text-[11px] uppercase tracking-wider select-none">
          FILTER:
        </span>
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all border ${
                isActive
                  ? "bg-accent-emerald text-obsidian border-accent-emerald font-bold shadow-glow"
                  : "bg-obsidian-surface text-slate-muted border-obsidian-border hover:border-slate-muted hover:text-slate-text"
              }`}
            >
              [{filter}]
            </button>
          );
        })}
      </div>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-lg bg-obsidian-surface border border-obsidian-border p-6 flex flex-col justify-between space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-obsidian-border/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-obsidian border border-obsidian-border text-slate-text">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-base text-slate-text tracking-tight">
                      {category.title}
                    </h3>
                    <span className="font-mono text-[11px] text-slate-muted block mt-0.5">
                      {category.sysId}
                    </span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => {
                  const matches =
                    activeFilter === "ALL" || skill.filters.includes(activeFilter);

                  return (
                    <span
                      key={skill.name}
                      className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-300 ${
                        matches
                          ? activeFilter === "ALL"
                            ? "bg-obsidian border-obsidian-border text-slate-text"
                            : "bg-obsidian border-accent-emerald text-accent-emerald shadow-glow font-medium"
                          : "bg-obsidian/40 border-obsidian-border/40 text-slate-600 opacity-30 select-none"
                      }`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
