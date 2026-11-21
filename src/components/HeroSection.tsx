import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { EASE_EDITORIAL } from './MotionPrimitives';

interface SystemSubsystem {
  id: string;
  code: string;
  label: string;
  detail: string;
  layer: string;
}

const SUBSYSTEMS: SystemSubsystem[] = [
  {
    id: 'ingest',
    code: '01',
    label: 'Knowledge Ingestion',
    detail: 'Structured documents, API records, and domain schemas normalized into clean chunks.',
    layer: 'Data & Embeddings',
  },
  {
    id: 'retrieve',
    code: '02',
    label: 'Hybrid Retrieval',
    detail: 'Dense vector similarity paired with lexical constraints to surface high-signal context.',
    layer: 'RAG Pipeline',
  },
  {
    id: 'context',
    code: '03',
    label: 'Context Assembly',
    detail: 'Token-budgeted framing of memory, retrieved evidence, and explicit tool schemas.',
    layer: 'Context Engineering',
  },
  {
    id: 'agent',
    code: '04',
    label: 'Agentic Orchestration',
    detail: 'Stateful multi-step planning, tool execution, and human-in-the-loop verification.',
    layer: 'Reasoning & Tools',
  },
];

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeSubsystem, setActiveSubsystem] = useState<string>('context');

  const selected =
    SUBSYSTEMS.find((s) => s.id === activeSubsystem) ?? SUBSYSTEMS[2];

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#30352F] bg-[#101110] pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Subtle architectural grid backdrop */}
      <div
        aria-hidden="true"
        className="bg-engineering-grid pointer-events-none absolute inset-0 opacity-45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#101110]/30 to-[#101110]"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              {/* Clean Unboxed Metadata */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
                className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wide text-[#A4AAA2]"
              >
                {PROFILE.hero.metadata.map((item, index) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {index < PROFILE.hero.metadata.length - 1 && (
                      <span aria-hidden="true" className="text-[#30352F]">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </motion.div>

              {/* Main Headline with Staggered Line Reveal */}
              <h1 className="font-display text-4xl font-semibold tracking-tight text-[#F2F1EA] leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
                <motion.span
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08,
                    ease: EASE_EDITORIAL,
                  }}
                  className="block"
                >
                  {PROFILE.hero.headlineLine1}
                </motion.span>
                <motion.span
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.18,
                    ease: EASE_EDITORIAL,
                  }}
                  className="mt-1 block text-[#C5F467]"
                >
                  {PROFILE.hero.headlineLine2}
                </motion.span>
              </h1>

              {/* Supporting Copy */}
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.28,
                  ease: EASE_EDITORIAL,
                }}
                className="mt-7 max-w-xl text-base leading-relaxed text-[#A4AAA2] sm:text-lg"
              >
                {PROFILE.hero.description}
              </motion.p>
            </div>

            {/* CTAs & Scroll Cue */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.36,
                ease: EASE_EDITORIAL,
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#C5F467] px-6 py-3 text-sm font-medium text-[#101110] transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#30352F] bg-[#171917] px-6 py-3 text-sm font-medium text-[#F2F1EA] transition-colors duration-150 hover:border-[#C5F467] hover:text-[#C5F467] whitespace-nowrap shrink-0"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Systems & Retrieval Pipeline Schematic */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.22,
              ease: EASE_EDITORIAL,
            }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col justify-between rounded-xl border border-[#30352F] bg-[#171917] p-6">
              <div className="flex items-center justify-between border-b border-[#30352F] pb-4">
                <div>
                  <p className="font-mono text-xs text-[#A4AAA2]">
                    Systems Topology
                  </p>
                  <p className="mt-0.5 font-display text-sm font-medium text-[#F2F1EA]">
                    Retrieval &amp; Agentic Data Flow
                  </p>
                </div>
                <span className="font-mono text-xs tabular-nums text-[#C5F467]">
                  04 Layers
                </span>
              </div>

              {/* Custom Animated SVG Schematic */}
              <div className="my-5 rounded-lg border border-[#30352F] bg-[#101110] p-4">
                <svg
                  viewBox="0 0 380 220"
                  role="img"
                  aria-label="Interactive diagram showing knowledge ingestion, hybrid retrieval, context assembly, and agentic orchestration"
                  className="h-auto w-full"
                >
                  {/* Grid Lines inside SVG */}
                  <defs>
                    <pattern
                      id="hero-mini-grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="#20251F"
                        strokeWidth="0.75"
                      />
                    </pattern>
                  </defs>
                  <rect width="380" height="220" fill="url(#hero-mini-grid)" />

                  {/* Connecting Signal Paths */}
                  <path
                    d="M 96 52 L 190 52 L 190 110 L 96 168"
                    fill="none"
                    stroke="#30352F"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 190 110 L 284 110"
                    fill="none"
                    stroke="#30352F"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 284 52 L 284 168 L 190 168"
                    fill="none"
                    stroke="#30352F"
                    strokeWidth="1.5"
                  />

                  {/* Animated Signal Pulse along active route */}
                  {!prefersReducedMotion && (
                    <>
                      <motion.circle
                        r="3"
                        fill="#C5F467"
                        initial={{ cx: 96, cy: 52, opacity: 0.9 }}
                        animate={{
                          cx: [96, 190, 190, 284],
                          cy: [52, 52, 110, 110],
                        }}
                        transition={{
                          duration: 3.4,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <motion.circle
                        r="2.5"
                        fill="#F2F1EA"
                        initial={{ cx: 96, cy: 168, opacity: 0.7 }}
                        animate={{
                          cx: [96, 190, 284, 284],
                          cy: [168, 110, 110, 168],
                        }}
                        transition={{
                          duration: 4.2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </>
                  )}

                  {/* Node 1: Ingestion */}
                  <g
                    onClick={() => setActiveSubsystem('ingest')}
                    className="cursor-pointer"
                  >
                    <rect
                      x="18"
                      y="28"
                      width="112"
                      height="48"
                      rx="6"
                      fill={activeSubsystem === 'ingest' ? '#20251F' : '#171917'}
                      stroke={activeSubsystem === 'ingest' ? '#C5F467' : '#30352F'}
                      strokeWidth="1.25"
                    />
                    <text
                      x="30"
                      y="47"
                      fill="#A4AAA2"
                      fontSize="9"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      01 · INGEST
                    </text>
                    <text
                      x="30"
                      y="64"
                      fill="#F2F1EA"
                      fontSize="11"
                      fontWeight="500"
                      fontFamily="Space Grotesk, sans-serif"
                    >
                      Sources &amp; Chunks
                    </text>
                  </g>

                  {/* Node 2: Retrieval */}
                  <g
                    onClick={() => setActiveSubsystem('retrieve')}
                    className="cursor-pointer"
                  >
                    <rect
                      x="250"
                      y="28"
                      width="112"
                      height="48"
                      rx="6"
                      fill={activeSubsystem === 'retrieve' ? '#20251F' : '#171917'}
                      stroke={activeSubsystem === 'retrieve' ? '#C5F467' : '#30352F'}
                      strokeWidth="1.25"
                    />
                    <text
                      x="262"
                      y="47"
                      fill="#A4AAA2"
                      fontSize="9"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      02 · RETRIEVE
                    </text>
                    <text
                      x="262"
                      y="64"
                      fill="#F2F1EA"
                      fontSize="11"
                      fontWeight="500"
                      fontFamily="Space Grotesk, sans-serif"
                    >
                      Vector + Hybrid
                    </text>
                  </g>

                  {/* Center Node: Context Assembly */}
                  <g
                    onClick={() => setActiveSubsystem('context')}
                    className="cursor-pointer"
                  >
                    <rect
                      x="130"
                      y="86"
                      width="120"
                      height="48"
                      rx="6"
                      fill={activeSubsystem === 'context' ? '#20251F' : '#171917'}
                      stroke={activeSubsystem === 'context' ? '#C5F467' : '#30352F'}
                      strokeWidth="1.4"
                    />
                    <text
                      x="142"
                      y="105"
                      fill="#C5F467"
                      fontSize="9"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      03 · CONTEXT
                    </text>
                    <text
                      x="142"
                      y="122"
                      fill="#F2F1EA"
                      fontSize="11"
                      fontWeight="500"
                      fontFamily="Space Grotesk, sans-serif"
                    >
                      Window Assembly
                    </text>
                  </g>

                  {/* Node 4: Agentic Orchestration */}
                  <g
                    onClick={() => setActiveSubsystem('agent')}
                    className="cursor-pointer"
                  >
                    <rect
                      x="18"
                      y="144"
                      width="118"
                      height="48"
                      rx="6"
                      fill={activeSubsystem === 'agent' ? '#20251F' : '#171917'}
                      stroke={activeSubsystem === 'agent' ? '#C5F467' : '#30352F'}
                      strokeWidth="1.25"
                    />
                    <text
                      x="30"
                      y="163"
                      fill="#A4AAA2"
                      fontSize="9"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      04 · AGENT
                    </text>
                    <text
                      x="30"
                      y="180"
                      fill="#F2F1EA"
                      fontSize="11"
                      fontWeight="500"
                      fontFamily="Space Grotesk, sans-serif"
                    >
                      Tools &amp; Checks
                    </text>
                  </g>

                  {/* Grounded Output Box */}
                  <rect
                    x="250"
                    y="144"
                    width="112"
                    height="48"
                    rx="6"
                    fill="#171917"
                    stroke="#30352F"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text
                    x="262"
                    y="163"
                    fill="#A4AAA2"
                    fontSize="9"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    OUTPUT
                  </text>
                  <text
                    x="262"
                    y="180"
                    fill="#F2F1EA"
                    fontSize="11"
                    fontFamily="Space Grotesk, sans-serif"
                  >
                    Verified Action
                  </text>
                </svg>
              </div>

              {/* Interactive Layer Selector & Explanation */}
              <div>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {SUBSYSTEMS.map((sub) => {
                    const active = sub.id === activeSubsystem;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setActiveSubsystem(sub.id)}
                        className={`rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors whitespace-nowrap shrink-0 ${
                          active
                            ? 'bg-[#20251F] text-[#C5F467] border border-[#C5F467]/50'
                            : 'border border-[#30352F] text-[#A4AAA2] hover:text-[#F2F1EA]'
                        }`}
                      >
                        {sub.code} {sub.label.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>

                <div className="border-t border-[#30352F] pt-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#A4AAA2]">
                    <span>{selected.layer}</span>
                    <span className="text-[#C5F467]">Layer {selected.code}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#F2F1EA]">
                    {selected.detail}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Strip & Scroll Indicator */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#30352F] pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[#A4AAA2]">
            <span>{PROFILE.education.degree}</span>
            <span aria-hidden="true" className="text-[#30352F]">
              /
            </span>
            <span>{PROFILE.education.institution}</span>
            <span aria-hidden="true" className="text-[#30352F]">
              /
            </span>
            <span>{PROFILE.location}</span>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A4AAA2] transition-colors hover:text-[#C5F467]"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
