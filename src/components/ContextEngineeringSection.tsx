import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { CONTEXT_PIPELINE_NODES } from '../data/portfolioData';
import { EASE_EDITORIAL, Reveal } from './MotionPrimitives';

export const ContextEngineeringSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTracing, setIsTracing] = useState(false);

  const activeNode = CONTEXT_PIPELINE_NODES[selectedIndex];

  useEffect(() => {
    if (!isTracing) return;
    const timer = window.setInterval(() => {
      setSelectedIndex((prev) => {
        if (prev >= CONTEXT_PIPELINE_NODES.length - 1) {
          setIsTracing(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => window.clearInterval(timer);
  }, [isTracing]);

  const handleStartTrace = () => {
    if (isTracing) {
      setIsTracing(false);
      return;
    }
    if (selectedIndex >= CONTEXT_PIPELINE_NODES.length - 1) {
      setSelectedIndex(0);
    }
    setIsTracing(true);
  };

  return (
    <section
      id="context-engineering"
      className="border-b border-[#30352F] bg-[#171917] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs tracking-wider text-[#C5F467]">
                03 — Intelligent System Design
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
                Better context. Better intelligence.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A4AAA2]">
                Useful AI systems depend on far more than writing a prompt.
                Reliability comes from how context is selected, retrieved,
                budgeted across memory and tools, grounded before inference, and
                evaluated after generation.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleStartTrace}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#C5F467]/60 bg-[#20251F] px-4 py-2 text-xs font-medium text-[#C5F467] transition-colors hover:bg-[#C5F467] hover:text-[#101110] whitespace-nowrap shrink-0"
              >
                {isTracing ? (
                  <>
                    <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Pause Trace</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Step Through Pipeline</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsTracing(false);
                  setSelectedIndex(0);
                }}
                aria-label="Reset pipeline trace to step 01"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-[#30352F] bg-[#101110] text-[#A4AAA2] transition-colors hover:border-[#C5F467] hover:text-[#F2F1EA]"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Interactive Pipeline Nodes + Animated Connectors */}
        <Reveal delay={0.08}>
          <div className="mt-10 rounded-xl border border-[#30352F] bg-[#101110] p-5 sm:p-7">
            {/* Desktop Horizontal / 2-Row Connected Pipeline */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {CONTEXT_PIPELINE_NODES.map((node, index) => {
                const isActive = index === selectedIndex;
                const isPassed = index < selectedIndex;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => {
                      setIsTracing(false);
                      setSelectedIndex(index);
                    }}
                    aria-pressed={isActive}
                    className={`group relative flex flex-col items-start rounded-lg border p-4 text-left transition-colors duration-150 ${
                      isActive
                        ? 'border-[#C5F467] bg-[#20251F]'
                        : isPassed
                        ? 'border-[#C5F467]/35 bg-[#171917]'
                        : 'border-[#30352F] bg-[#171917] hover:border-[#A4AAA2]/60'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isActive ? 'text-[#C5F467]' : 'text-[#A4AAA2]'
                        }`}
                      >
                        {node.step}
                      </span>
                      <span className="font-mono text-[11px] text-[#A4AAA2]">
                        {index < CONTEXT_PIPELINE_NODES.length - 1 ? '→' : '✓'}
                      </span>
                    </div>
                    <span className="mt-2 font-display text-base font-medium text-[#F2F1EA]">
                      {node.title}
                    </span>
                    <span className="mt-1 text-xs text-[#A4AAA2]">
                      {node.focusConcept}
                    </span>

                    {/* Subtle progress underline on active stage */}
                    {isActive && !prefersReducedMotion && (
                      <motion.div
                        layoutId="context-node-active"
                        transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
                        className="mt-3 h-[2px] w-full bg-[#C5F467]"
                      />
                    )}
                    {isActive && prefersReducedMotion && (
                      <div className="mt-3 h-[2px] w-full bg-[#C5F467]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Animated Signal Flow Connector SVG Bar */}
            <div className="my-6 hidden lg:block" aria-hidden="true">
              <svg viewBox="0 0 900 24" className="h-6 w-full">
                <line
                  x1="12"
                  y1="12"
                  x2="888"
                  y2="12"
                  stroke="#30352F"
                  strokeWidth="1.5"
                />
                <motion.line
                  x1="12"
                  y1="12"
                  x2={12 + ((876 * selectedIndex) / (CONTEXT_PIPELINE_NODES.length - 1))}
                  y2="12"
                  stroke="#C5F467"
                  strokeWidth="2"
                  transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                />
                {CONTEXT_PIPELINE_NODES.map((node, idx) => {
                  const cx =
                    12 + (876 * idx) / (CONTEXT_PIPELINE_NODES.length - 1);
                  const reached = idx <= selectedIndex;
                  return (
                    <circle
                      key={node.id}
                      cx={cx}
                      cy="12"
                      r={idx === selectedIndex ? 5 : 3.5}
                      fill={reached ? '#C5F467' : '#171917'}
                      stroke={reached ? '#C5F467' : '#30352F'}
                      strokeWidth="1.5"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Selected Stage Technical Inspector */}
            <div className="mt-4 grid grid-cols-1 gap-8 border-t border-[#30352F] pt-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A4AAA2]">
                  <span className="text-[#C5F467]">Stage {activeNode.step}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeNode.focusConcept}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#F2F1EA]">
                  {activeNode.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A4AAA2] sm:text-base">
                  {activeNode.description}
                </p>

                <div className="mt-5 rounded-lg border border-[#30352F] bg-[#171917] px-4 py-3 font-mono text-xs text-[#F2F1EA] overflow-x-auto">
                  <span className="text-[#A4AAA2]">trace_shape: </span>
                  <span className="text-[#C5F467]">{activeNode.examplePayload}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="font-mono text-xs text-[#A4AAA2]">
                  Key Design Considerations
                </p>
                <ul className="mt-3 space-y-3">
                  {activeNode.engineeringConcerns.map((concern) => (
                    <li
                      key={concern}
                      className="flex items-start gap-3 border-b border-[#30352F]/60 pb-2.5 text-sm text-[#F2F1EA]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#C5F467]"
                      />
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 font-mono text-xs text-[#A4AAA2]">
          Note: This interactive blueprint illustrates system design principles I
          study and explore when prototyping intelligent applications.
        </p>
      </div>
    </section>
  );
};
