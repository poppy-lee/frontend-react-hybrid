const eslintConfig = require("@repo/configs/eslintrc.js")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintConfig,
  extends: [...eslintConfig.extends, "next"],
}