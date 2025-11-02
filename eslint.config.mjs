import next from "eslint-config-next";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/",
      ".next/",
      "dist/",
      "build/", 
      "out/",
      "*.config.js",
      "*.config.mjs"
    ]
  },
  ...next,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-require-imports": "off",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "off",
      "no-console": "off",
      "no-debugger": "off",
    },
  },
];