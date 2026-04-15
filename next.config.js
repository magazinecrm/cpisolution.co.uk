/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // This makes it a static site
  trailingSlash: true,     // Optional: makes URLs cleaner
  images: {
    unoptimized: true      // Important because you're using static export
  }
};

export default nextConfig;