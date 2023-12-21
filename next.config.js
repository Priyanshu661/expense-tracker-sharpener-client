/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: "http://3.233.122.106:5000/api",
  },
};

module.exports = nextConfig
