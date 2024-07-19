module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  semi: false,
  trailingComma: "es5",
  printWidth: 80,
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^@repo/*", "", "^[.](.*)"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
}
