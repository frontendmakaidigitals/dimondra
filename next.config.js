/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "example.com",
      "cdn.example.org",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ], // Add allowed image domains here
  },
  async headers() {
    return [
      {
        source: "/videos/:path*", // Example pattern for video paths
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
