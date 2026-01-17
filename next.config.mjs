/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agroveli.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
