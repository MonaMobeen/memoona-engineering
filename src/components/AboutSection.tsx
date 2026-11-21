import React, { useState } from 'react';
import { GraduationCap, MapPin, User } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Reveal } from './MotionPrimitives';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="border-b border-[#30352F] bg-[#171917] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-[#C5F467]">
            {PROFILE.about.identifier}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
            {PROFILE.about.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Portrait & Education Column */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-[#30352F] bg-[#101110]">
              <div className="aspect-square w-full overflow-hidden bg-[#20251F]">
                {!imgError ? (
                  <img
                    src={PROFILE.portraitPath}
                    alt="Portrait of Memoona Mobeen, Junior AI/ML Engineer and Full-Stack Developer"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                    <User className="h-10 w-10 text-[#A4AAA2]" aria-hidden="true" />
                    <span className="font-display text-base font-medium text-[#F2F1EA]">
                      {PROFILE.fullName}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-[#30352F] px-5 py-3.5 font-mono text-xs text-[#A4AAA2]">
                <span>{PROFILE.fullName}</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#C5F467]" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </span>
              </div>
            </div>

            {/* Education Card (No CGPA) */}
            <div className="mt-5 rounded-xl border border-[#30352F] bg-[#101110] p-5">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#30352F] bg-[#171917] text-[#C5F467]">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#A4AAA2]">Education</p>
                  <h3 className="mt-1 font-display text-base font-semibold text-[#F2F1EA]">
                    {PROFILE.education.degree}
                  </h3>
                  <p className="mt-1 text-sm text-[#A4AAA2]">
                    {PROFILE.education.institution}
                  </p>
                  <p className="mt-2 font-mono text-xs tabular-nums text-[#C5F467]">
                    Graduated {PROFILE.education.graduationYear}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* First-person Narrative Column */}
          <Reveal delay={0.14} className="lg:col-span-7">
            <div className="space-y-6 text-base leading-relaxed text-[#A4AAA2] sm:text-[17px]">
              {PROFILE.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0 ? 'text-[#F2F1EA] text-lg leading-relaxed' : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Focus Summary Row */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[#30352F] pt-8 sm:grid-cols-3">
              <div>
                <p className="font-mono text-xs text-[#A4AAA2]">Foundation</p>
                <p className="mt-1.5 font-display text-sm font-medium text-[#F2F1EA]">
                  Frontend &amp; Full-Stack Engineering
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#A4AAA2]">Core Focus</p>
                <p className="mt-1.5 font-display text-sm font-medium text-[#F2F1EA]">
                  AI, Machine Learning &amp; Deep Learning
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#A4AAA2]">Systems Interest</p>
                <p className="mt-1.5 font-display text-sm font-medium text-[#F2F1EA]">
                  RAG, Context Engineering &amp; Agents
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
