import {
  createOgImageHandler,
  generateLocaleStaticParams,
  OG_CONTENT_TYPE,
  OG_SIZE,
} from "@/lib/og-image";

export const alt = "Hightecc";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamicParams = false;

export const generateStaticParams = generateLocaleStaticParams;

export default createOgImageHandler({ namespace: "metadata.home" });
