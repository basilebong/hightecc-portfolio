import path from "node:path";
import { fileURLToPath } from "node:url";

import { checkTranslations, checkUndefinedKeys, checkUnusedKeys } from "@lingual/i18n-check";
import {
  formatCheckResultTable,
  formatInvalidTranslationsResultTable,
} from "@lingual/i18n-check/dist/errorReporters.js";
import type { Options, TranslationFile } from "@lingual/i18n-check/dist/types.js";
import { flattenTranslations } from "@lingual/i18n-check/dist/utils/flattenTranslations.js";
import { glob } from "glob";

import deMessages from "../src/i18n/messages/de";
import enMessages from "../src/i18n/messages/en";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");

const source: TranslationFile = {
  reference: null,
  name: "de",
  content: flattenTranslations(deMessages as Record<string, unknown>),
};

const target: TranslationFile = {
  reference: "de",
  name: "en",
  content: flattenTranslations(enMessages as Record<string, unknown>),
};

const options: Options = {
  format: "next-intl",
  checks: ["invalidKeys", "missingKeys", "unused", "undefined"],
};

async function main() {
  const sourceFiles = await glob("src/**/*.{ts,tsx}", {
    cwd: repoRoot,
    ignore: ["src/i18n/**", "**/*.d.ts"],
    absolute: true,
  });

  let problems = 0;

  const parity = checkTranslations([source], [target], options);
  if (parity.missingKeys && Object.values(parity.missingKeys).some((v) => v.length)) {
    console.error("\nMissing keys in target locale (defined in de, absent in en):");
    console.error(formatCheckResultTable(parity.missingKeys));
    problems += Object.values(parity.missingKeys).flat().length;
  }
  if (parity.invalidKeys && Object.values(parity.invalidKeys).some((v) => v.length)) {
    console.error("\nInvalid translations (shape mismatch between de and en):");
    console.error(formatInvalidTranslationsResultTable(parity.invalidKeys));
    problems += Object.values(parity.invalidKeys).flat().length;
  }

  const undefinedKeys = await checkUndefinedKeys([source], sourceFiles, options);
  if (undefinedKeys && Object.values(undefinedKeys).some((v) => v.length)) {
    console.error("\nUndefined keys (used in code, missing from de):");
    console.error(formatCheckResultTable(undefinedKeys));
    problems += Object.values(undefinedKeys).flat().length;
  }

  const unusedKeys = await checkUnusedKeys([source, target], sourceFiles, options);
  if (unusedKeys && Object.values(unusedKeys).some((v) => v.length)) {
    console.error("\nUnused (orphaned) keys (defined but never referenced):");
    console.error(formatCheckResultTable(unusedKeys));
    problems += Object.values(unusedKeys).flat().length;
  }

  if (problems === 0) {
    process.stdout.write("i18n-check: ok (de + en in sync, no orphans, no undefined keys)\n");
    return;
  }

  console.error(`\ni18n-check: ${problems} problem(s) found.`);
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
