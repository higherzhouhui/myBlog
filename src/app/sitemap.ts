import { MetadataRoute } from 'next'
import { APIURL } from '@/service/config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skill`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tool`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seekJob`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // 动态博客页面
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const blogResponse = await fetch(`${APIURL}/mydata.json`, { cache: 'no-store' })
    if (blogResponse.ok) {
      const blogData = await blogResponse.json()
      blogPages = blogData.map((item: { id: string, title: string, updatedAt?: string }) => ({
        url: `${baseUrl}/blogDetail/${item.id}/${encodeURIComponent(item.title)}`,
        lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    }
  } catch (error) {
    console.error('Failed to fetch blog data for sitemap:', error)
  }

  // 动态技能页面
  let skillPages: MetadataRoute.Sitemap = []
  try {
    const skillResponse = await fetch(`${APIURL}/skilldata.json`, { cache: 'no-store' })
    if (skillResponse.ok) {
      const skillData = await skillResponse.json()
      skillPages = skillData.map((item: { id: string, title: string, updatedAt?: string }) => ({
        url: `${baseUrl}/skillDetail/${item.id}/${encodeURIComponent(item.title)}`,
        lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Failed to fetch skill data for sitemap:', error)
  }

  return [...staticPages, ...blogPages, ...skillPages]
}