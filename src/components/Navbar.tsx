import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Linkedin, Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../data/portfolioData';
import { EASE_EDITORIAL } from './MotionPrimitives';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#101110]/92 backdrop-blur-md border-b border-[#30352F]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="font-display text-base font-semibold tracking-tight text-[#F2F1EA] whitespace-nowrap shrink-0 transition-colors hover:text-[#C5F467]"
          >
            MEMOONA MOBEEN / MM.
          </a>

          {/* Zone 2: Clean Typography Nav Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7"
          >
            {NAV_LINKS.map((item) => {
              const isHovered = hoveredHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  onMouseLeave={() => setHoveredHref(null)}
                  className="relative py-2 text-sm font-medium text-[#A4AAA2] transition-colors hover:text-[#F2F1EA] whitespace-nowrap shrink-0"
                >
                  {item.label}
                  {!prefersReducedMotion && isHovered && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ duration: 0.18, ease: EASE_EDITORIAL }}
                      className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[#C5F467]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + LinkedIn */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Memoona Mubeen on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#30352F] text-[#A4AAA2] transition-colors hover:border-[#C5F467] hover:text-[#C5F467]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#C5F467] px-4 text-sm font-medium text-[#101110] transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#30352F] text-[#F2F1EA] transition-colors hover:border-[#C5F467] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
            className="fixed inset-x-0 top-16 bottom-0 z-30 border-t border-[#30352F] bg-[#101110]/98 px-6 py-8 backdrop-blur-md md:hidden"
          >
            <nav aria-label="Mobile navigation links" className="flex flex-col gap-2">
              {NAV_LINKS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: prefersReducedMotion ? 0 : idx * 0.04,
                    ease: EASE_EDITORIAL,
                  }}
                  className="flex min-h-[48px] items-center justify-between border-b border-[#30352F]/70 py-3 font-display text-xl font-medium text-[#F2F1EA] transition-colors hover:text-[#C5F467]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#A4AAA2]">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#C5F467] px-5 py-3 text-sm font-medium text-[#101110]"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#30352F] px-5 py-3 text-sm font-medium text-[#F2F1EA] transition-colors hover:border-[#C5F467]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
