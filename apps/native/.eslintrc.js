const eslintConfig = require("@repo/configs/eslintrc")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintConfig,
  extends: [...eslintConfig.extends, "expo"],
  ignorePatterns: ["*.js", "*.ts"],
}
