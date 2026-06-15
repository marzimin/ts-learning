import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // Detect React version automatically (silences the plugin-react warning).
  { settings: { react: { version: "detect" } } },
  // Code conventions from CLAUDE.md — enforced, not just documented.
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    rules: {
      "no-var": "error",              // never var
      "prefer-const": "error",        // const by default, let only when reassigned
      "eqeqeq": ["error", "always"],  // === always, never ==
      // Starter files intentionally contain not-yet-used scaffolding, so this
      // warns rather than blocks. Clean it up before marking a week done.
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);
