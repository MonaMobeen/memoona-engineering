import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { PROJECT_CASE_STUDIES, ProjectCaseStudy } from '../data/portfolioData';
import { EASE_EDITORIAL, Reveal } from './MotionPrimitives';
import { ProjectVisualizer } from './ProjectVisualizer';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCaseStudy | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="border-b border-[#30352F] bg-[#101110] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-[#C5F467]">
            04 — Selected Engineering Concepts
          </p>
          <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
              Exploring problems worth solving.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#A4AAA2]">
              All items below are proposed system architectures and conceptual
              case studies—presented transparently as design explorations rather
              than deployed production products.
            </p>
          </div>
        </Reveal>

        {/* Editorial Bento Grid of 5 Case Studies */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECT_CASE_STUDIES.map((project, index) => {
            const isFeaturedWide = index === 0;
            return (
              <Reveal
                key={project.id}
                delay={0.05 * index}
                className={isFeaturedWide ? 'lg:col-span-2' : ''}
              >
                <article className="group flex h-full flex-col justify-between rounded-xl border border-[#30352F] bg-[#171917] p-6 transition-colors duration-200 hover:border-[#A4AAA2]/70 sm:p-7">
                  <div
                    className={
                      isFeaturedWide
                        ? 'grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center'
                        : 'flex flex-col gap-5'
                    }
                  >
                    {/* Visual Diagram */}
                    <div
                      className={`overflow-hidden rounded-lg border border-[#30352F] bg-[#101110] ${
                        isFeaturedWide
                          ? 'aspect-[16/8] lg:col-span-5 lg:aspect-[12/7]'
                          : 'aspect-[12/5]'
                      }`}
                    >
                      <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]">
                        <ProjectVisualizer diagramId={project.id} />
                      </div>
                    </div>

                    {/* Text & Architecture Preview */}
                    <div className={isFeaturedWide ? 'lg:col-span-7' : ''}>
                      {/* Unboxed Metadata Line */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-[#A4AAA2]">
                        <span className="tabular-nums text-[#C5F467]">
                          {project.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#F2F1EA]">
                          {project.statusLabel}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#F2F1EA]">
                        {project.name}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-[#A4AAA2] sm:text-base">
                        {project.summary}
                      </p>

                      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-[#30352F] pt-4 sm:grid-cols-2">
                        <div>
                          <p className="font-mono text-[11px] text-[#A4AAA2]">
                            Problem Statement
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#F2F1EA]/90">
                            {project.problemStatement}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[11px] text-[#A4AAA2]">
                            Proposed Solution
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#F2F1EA]/90">
                            {project.proposedSolution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Technologies (unboxed) + Expand Case Study Trigger */}
                  <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#30352F] pt-4 sm:flex-row sm:items-center">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-[#A4AAA2]">
                      {project.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-[#30352F]">
                              /
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 self-start rounded-lg border border-[#30352F] bg-[#101110] px-4 py-2 text-xs font-medium text-[#F2F1EA] transition-colors hover:border-[#C5F467] hover:text-[#C5F467] whitespace-nowrap shrink-0 sm:self-auto"
                    >
                      <span>Expand Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Expandable Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 16, scale: 0.99 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12, scale: 0.99 }
              }
              transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-[#30352F] bg-[#171917] p-6 sm:p-8"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#30352F] pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-[#A4AAA2]">
                    <span className="text-[#C5F467]">
                      Concept {selectedProject.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#F2F1EA]">
                      {selectedProject.statusLabel}
                    </span>
                  </div>
                  <h3
                    id="case-study-modal-title"
                    className="mt-2 font-display text-2xl font-semibold text-[#F2F1EA] sm:text-3xl"
                  >
                    {selectedProject.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close case study"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#30352F] bg-[#101110] text-[#A4AAA2] transition-colors hover:border-[#C5F467] hover:text-[#F2F1EA]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Architecture SVG Preview */}
              <div className="mt-6 overflow-hidden rounded-lg border border-[#30352F] bg-[#101110] aspect-[12/5]">
                <ProjectVisualizer diagramId={selectedProject.id} />
              </div>

              {/* Problem & Solution */}
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs text-[#C5F467]">
                    Problem Statement
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#A4AAA2]">
                    {selectedProject.problemStatement}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#C5F467]">
                    Proposed Solution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#A4AAA2]">
                    {selectedProject.proposedSolution}
                  </p>
                </div>
              </div>

              {/* Technical Architecture */}
              <div className="mt-6 border-t border-[#30352F] pt-5">
                <p className="font-mono text-xs text-[#F2F1EA]">
                  Proposed Technical Architecture
                </p>
                <ul className="mt-3 space-y-2.5">
                  {selectedProject.technicalArchitecture.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm text-[#A4AAA2]"
                    >
                      <span className="font-mono text-xs tabular-nums text-[#C5F467]">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Capabilities */}
              <div className="mt-6 border-t border-[#30352F] pt-5">
                <p className="font-mono text-xs text-[#F2F1EA]">
                  Target Capabilities
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {selectedProject.keyCapabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 text-sm text-[#F2F1EA]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#C5F467]"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Potential Stack & Design Notes */}
              <div className="mt-6 border-t border-[#30352F] pt-5">
                <p className="font-mono text-xs text-[#F2F1EA]">
                  Potential Stack
                </p>
                <p className="mt-2 font-mono text-xs leading-relaxed text-[#A4AAA2]">
                  {selectedProject.technologies.join(' · ')}
                </p>
                <p className="mt-4 rounded-lg border border-[#30352F] bg-[#101110] p-4 text-xs leading-relaxed text-[#A4AAA2]">
                  <span className="font-mono text-[#F2F1EA]">
                    Scope Notice:{' '}
                  </span>
                  {selectedProject.designNotes}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
