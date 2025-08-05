import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '风中追风的博客 - 技术分享与个人成长',
    short_name: '风中追风博客',
    description: '一个专注于技术分享与个人成长的博客，涵盖前端开发、后端架构、云计算、AI技术等内容。作者是一名全栈开发者，擅长React、Node.js、Python、AWS等技术栈。',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1120',
    theme_color: '#1976d2',
    orientation: 'portrait-primary',
    categories: ['technology', 'blog', 'education', 'development'],
    lang: 'zh-CN',
    scope: '/',
    icons: [
      {
        src: '/icons/64x64.png',
        sizes: '64x64',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/64x64.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/64x64.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}