"use client";

import Image from "next/image";
import { type CSSProperties, type PointerEvent, useRef, useState } from "react";

import { ArrowsLeftRight } from "@phosphor-icons/react";

import styles from "./work.module.css";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  ariaLabel: string;
};

const SIZES = "(max-width: 1336px) 100vw, 1280px";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [split, setSplit] = useState(50);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.max(0, Math.min(100, pct)));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromClientX(event.clientX);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowLeft") setSplit((s) => Math.max(0, s - step));
    else if (event.key === "ArrowRight") setSplit((s) => Math.min(100, s + step));
    else if (event.key === "Home") setSplit(0);
    else if (event.key === "End") setSplit(100);
    else return;
    event.preventDefault();
  };

  return (
    <div
      ref={ref}
      className={styles.ba}
      style={{ "--split": `${split}%` } as CSSProperties}
      role="slider"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(split)}
      aria-valuetext={`${Math.round(split)}%`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
    >
      <Image className={styles.baImg} src={beforeSrc} alt={beforeAlt} fill sizes={SIZES} />
      <div className={styles.afterWrap}>
        <Image className={styles.baImg} src={afterSrc} alt={afterAlt} fill sizes={SIZES} />
      </div>
      <div className={`${styles.balab} ${styles.balabL}`}>{beforeLabel}</div>
      <div className={`${styles.balab} ${styles.balabR}`}>{afterLabel}</div>
      <div className={styles.divider} aria-hidden />
      <div className={styles.handle} aria-hidden>
        <ArrowsLeftRight />
      </div>
    </div>
  );
}
