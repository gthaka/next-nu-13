/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  env: {
    SUPA_URL: process.env.SUPA_URL,
    SUPA_PWD: process.env.SUPA_PWD,
    SUPA_KEY: process.env.SUPA_KEY,
  }
}

module.exports = nextConfig
