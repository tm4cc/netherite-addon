"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
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
  ["Base Finder", Search, "Detects when blocks that are normally used in a base and notifies you."],
  ["ESP System", Eye, "Shows visual overlays that locate chests, players, and anything you select."],
  ["Storage Detection", Boxes, "Identifies storage-related targets to locate bases."],
  ["Tracers", Crosshair, "Draws directional lines to the selected target."],
  ["Player Tracking", Flame, "Shows all players close to you."],
  ["X-Ray Visualization", Layers3, "X-Ray through blocks to locate ores, or valuables."],
  ["Chunk Analysis", Cpu, "Locates chunks that have been recently loaded, meaning theres likely a base."],
  ["Performance Optimized", Shield, "Keeps the interface lightweight and responsive, with no ping or fps spikes."],
] as const;

const showcaseSections = [
  {
    title: "Deepslate Bypass",
    desc: "Renders blocks below deepslate from your current position to find bases.",
    image: "/deepslate-scanner.jpg",
    alt: "Deepslate scanner showcase",
  },
  {
    title: "Anti /sus",
    desc: "A feature that works around the games flag system to make you dont get on /sus to never get banned!",
    image: null,
    alt: "",
  },
  {
    title: "Flight",
    desc: "A feature to bypass DonutSMP anti-flight so you can fly around to look for bases/netherite without getting banned",
    image: null,
    alt: "",
  },
] as const;

const faqs = [
  [
    "What is Netherite Addon?",
    "A premium Meteor addon to bypass the anti cheat, to find bases and netherite quickly.",
  ],
  ["Will i get banned?", "No, this fully bypasses anti cheat and has a anti /sus feature to make sure your account will not get banned."],
  [
    "What version is this?",
    "This can be launched on any version from 1.20-1.21.11.",
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

function ShowcaseCard({
                        title,
                        desc,
                        image,
                        alt,
                      }: {
  title: string;
  desc: string;
  image: string | null;
  alt: string;
}) {
  function ShowcaseCard({
                          title,
                          desc,
                          image,
                          alt,
                        }: {
    title: string;
    desc: string;
    image: string | null;
    alt: string;
  }) {
    return (
        <div className="glass rounded-[2rem] p-6 md:p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Showcase
          </div>

          <div className="mt-3 text-4xl font-bold text-purple-300">{title}</div>

          <p className="mt-4 text-zinc-300">{desc}</p>

          {image ? (
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-purple-500/20">
                <Image
                    src={image}
                    alt={alt}
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                />
              </div>
          ) : null}
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
                    A premium Meteor addon that makes your game run smoother, bypass anti cheat, and find bases and netherite fast.
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
                  <StatCard
                      label="Style"
                      value="Built-in bypass"
                      sub="Bypasses all of DonutSMP anti cheat to find spawners, bases, and more"
                  />
                  <StatCard
                      label="Target"
                      value="DonutSMP"
                      sub="Built to bypass DonutSMP anti cheat"
                  />
                  <StatCard
                      label="Build"
                      value="Meteor"
                      sub="Premium addon-inspired presentation for meteor client."
                  />
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

        <section id="showcase" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {showcaseSections.map((section) => (
                  <ShowcaseCard
                      key={section.title}
                      title={section.title}
                      desc={section.desc}
                      image={section.image ?? null}
                      alt={section.alt}
                  />
              ))}
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
          © 2026 Netherite Addon • DonutSMP meteor client addon
        </footer>
      </main>
  );
}