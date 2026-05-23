"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Cpu,
  Crosshair,
  Eye,
  Flame,
  Layers3,
  Menu,
  Search,
  Shield,
  Sparkles,
  X,
} from "lucide-react";

const features = [
  ["Base Finder", Search],
  ["ESP System", Eye],
  ["Storage Detection", Boxes],
  ["Tracers", Crosshair],
  ["Player Tracking", Flame],
  ["X-Ray Visualization", Layers3],
  ["Chunk Analysis", Cpu],
  ["Performance Optimized", Shield],
] as const;

const faqs = [
  [
    "What is Netherite Addon?",
    "A premium Meteor addon-inspired UI built for DonutSMP-style gameplay.",
  ],
  ["Is it responsive?", "Yes, it is designed for mobile, tablet, and desktop."],
  [
    "Can the download button be wired later?",
    "Yes, replace the href with your real file or launcher route.",
  ],
] as const;

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
  );
}

function StatCard({
                    label,
                    value,
                    sub,
                  }: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
      <div className="glass rounded-3xl border border-white/10 p-5">
        <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">{label}</div>
        <div className="mt-3 text-3xl font-bold text-white">{value}</div>
        <div className="mt-2 text-sm text-zinc-400">{sub}</div>
      </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const statusText = useMemo(() => "CONNECTED TO DONUTSMP", []);

  return (
      <main className="relative min-h-screen overflow-hidden bg-[#050508] text-white">
        <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,.10),transparent_34%)]" />
        <div className="fixed inset-0 bg-grid opacity-50" />

        <nav className="sticky top-4 z-50 mx-auto flex w-[92%] max-w-7xl items-center justify-between rounded-2xl px-5 py-4 glass">
          <div className="flex items-center gap-3">
            <Image
                src="/logo.png"
                alt="Netherite Addon logo"
                width={36}
                height={36}
                className="rounded-md"
            />
            <div>
              <div className="font-bold tracking-[0.3em] text-purple-300">
                NETHERITE ADDON
              </div>
              <div className="text-[10px] tracking-[0.35em] text-zinc-500">
                DONUTSMP METEOR ADDON
              </div>
            </div>
          </div>

          <div className="hidden gap-6 md:flex text-sm text-zinc-300">
            {["hero", "features", "showcase", "download", "faq"].map((i) => (
                <a
                    key={i}
                    href={`#${i}`}
                    onClick={() => setActive(i)}
                    className={active === i ? "text-white" : "hover:text-white"}
                >
                  {i}
                </a>
            ))}
          </div>

          <Menu className="md:hidden" />
        </nav>

        <section
            id="hero"
            className="relative mx-auto grid min-h-screen max-w-7xl px-6 pt-16 lg:pt-24"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <Reveal>
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 glass">
                  <Sparkles size={16} />
                  {statusText}
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-3xl font-[Space_Grotesk] text-5xl font-bold leading-[0.95] md:text-7xl">
                    Netherite Addon
                  </h1>
                  <p className="max-w-xl text-lg text-zinc-300">
                    A premium Meteor addon-inspired dashboard built around DonutSMP-style
                    gameplay, cleaner visuals, and a faster workflow.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                      href="/netherite-1.21.11.jar"
                      download="netherite-1.21.11.jar"
                      className="rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-4 text-center font-semibold shadow-lg shadow-purple-500/30"
                  >
                    Download Netherite Addon
                  </a>
                  <a
                      href="#showcase"
                      className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-zinc-100 transition hover:border-purple-400/40 hover:bg-purple-500/10"
                  >
                    View Showcase
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <StatCard label="Style" value="Launcher" sub="Glass panels, neon accents, clean hierarchy." />
                  <StatCard label="Target" value="DonutSMP" sub="Built for a fast utility-dashboard feel." />
                  <StatCard label="Build" value="Meteor" sub="Premium addon-inspired presentation." />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative">
                <motion.div
                    animate={{ y: [0, -14, 0], rotate: [-1, 1, -1] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="glass relative overflow-hidden rounded-[2rem] border border-white/10 p-5 shadow-[0_0_90px_rgba(168,85,247,.12)]"
                >
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                        Server Status
                      </div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        DonutSMP Utility Panel
                      </div>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      ONLINE
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_.9fr]">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-transparent p-5">
                      <div className="text-xs uppercase tracking-[0.3em] text-purple-200/70">
                        Netherite Finder
                      </div>
                      <div className="mt-3 text-3xl font-bold">Cleaner tracking</div>
                      <p className="mt-3 max-w-md text-sm text-zinc-300">
                        A polished preview of the kind of visual dashboard that makes the
                        addon feel fast, modern, and focused.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                          Version
                        </div>
                        <div className="mt-1 text-lg font-semibold">1.0.0</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                          Focus
                        </div>
                        <div className="mt-1 text-lg font-semibold">DonutSMP</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-3xl border border-purple-500/20 bg-black/40">
                    <Image
                        src="/netherite-finder.jpg"
                        alt="Netherite Finder showcase"
                        width={1600}
                        height={900}
                        className="h-auto w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <h2 className="mb-10 text-3xl font-bold">Features</h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map(([label, Icon]) => (
                <Reveal key={label}>
                  <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="glass rounded-3xl p-6 transition"
                  >
                    <Icon className="mb-5 text-purple-300" />
                    <div className="font-semibold">{label}</div>
                    <p className="mt-2 text-sm text-zinc-400">
                      Designed for a DonutSMP-focused workflow with a premium glass look.
                    </p>
                  </motion.div>
                </Reveal>
            ))}
          </div>
        </section>

        <section id="showcase" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
              <div className="glass rounded-[2rem] p-5 md:p-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-purple-500/20">
                  <Image
                      src="/netherite-finder.jpg"
                      alt="Netherite Finder showcase"
                      width={1600}
                      height={900}
                      className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="glass rounded-[2rem] p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Showcase
                </div>
                <div className="mt-3 text-4xl font-bold text-purple-300">
                  Netherite Finder
                </div>
                <p className="mt-4 text-zinc-300">
                  A clean preview focused on DonutSMP-style utility, with a sharper
                  dashboard layout and a more distinct launcher feel.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm text-zinc-400">Display mode</div>
                    <div className="mt-1 font-semibold">Visual tracking panel</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm text-zinc-400">Theme</div>
                    <div className="mt-1 font-semibold">Purple neon launcher UI</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-purple-200">
                    Download panel
                  </div>
                  <h3 className="mt-5 text-4xl font-bold">Get the latest build</h3>
                  <p className="mt-3 max-w-xl text-zinc-300">
                    Optimized utility build for DonutSMP-style gameplay with a polished
                    launcher-like presentation and a cleaner premium layout.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-300">
                    Version: 1.0.0 • Java Edition
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-300">
                    Compatibility: Windows • 1.20+ • Low-latency
                  </div>
                  <a
                      href="/netherite-1.21.11.jar"
                      download="netherite-1.21.11.jar"
                      className="rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-4 text-center font-semibold shadow-lg shadow-purple-500/30"
                  >
                    Download Netherite Addon
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold">FAQ</h2>
          </Reveal>

          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
                <Reveal key={q}>
                  <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="glass w-full rounded-2xl p-5 text-left"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold">{q}</span>
                      <span>{open === i ? <X size={18} /> : <Menu size={18} />}</span>
                    </div>

                    <AnimatePresence>
                      {open === i && (
                          <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pt-3 text-sm text-zinc-300"
                          >
                            {a}
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </Reveal>
            ))}
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-6 py-14 text-sm text-zinc-500">
          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
          © 2026 Netherite Addon • DonutSMP-inspired premium aesthetic
        </footer>
      </main>
  );
}