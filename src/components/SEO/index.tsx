'use client'

import { useEffect } from 'react'

interface SEOProps {
  type: 'website' | 'blog' | 'article' | 'person' | 'skill'
  data: any
}

const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

export default function SEO({ type, data }: SEOProps) {
  useEffect(() => {
    // 清除之前的结构化数据
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    let structuredData: any = {}

    switch (type) {
      case 'website':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: '风中追风的博客',
          description: '一个专注于技术分享与个人成长的博客，涵盖前端开发、后端架构、云计算、AI技术等内容',
          url: baseUrl,
          author: {
            '@type': 'Person',
            name: '风中追风',
            url: baseUrl,
            jobTitle: '全栈开发者',
            knowsAbout: ['前端开发', '后端开发', 'React', 'Node.js', 'Python', 'AWS', '云计算']
          },
          publisher: {
            '@type': 'Organization',
            name: '风中追风的博客',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/static/images/logo.png`
            }
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
        break

      case 'blog':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: '风中追风的博客',
          description: '技术分享与个人成长的专业博客',
          url: `${baseUrl}/blog`,
          author: {
            '@type': 'Person',
            name: '风中追风',
            url: baseUrl
          },
          publisher: {
            '@type': 'Organization',
            name: '风中追风的博客',
            url: baseUrl
          },
          blogPost: data.posts?.map((post: any) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.abstract,
            url: `${baseUrl}/blogDetail/${post.id}/${encodeURIComponent(post.title)}`,
            datePublished: post.createdAt,
            dateModified: post.updatedAt,
            author: {
              '@type': 'Person',
              name: '风中追风'
            }
          }))
        }
        break

      case 'article':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.title,
          description: data.abstract,
          image: data.coverImage || `${baseUrl}/static/images/avatar.png`,
          url: `${baseUrl}/blogDetail/${data.id}/${encodeURIComponent(data.title)}`,
          datePublished: data.createdAt,
          dateModified: data.updatedAt,
          author: {
            '@type': 'Person',
            name: '风中追风',
            url: baseUrl,
            jobTitle: '全栈开发者'
          },
          publisher: {
            '@type': 'Organization',
            name: '风中追风的博客',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/static/images/logo.png`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blogDetail/${data.id}/${encodeURIComponent(data.title)}`
          },
          keywords: data.tags || ['技术博客', '前端开发'],
          articleSection: data.category || '技术分享',
          wordCount: data.content?.length || 0
        }
        break

      case 'person':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: '风中追风',
          jobTitle: '全栈开发者',
          description: '8年工作经验，科班出身，精通前端三要素，从事web前端相关工作经验丰富',
          url: `${baseUrl}/about`,
          image: `${baseUrl}/static/images/avatar.png`,
          sameAs: [
            // 请添加您的社交媒体链接
            'https://github.com/higherzhouhui',
            'https://linkedin.com/in/your-profile',
            'https://twitter.com/higherzhouhui'
          ],
          knowsAbout: [
            'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 
            'Python', 'AWS', '云计算', '前端开发', '后端开发', '全栈开发'
          ],
          alumniOf: data.education || [],
          worksFor: {
            '@type': 'Organization',
            name: data.company || '自由职业者'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: '工作联系',
            url: `${baseUrl}/contact`
          }
        }
        break

      case 'skill':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: data.title,
          description: data.abstract,
          url: `${baseUrl}/skillDetail/${data.id}/${encodeURIComponent(data.title)}`,
          image: data.coverImage || `${baseUrl}/static/images/skill.png`,
          author: {
            '@type': 'Person',
            name: '风中追风',
            url: baseUrl
          },
          dateCreated: data.createdAt,
          dateModified: data.updatedAt,
          keywords: data.subTitle?.split(',') || ['技能展示'],
          about: data.category || '技术技能'
        }
        break
    }

    // 插入结构化数据脚本
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // 组件卸载时清理
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [type, data])

  return null
} 