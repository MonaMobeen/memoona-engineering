import React from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { Reveal } from './MotionPrimitives';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="border-b border-[#30352F] bg-[#171917] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-[#C5F467]">
            05 — Experience
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
            Applied AI &amp; software engineering experience.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A4AAA2]">
            Progression from frontend and MERN full-stack internships into
            applied AI/ML engineering.
          </p>
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative mt-12 pl-6 sm:pl-10">
          {/* Timeline Vertical Spine */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2 w-[1px] bg-[#30352F] sm:left-3"
          />

          <div className="space-y-8">
            {EXPERIENCE_TIMELINE.map((entry, idx) => (
              <Reveal key={entry.id} delay={0.08 * idx}>
                <article className="relative rounded-xl border border-[#30352F] bg-[#101110] p-6 sm:p-8">
                  {/* Timeline Node Marker */}
                  <span
                    aria-hidden="true"
                    className="absolute top-8 -left-[22px] h-3 w-3 rounded-full border-2 border-[#C5F467] bg-[#101110] sm:-left-[34px]"
                  />

                  <div className="flex flex-col justify-between gap-2 border-b border-[#30352F] pb-5 sm:flex-row sm:items-baseline">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#F2F1EA] sm:text-2xl">
                        {entry.company}
                      </h3>
                      <p className="mt-1 text-base font-medium text-[#C5F467]">
                        {entry.role}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-[#A4AAA2] sm:text-right">
                      <p className="tabular-nums text-[#F2F1EA]">
                        {entry.period}
                      </p>
                      <p className="mt-0.5">{entry.type}</p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#A4AAA2] sm:text-base">
                    {entry.description}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {entry.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-[#F2F1EA] sm:text-sm"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#C5F467]"
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
