import type { CSSProperties, ReactNode } from "react";

import styles from "./grid.module.css";

const cn = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(" ");

const px = (v: number | string) => (typeof v === "number" ? `${v}px` : v);

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}

type RowProps = {
  children: ReactNode;
  className?: string;
  rowGap?: number | string;
};

export function Row({ children, className, rowGap }: RowProps) {
  const style = rowGap !== undefined ? { rowGap: px(rowGap) } : undefined;
  return (
    <div className={cn(styles.row, className)} style={style}>
      {children}
    </div>
  );
}

type ColProps = {
  children: ReactNode;
  className?: string;
  span?: number;
  md?: number;
  start?: number;
  mdStart?: number;
};

export function Col({ children, className, span = 12, md, start, mdStart }: ColProps) {
  const mdSpan = md ?? span;
  const base = start ? `${start} / span ${span}` : `span ${span}`;
  const desktop = mdStart ? `${mdStart} / span ${mdSpan}` : `span ${mdSpan}`;
  const style = {
    "--col": base,
    "--col-md": desktop,
  } as CSSProperties;
  return (
    <div className={cn(styles.col, className)} style={style}>
      {children}
    </div>
  );
}
