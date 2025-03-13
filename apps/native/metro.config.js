// Learn more
//   * https://docs.expo.io/guides/customizing-metro
//   * https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require("expo/metro-config")
const { FileStore } = require("metro-cache")
const path = require("path")

// Find the project and workspace directories
const projectRoot = __dirname
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, "../..")

const config = getDefaultConfig(projectRoot)

// 2025-03-13 comment watch-resolve configurations for using pnpm
//   https://github.com/byCedric/expo-monorepo-example
// // 1. Watch all files within the monorepo
// config.watchFolders = [workspaceRoot]
// // 2. Let Metro know where to resolve packages, and in what order
// config.resolver.nodeModulesPaths = [
//   path.resolve(projectRoot, "node_modules"),
//   path.resolve(workspaceRoot, "node_modules"),
// ]

// 2025-03-13 Use turborepo to restore the cache when possible
config.cacheStores = [
  new FileStore({
    root: path.join(__dirname, "node_modules", ".cache", "metro"),
  }),
]

module.exports = config
