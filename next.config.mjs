/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'
// const repository = '/'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/` : '', // production 일때 prefix 경로
  trailingSlash: true, // 빌드시 폴더 구조 그대로 생성하도록
  output: 'export',
}

export default nextConfig
