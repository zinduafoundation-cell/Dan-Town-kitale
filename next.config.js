/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "192.168.112.1",
  ],
  async redirects() {
    return [
      { source: "/faqs", destination: "/insights", permanent: true },
      { source: "/videos", destination: "/insights", permanent: true },
      { source: "/distributor", destination: "/about", permanent: true },
      { source: "/plumbing", destination: "/services", permanent: true },
      { source: "/team/:path*", destination: "/about", permanent: true },
    ]
  },
};

export default nextConfig;
