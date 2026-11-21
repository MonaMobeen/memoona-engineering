/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useState } from 'react';
import { MotionConfig } from 'motion/react';
import {
  CustomCursor,
  LoadingSequence,
  ScrollProgressBar,
} from './components/MotionPrimitives';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ContextEngineeringSection } from './components/ContextEngineeringSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MindsetAndLearningSection } from './components/MindsetAndLearningSection';
import { ContactAndFooter } from './components/ContactAndFooter';

export default function App() {
  const [, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#101110] text-[#F2F1EA]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:rounded-lg focus:bg-[#C5F467] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#101110]"
        >
          Skip to main content
        </a>

        <LoadingSequence onComplete={handleIntroComplete} />
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />

        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <ContextEngineeringSection />
          <ProjectsSection />
          <ExperienceSection />
          <MindsetAndLearningSection />
        </main>

        <ContactAndFooter />
      </div>
    </MotionConfig>
  );
}
