import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Include Next.js core-web-vitals rules
  {
    rules: {
      "no-unused-vars": ["warn"], // Add or override the no-unused-vars rule
    },
  },
];

export default eslintConfig;
