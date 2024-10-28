const eslintConfig = require("@repo/configs/eslintrc.js")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintConfig,
  env: { ...eslintConfig.env, browser: true },
  extends: [...eslintConfig.extends],
  plugins: [...eslintConfig.plugins, "@next/eslint-plugin-next"],
  ignorePatterns: ["*.js", "*.ts"],
}
