import React, { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';

export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  y = 18,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: 0.55,
        delay,
        ease: EASE_EDITORIAL,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-[#C5F467]"
    />
  );
};

interface LoadingSequenceProps {
  onComplete: () => void;
}

export const LoadingSequence: React.FC<LoadingSequenceProps> = ({
  onComplete,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 700);

    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#101110]"
        >
          <div className="flex flex-col items-start gap-3 px-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              className="font-mono text-xs tracking-wider text-[#A4AAA2]"
            >
              Memoona Mobeen · Portfolio
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
              className="h-[1px] w-48 origin-left bg-[#C5F467]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CustomCursor: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 520, damping: 40 });
  const cursorY = useSpring(0, { stiffness: 520, damping: 40 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const handleMove = (e: MouseEvent) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, input, textarea, select, [role="button"]');
      setIsHoveringInteractive(Boolean(interactive));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (!enabled || !isVisible) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isHoveringInteractive ? 1.8 : 1,
        borderColor: isHoveringInteractive ? '#C5F467' : 'rgba(242, 241, 234, 0.45)',
        backgroundColor: isHoveringInteractive
          ? 'rgba(197, 244, 103, 0.10)'
          : 'transparent',
      }}
      transition={{ duration: 0.16, ease: EASE_EDITORIAL }}
      className="pointer-events-none fixed top-0 left-0 z-[80] -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border"
    />
  );
};
