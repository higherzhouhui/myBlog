'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
}

const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

export default function BreadcrumbSchema() {
  const pathname = usePathname()

  useEffect(() => {
    // 清除之前的面包屑结构化数据
    const existingScript = document.querySelector('script[data-type="breadcrumb-ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbItems: BreadcrumbItem[] = [
      { name: '首页', url: baseUrl }
    ]

    // 根据路径生成面包屑
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      let name = segment

      // 根据路径段设置中文名称
      switch (segment) {
        case 'blog':
          name = '博客'
          break
        case 'skill':
          name = '技能'
          break
        case 'about':
          name = '关于我'
          break
        case 'work':
          name = '作品'
          break
        case 'photo':
          name = '相册'
          break
        case 'contact':
          name = '联系我'
          break
        case 'profile':
          name = '个人资料'
          break
        case 'tool':
          name = '工具'
          break
        case 'seekJob':
          name = '求职'
          break
        case 'blogDetail':
          name = '博客详情'
          break
        case 'skillDetail':
          name = '技能详情'
          break
        default:
          // 对于动态路由参数，尝试解码
          try {
            name = decodeURIComponent(segment)
          } catch {
            name = segment
          }
      }

      breadcrumbItems.push({
        name,
        url: `${baseUrl}${currentPath}`
      })
    })

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }

    // 插入面包屑结构化数据脚本
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-type', 'breadcrumb-ld+json')
    script.textContent = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-type="breadcrumb-ld+json"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [pathname])

  return null
} 