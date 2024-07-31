const eslintConfig = require("@repo/configs/eslintrc.js")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintConfig,
  env: { ...eslintConfig.env, browser: true },
  extends: [...eslintConfig.extends, "next"],
  ignorePatterns: ["*.js", "*.ts"],
}
