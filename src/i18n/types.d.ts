import type messages from "./messages/de";

declare module "next-intl" {
  interface AppConfig {
    Locale: "de" | "en";
    Messages: typeof messages;
  }
}
