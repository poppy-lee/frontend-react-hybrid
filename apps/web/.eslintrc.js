const eslintConfig = require("@repo/configs/eslintrc.js")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintConfig,
  env: {
    browser: true,
    node: true,
  },
  extends: [...eslintConfig.extends, "next"],
}
