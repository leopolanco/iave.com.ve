/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // This enables static HTML export
  distDir: 'dist',    // This sets the output directory to 'dist' (optional)
}

export default nextConfig