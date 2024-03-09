/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "digital-hippo-nine.vercel.app",
      },
      {
        protocol: "https",
        hostname: "https://digital-hippo-nine.vercel.app",
      },
    ],
  },
}

module.exports = nextConfig
