// src/utils/securityHeaders.ts
export const securityHeaders = [
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    },
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
    {
      key: "Permissions-Policy",
      value: "geolocation=()",
    },
    {
      key: "Content-Security-Policy",
      value: `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://maps.googleapis.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self';
        frame-src 'self' https://www.google.com;
      `.replace(/\s{2,}/g, " ").trim(),
    },
  ];
  