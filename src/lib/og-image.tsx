import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const PALETTE = {
  bg: "#0a0a09",
  ink: "#ffffff",
  mute: "#8a8a85",
  body: "#c8c8c8",
  blobA: "#ff6b35",
  blobB: "#ff8555",
  blobC: "#ffb37a",
} as const;

const FONT = {
  display: "DM Sans",
  serif: "Merriweather",
  mono: "JetBrains Mono",
} as const;

const fontCache = new Map<string, Promise<ArrayBuffer>>();

async function fetchGoogleFont(
  family: string,
  weight: number,
  italic: boolean,
): Promise<ArrayBuffer> {
  const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:${axis}&display=swap`;
  const cssRes = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15",
    },
  });
  if (!cssRes.ok) {
    throw new Error(`Google Fonts CSS request failed for ${family} ${weight}: ${cssRes.status}`);
  }
  const css = await cssRes.text();
  const url = css.match(/src:\s*url\((https:\/\/[^)]+)\)\s+format\(/)?.[1];
  if (!url) throw new Error(`Could not extract font URL for ${family} ${weight}`);
  const fontRes = await fetch(url);
  if (!fontRes.ok) {
    throw new Error(`Font binary fetch failed for ${family} ${weight}: ${fontRes.status}`);
  }
  return fontRes.arrayBuffer();
}

function loadGoogleFont(family: string, weight: number, italic = false): Promise<ArrayBuffer> {
  const key = `${family}:${weight}:${italic}`;
  const cached = fontCache.get(key);
  if (cached) return cached;
  const pending = fetchGoogleFont(family, weight, italic);
  pending.catch(() => fontCache.delete(key));
  fontCache.set(key, pending);
  return pending;
}

type RenderOgImageProps = {
  title: string;
  description: string;
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
};

export async function renderOgImage({
  title,
  description,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: RenderOgImageProps) {
  const [dmSans, merriweatherItalic, jetBrainsMono] = await Promise.all([
    loadGoogleFont(FONT.display, 700),
    loadGoogleFont(FONT.serif, 400, true),
    loadGoogleFont(FONT.mono, 500),
  ]);

  const metaStyle = {
    fontFamily: FONT.mono,
    fontSize: 16,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  };

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: PALETTE.bg,
        color: PALETTE.ink,
        fontFamily: FONT.display,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "flex" }}>
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -180,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${PALETTE.blobA} 0%, transparent 65%)`,
            filter: "blur(90px)",
            opacity: 0.75,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 220,
            width: 580,
            height: 580,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${PALETTE.blobB} 0%, transparent 65%)`,
            filter: "blur(80px)",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 280,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${PALETTE.blobC} 0%, transparent 60%)`,
            filter: "blur(70px)",
            opacity: 0.4,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ ...metaStyle, color: PALETTE.ink }}>{topLeft}</span>
          <span style={{ ...metaStyle, color: PALETTE.mute }}>{topRight}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1040,
          }}
        >
          <span
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: PALETTE.ink,
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontFamily: FONT.serif,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 30,
              lineHeight: 1.4,
              color: PALETTE.body,
              maxWidth: 880,
              marginTop: 28,
            }}
          >
            {description}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ ...metaStyle, color: PALETTE.mute }}>{bottomLeft}</span>
          <span style={{ ...metaStyle, color: PALETTE.mute }}>{bottomRight}</span>
        </div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: FONT.display, data: dmSans, weight: 700, style: "normal" },
        { name: FONT.serif, data: merriweatherItalic, weight: 400, style: "italic" },
        { name: FONT.mono, data: jetBrainsMono, weight: 500, style: "normal" },
      ],
    },
  );
}
