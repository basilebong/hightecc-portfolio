"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import styles from "./reveal.module.css";

const cn = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(" ");

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
      setRevealed(true);
      return;
    }

    setArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(className, styles.reveal, armed && !revealed && styles.hidden)}>
      {children}
    </div>
  );
}
