import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js and TypeScript configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Define files to lint
    files: ["**/*.ts", "**/*.tsx"],
    // Ignore generated files and other irrelevant directories
    ignores: [
      "src/generated/**", // Excludes wasm.js and other Prisma-generated files
      "node_modules/**",
      "dist/**",
      ".next/**",
      "build/**",
    ],
    // Environment settings
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    // TypeScript parser and plugin
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // Reference your tsconfig.json
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    // Optional: Relax specific rules if needed for your code
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;