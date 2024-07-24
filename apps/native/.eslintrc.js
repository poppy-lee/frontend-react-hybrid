const eslintConfig = require("@repo/configs/eslintrc.js")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintConfig,
  env: {
    es2022: true,
    node: true,
  },
  extends: [...eslintConfig.extends, "expo"],
}
