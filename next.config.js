/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AXIOS_BASEURL: process.env.AXIOS_BASEURL,
  },
  // 将依赖打包到 standalone 目录下，有效减少 docker 镜像体积
  output: 'standalone',
}

module.exports = nextConfig
