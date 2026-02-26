/** @type {import('next').NextConfig} */
const repoName = 'My-Portfolio';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

module.exports = nextConfig;
