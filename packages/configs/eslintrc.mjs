/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  env: { es2022: true, node: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-react-compiler"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-var-requires": "off",
    "prettier/prettier": "warn",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
    "react/react-in-jsx-scope": "off",
    "react-compiler/react-compiler": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    react: { version: "detect" },
  },
}
