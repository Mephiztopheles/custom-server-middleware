/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  //swcMinify: true, <- included in my project, but shows error here...
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000"
      }
    ]
  },
  redirects() {
    return [
      {
        source: "/redirect-2",
        permanent: false,
        destination: "https://github.com"
      }
    ]
  }
};

export default nextConfig;
