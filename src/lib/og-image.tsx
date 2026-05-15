import { readFile } from "node:fs/promises";
import path from "node:path";

import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

export { generateLocaleStaticParams } from "@/i18n/routing";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const PALETTE = {
  bg: "#0a0a09",
  ink: "#ffffff",
  body: "#c8c8c8",
} as const;

const FONT = {
  sans: "DM Sans",
  serif: "Merriweather",
} as const;

const FONTS_DIR = path.join(process.cwd(), "src/assets/fonts");
const GRAIN_PATH = path.join(process.cwd(), "src/assets/og-grain.png");

type Assets = {
  sans: Buffer;
  serif: Buffer;
  grainSrc: string;
};

let assetsPromise: Promise<Assets> | null = null;

function getAssets(): Promise<Assets> {
  assetsPromise ??= (async () => {
    const [sans, serif, grain] = await Promise.all([
      readFile(path.join(FONTS_DIR, "dm-sans-400.woff")),
      readFile(path.join(FONTS_DIR, "merriweather-700.woff")),
      readFile(GRAIN_PATH),
    ]);
    return {
      sans,
      serif,
      grainSrc: `data:image/png;base64,${grain.toString("base64")}`,
    };
  })();
  return assetsPromise;
}

function renderOgImage(title: string, description: string, assets: Assets) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: [
          "radial-gradient(ellipse 900px 700px at 85% 25%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 35%, transparent 70%)",
          "radial-gradient(ellipse 1000px 800px at 10% 90%, rgba(220,220,220,0.45) 0%, rgba(220,220,220,0.15) 35%, transparent 70%)",
          "radial-gradient(circle 500px at 55% 60%, rgba(180,180,180,0.3) 0%, rgba(180,180,180,0.1) 40%, transparent 75%)",
          PALETTE.bg,
        ].join(", "),
        color: PALETTE.ink,
        fontFamily: FONT.sans,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexWrap: "wrap",
          opacity: 0.14,
        }}
      >
        {Array.from({ length: 8 * 4 }).map((_, i) => (
          // biome-ignore lint/performance/noImgElement: rendered by Satori, not a browser
          <img
            // biome-ignore lint/suspicious/noArrayIndexKey: tile grid is static
            key={i}
            src={assets.grainSrc}
            alt=""
            width={160}
            height={160}
          />
        ))}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
        }}
      >
        <span
          style={{
            fontFamily: FONT.serif,
            fontWeight: 700,
            fontSize: 84,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: PALETTE.ink,
            maxWidth: 1040,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: FONT.sans,
            fontWeight: 400,
            fontSize: 28,
            lineHeight: 1.5,
            color: PALETTE.body,
            maxWidth: 880,
            marginTop: 36,
          }}
        >
          {description}
        </span>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: FONT.serif, data: assets.serif, weight: 700, style: "normal" },
        { name: FONT.sans, data: assets.sans, weight: 400, style: "normal" },
      ],
    },
  );
}

type MetadataNamespace = "metadata.home" | "metadata.impressum";

export function createOgImageHandler({ namespace }: { namespace: MetadataNamespace }) {
  return async function OgImage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    if (!hasLocale(routing.locales, lang)) notFound();
    const [meta, assets] = await Promise.all([
      getTranslations({ locale: lang, namespace }),
      getAssets(),
    ]);
    return renderOgImage(meta("title"), meta("description"), assets);
  };
}
