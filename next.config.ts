/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVGs
    contentSecurityPolicy: "default-src 'self'; img-src * data: https:;",
  },
};

module.exports = nextConfig;
