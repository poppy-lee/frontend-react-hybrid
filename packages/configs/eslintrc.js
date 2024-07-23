/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
  },
}