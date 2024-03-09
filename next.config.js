/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "digital-hippo-htj9-psi.vercel.app",
      },
      {
        protocol: "https",
        hostname: "digital-hippo-htj9-psi.vercel.app",
      },
    ],
  },
}

module.exports = nextConfig
