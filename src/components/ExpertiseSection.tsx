import React, { useState } from 'react';
import {
  EXPOSURE_LEGEND,
  ExposureLevel,
  SKILL_CATEGORIES,
} from '../data/portfolioData';
import { Reveal } from './MotionPrimitives';

type FilterOption = 'All' | ExposureLevel;

const FILTER_OPTIONS: FilterOption[] = [
  'All',
  'Development Experience',
  'Hands-on Project Exposure',
  'Technical Knowledge & Study',
];

function ExposureGlyph({ level }: { level: ExposureLevel }) {
  if (level === 'Development Experience') {
    return (
      <span
        aria-label="Development Experience"
        title="Development Experience"
        className="inline-block h-2 w-2 shrink-0 bg-[#C5F467]"
      />
    );
  }
  if (level === 'Hands-on Project Exposure') {
    return (
      <span
        aria-label="Hands-on Project Exposure"
        title="Hands-on Project Exposure"
        className="inline-block h-2 w-2 shrink-0 border border-[#F2F1EA] bg-[#F2F1EA]/40"
      />
    );
  }
  return (
    <span
      aria-label="Technical Knowledge & Study"
      title="Technical Knowledge & Study"
      className="inline-block h-2 w-2 shrink-0 border border-[#A4AAA2]"
    />
  );
}

export const ExpertiseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  return (
    <section
      id="expertise"
      className="border-b border-[#30352F] bg-[#101110] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs tracking-wider text-[#C5F467]">
                02 — Engineering Capabilities
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
                Understanding systems beyond the interface.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A4AAA2]">
                A transparent overview of technologies across my full-stack
                internship experience, hands-on experimentation, and ongoing
                AI/ML technical study.
              </p>
            </div>

            {/* Interactive Exposure Tier Filter */}
            <div
              role="group"
              aria-label="Filter capabilities by exposure tier"
              className="flex flex-wrap gap-1.5 rounded-lg border border-[#30352F] bg-[#171917] p-1"
            >
              {FILTER_OPTIONS.map((option) => {
                const isSelected = activeFilter === option;
                const shortLabel =
                  option === 'All'
                    ? 'All'
                    : option === 'Development Experience'
                    ? 'Development'
                    : option === 'Hands-on Project Exposure'
                    ? 'Hands-on Study'
                    : 'Conceptual Study';
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setActiveFilter(option)}
                    className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#20251F] text-[#C5F467]'
                        : 'text-[#A4AAA2] hover:text-[#F2F1EA]'
                    }`}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Exposure Distinction Legend */}
        <Reveal delay={0.06}>
          <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-[#30352F] bg-[#171917] p-5 md:grid-cols-3">
            {EXPOSURE_LEGEND.map((entry) => (
              <div key={entry.level} className="flex items-start gap-3">
                <div className="mt-1.5">
                  <ExposureGlyph level={entry.level} />
                </div>
                <div>
                  <p className="font-mono text-xs font-medium text-[#F2F1EA]">
                    {entry.level}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#A4AAA2]">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 6 Capability Categories Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, idx) => {
            const visibleItems =
              activeFilter === 'All'
                ? category.items
                : category.items.filter((item) => item.exposure === activeFilter);

            const isDimmed = visibleItems.length === 0;

            return (
              <Reveal
                key={category.id}
                delay={0.04 * idx}
                className={`flex flex-col justify-between rounded-xl border border-[#30352F] bg-[#171917] p-6 transition-opacity duration-200 ${
                  isDimmed ? 'opacity-40' : 'opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#30352F] pb-4">
                    <h3 className="font-display text-lg font-semibold text-[#F2F1EA]">
                      {category.title}
                    </h3>
                    <span className="font-mono text-xs tabular-nums text-[#A4AAA2]">
                      {visibleItems.length.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#A4AAA2]">
                    {category.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {(visibleItems.length > 0 ? visibleItems : category.items).map(
                      (skill) => (
                        <li
                          key={`${category.id}-${skill.name}`}
                          className="flex items-center gap-2.5 border-b border-[#30352F]/50 pb-2 text-sm text-[#F2F1EA]"
                        >
                          <ExposureGlyph level={skill.exposure} />
                          <span className="leading-snug">{skill.name}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
