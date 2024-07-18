const { withExpo } = require("@expo/next-adapter")

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = withExpo({
  reactStrictMode: true,
  transpilePackages: ["react-native", "expo"],
})

module.exports = nextConfig
