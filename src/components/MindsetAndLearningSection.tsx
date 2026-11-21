import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { LEARNING_TOPICS, MINDSET_STEPS } from '../data/portfolioData';
import { EASE_EDITORIAL, Reveal } from './MotionPrimitives';

export const MindsetAndLearningSection: React.FC = () => {
  const [activeMindsetIndex, setActiveMindsetIndex] = useState<number>(0);
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(
    LEARNING_TOPICS[0].id
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* SECTION 08 — ENGINEERING MINDSET */}
      <section
        id="mindset"
        className="border-b border-[#30352F] bg-[#101110] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs tracking-wider text-[#C5F467]">
              06 — Engineering Mindset
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
              How I approach building.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {MINDSET_STEPS.map((step, index) => {
              const isSelected = activeMindsetIndex === index;
              return (
                <Reveal key={step.number} delay={0.05 * index}>
                  <button
                    type="button"
                    onClick={() => setActiveMindsetIndex(index)}
                    aria-expanded={isSelected}
                    className={`flex h-full w-full flex-col justify-between rounded-xl border p-6 text-left transition-colors duration-150 ${
                      isSelected
                        ? 'border-[#C5F467] bg-[#171917]'
                        : 'border-[#30352F] bg-[#171917]/60 hover:border-[#A4AAA2]/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-xs tabular-nums ${
                            isSelected ? 'text-[#C5F467]' : 'text-[#A4AAA2]'
                          }`}
                        >
                          {step.number}
                        </span>
                        <span className="font-mono text-[11px] text-[#A4AAA2]">
                          {isSelected ? 'Active' : 'Inspect'}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-lg font-semibold text-[#F2F1EA]">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#A4AAA2]">
                        {step.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#30352F] pt-4">
                      <p className="font-mono text-[11px] text-[#A4AAA2]">
                        Guiding Checks
                      </p>
                      <ul className="mt-2.5 space-y-2">
                        {step.guidingQuestions.map((question) => (
                          <li
                            key={question}
                            className="flex items-start gap-2 text-xs leading-relaxed text-[#F2F1EA]/90"
                          >
                            <span
                              aria-hidden="true"
                              className={`mt-1.5 h-1 w-1 shrink-0 ${
                                isSelected ? 'bg-[#C5F467]' : 'bg-[#A4AAA2]'
                              }`}
                            />
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 09 — LEARNING & TECHNICAL EXPLORATION */}
      <section
        id="learning"
        className="border-b border-[#30352F] bg-[#171917] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs tracking-wider text-[#C5F467]">
              07 — Continuous Study
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
              Always learning. Always building.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A4AAA2]">
              Active areas of technical study and architectural exploration as I
              deepen my work across machine learning and intelligent systems.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {LEARNING_TOPICS.map((topic, index) => {
              const isOpen = expandedTopicId === topic.id;
              return (
                <Reveal key={topic.id} delay={0.03 * index}>
                  <div
                    className={`rounded-xl border transition-colors ${
                      isOpen
                        ? 'border-[#C5F467]/70 bg-[#101110]'
                        : 'border-[#30352F] bg-[#101110]/70 hover:border-[#A4AAA2]/50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedTopicId(isOpen ? null : topic.id)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <div>
                        <h3 className="font-display text-base font-semibold text-[#F2F1EA] sm:text-lg">
                          {topic.title}
                        </h3>
                        <p className="mt-1 font-mono text-xs text-[#A4AAA2]">
                          {topic.focus}
                        </p>
                      </div>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 text-[#A4AAA2] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C5F467]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={
                            prefersReducedMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: -4 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.18,
                            ease: EASE_EDITORIAL,
                          }}
                          className="border-t border-[#30352F] px-5 py-4"
                        >
                          <p className="text-sm leading-relaxed text-[#A4AAA2]">
                            {topic.explorationNotes}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
