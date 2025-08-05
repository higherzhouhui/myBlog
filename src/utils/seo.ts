import { Metadata } from 'next'

const baseUrl = 'https://blog.jizaoji.top/' // 请替换为您的实际域名

interface SEOProps {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
    url?: string
    type?: 'website' | 'article' | 'profile'
    publishedTime?: string
    modifiedTime?: string
    authors?: string[]
    section?: string
    tags?: string[]
}

export function generateSEOMetadata({
    title = '风中追风的博客',
    description = '一个专注于技术分享与个人成长的博客',
    keywords = ['技术博客', '前端开发', '全栈开发'],
    image = '/static/images/avatar.png',
    url = baseUrl,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors = ['风中追风'],
    section = '技术分享',
    tags = ['技术博客']
}: SEOProps): Metadata {
    const fullTitle = title.includes('风中追风的博客') ? title : `${title} | 风中追风的博客`

    const metadata: Metadata = {
        title: fullTitle,
        description,
        keywords,
        authors: authors.map(author => ({ name: author, url: baseUrl })),
        creator: '风中追风',
        publisher: '风中追风的博客',
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            type,
            locale: 'zh_CN',
            url,
            title: fullTitle,
            description,
            images: [
                {
                    url: image.startsWith('http') ? image : `${baseUrl}${image}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            siteName: '风中追风的博客',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image.startsWith('http') ? image : `${baseUrl}${image}`],
            creator: '@higherzhouhui', // 请替换为您的实际Twitter用户名
        },
        category: 'technology',
    }

    // 如果是文章类型，添加文章特定的元数据
    if (type === 'article' && metadata.openGraph) {
        const ogArticle = metadata.openGraph as any
        ogArticle.publishedTime = publishedTime
        ogArticle.modifiedTime = modifiedTime
        ogArticle.authors = authors
        ogArticle.section = section
        ogArticle.tags = tags
    }

    return metadata
}

export function generatePageTitle(title: string, includeBaseName = true): string {
    if (!includeBaseName || title.includes('风中追风的博客')) {
        return title
    }
    return `${title} | 风中追风的博客`
}

export function generateCanonicalUrl(path: string): string {
    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function generateImageUrl(imagePath: string): string {
    if (imagePath.startsWith('http')) {
        return imagePath
    }
    return `${baseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`
}

export function extractKeywords(content: string, maxKeywords = 10): string[] {
    // 简单的关键词提取（实际项目中可以使用更复杂的算法）
    const commonWords = new Set([
        '的', '了', '在', '是', '我', '有', '和', '就', '不', '人',
        '都', '一', '一个', '上', '也', '很', '到', '说', '要', '去',
        '你', '会', '着', '没有', '看', '好', '自己', '这', '那', '可以'
    ])

    const words = content
        .replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 1 && !commonWords.has(word))
        .filter(word => /[\u4e00-\u9fa5]/.test(word) || /[a-zA-Z]/.test(word))

    const wordCount = new Map<string, number>()
    words.forEach(word => {
        wordCount.set(word, (wordCount.get(word) || 0) + 1)
    })

    return Array.from(wordCount.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxKeywords)
        .map(([word]) => word)
}

export function generateDescription(content: string, maxLength = 160): string {
    // 移除HTML标签和多余空白
    const cleanContent = content
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()

    if (cleanContent.length <= maxLength) {
        return cleanContent
    }

    // 在单词边界截断
    const truncated = cleanContent.substring(0, maxLength)
    const lastSpaceIndex = truncated.lastIndexOf(' ')

    if (lastSpaceIndex > maxLength * 0.8) {
        return truncated.substring(0, lastSpaceIndex) + '...'
    }

    return truncated + '...'
}

export function validateSEOMetadata(metadata: Metadata): string[] {
    const issues: string[] = []

    if (!metadata.title) {
        issues.push('缺少标题')
    } else if (typeof metadata.title === 'string' && metadata.title.length > 60) {
        issues.push('标题过长（建议60字符以内）')
    }

    if (!metadata.description) {
        issues.push('缺少描述')
    } else if (metadata.description.length > 160) {
        issues.push('描述过长（建议160字符以内）')
    }

    if (!metadata.keywords) {
        issues.push('缺少关键词')
    }

    const ogImages = metadata.openGraph?.images
    if (!ogImages || (Array.isArray(ogImages) && ogImages.length === 0)) {
        issues.push('缺少Open Graph图片')
    }

    return issues
} 