"use client";

import { useState } from "react";
import { Mail, Copy, Check, ExternalLink, MapPin } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "alexiussetha@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 border-b border-obsidian-border space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          03 // CONTACT_HUB
        </span>
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-100 font-sans">
          INITIATE COMMUNICATIONS
        </h2>
        <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Open for software engineering opportunities, web application development, and technical collaboration.
        </p>
      </div>

      {/* 4-Card Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Direct Email with Copy */}
        <div
          onClick={handleCopyEmail}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCopyEmail();
            }
          }}
          className="group cursor-pointer rounded-none bg-[#0F141C] border border-slate-800 p-5 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
              DIRECT_EMAIL
            </span>
            <div className="p-1.5 rounded bg-black/40 border border-slate-800 text-slate-300 group-hover:text-emerald-400 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-xs sm:text-sm text-slate-100 font-semibold break-all">
              {email}
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 pt-1">
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-slate-400 group-hover:text-emerald-400 transition-colors">
                    CLICK TO COPY
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: GitHub Profile */}
        <a
          href="https://github.com/alexius-seth"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-none bg-[#0F141C] border border-slate-800 p-5 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
              GITHUB_PROFILE
            </span>
            <div className="p-1.5 rounded bg-black/40 border border-slate-800 text-slate-300 group-hover:text-emerald-400 transition-colors">
              <GithubIcon className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-xs sm:text-sm text-slate-100 font-semibold">
              github.com/alexius-seth
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400 group-hover:text-emerald-400 transition-colors pt-1">
              <span>OPEN REPOSITORY</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>

        {/* Card 3: LinkedIn Network */}
        <a
          href="https://www.linkedin.com/in/alexius-seth-alonzo"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-none bg-[#0F141C] border border-slate-800 p-5 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
              LINKEDIN_NETWORK
            </span>
            <div className="p-1.5 rounded bg-black/40 border border-slate-800 text-slate-300 group-hover:text-emerald-400 transition-colors">
              <LinkedinIcon className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-xs sm:text-sm text-slate-100 font-semibold">
              Alexius Seth Alonzo
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400 group-hover:text-emerald-400 transition-colors pt-1">
              <span>VIEW PROFILE</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </a>

        {/* Card 4: Location & Status Metrics */}
        <div className="rounded-none bg-[#0F141C] border border-slate-800 p-5 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
              LOCATION_METRICS
            </span>
            <div className="p-1.5 rounded bg-black/40 border border-slate-800 text-slate-300">
              <MapPin className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="font-mono text-xs sm:text-sm text-slate-100 font-semibold">
              Pangasinan, Philippines (UTC+8)
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
              </span>
              <span className="font-bold tracking-wide">STATUS: AVAILABLE_FOR_WORK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
