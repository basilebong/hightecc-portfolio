import type de from "./de";

type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { -readonly [K in keyof T]: Widen<T[K]> }
    : T extends object
      ? { -readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type MessageShape = Widen<typeof de>;
