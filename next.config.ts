const { securityHeaders } = require("./src/utils/securityHeaders");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you need to set environment variables from .env:
  env: {
    // Example placeholder for Google Maps API key
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
