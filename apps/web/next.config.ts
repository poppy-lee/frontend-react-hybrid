import { withExpo } from "@expo/next-adapter"
import { NextConfig } from "next"

const nextConfig: NextConfig = withExpo({
  reactStrictMode: true,
  transpilePackages: ["react-native", "react-native-web", "expo"],
  experimental: {
    reactCompiler: true,
    forceSwcTransforms: true,
  },
} as NextConfig)

export default nextConfig
