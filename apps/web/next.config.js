const { withExpo } = require("@expo/next-adapter")

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = withExpo({
  reactStrictMode: true,
  transpilePackages: ["react-native", "expo"],
  experimental: {
    reactCompiler: true,
  },
})

module.exports = nextConfig
