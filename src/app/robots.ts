import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/manage/', '/api/', '/blogEdit/', '/skillEdit/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/manage/', '/api/', '/blogEdit/', '/skillEdit/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/manage/', '/api/', '/blogEdit/', '/skillEdit/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}