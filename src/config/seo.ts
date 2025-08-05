// SEO配置文件
export const SEO_CONFIG = {
    // 网站基本信息
    SITE_NAME: '风中追风的博客',
    SITE_DESCRIPTION: '一个专注于技术分享与个人成长的博客，涵盖前端开发、后端架构、云计算、AI技术等内容',
    SITE_URL: 'https://blog.jizaoji.top/', // 请替换为您的实际域名
    AUTHOR_NAME: '风中追风',
    AUTHOR_JOB_TITLE: '全栈开发者',

    // 社交媒体链接
    SOCIAL_LINKS: {
        twitter: '@higherzhouhui', // 请替换为您的实际Twitter用户名
        github: 'https://github.com/higherzhouhui', // 请替换为您的GitHub链接
        linkedin: 'https://linkedin.com/in/wind', // 请替换为您的LinkedIn链接
    },

    // 默认图片
    DEFAULT_IMAGES: {
        avatar: '/static/images/avatar.png',
        logo: '/static/images/logo.png',
        cover: '/static/images/home.png',
        skill: '/static/images/skill.png',
    },

    // 搜索引擎验证码（请替换为实际的验证码）
    VERIFICATION_CODES: {
        google: 'your-google-verification-code',
        bing: 'your-bing-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },

    // 默认关键词
    DEFAULT_KEYWORDS: [
        '技术博客', '前端开发', '后端开发', '全栈开发',
        'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript',
        'Vue.js', 'Next.js', 'AWS', '云计算', '人工智能',
        '编程教程', '个人成长', 'Web开发'
    ],

    // 页面类型配置
    PAGE_TYPES: {
        HOME: 'website',
        BLOG: 'blog',
        ARTICLE: 'article',
        ABOUT: 'profile',
        SKILL: 'profile',
    } as const,

    // robots.txt 禁止访问的路径
    DISALLOWED_PATHS: [
        '/manage/',
        '/api/',
        '/blogEdit/',
        '/skillEdit/',
        '/_next/',
        '/admin/',
    ],

    // sitemap 配置
    SITEMAP_CONFIG: {
        changeFrequency: {
            home: 'daily',
            blog: 'daily',
            skill: 'weekly',
            about: 'monthly',
            work: 'monthly',
            contact: 'yearly',
        },
        priority: {
            home: 1.0,
            blog: 0.9,
            skill: 0.8,
            about: 0.8,
            work: 0.7,
            contact: 0.5,
            articles: 0.8,
            skills: 0.7,
        },
    } as const,

    // Open Graph 默认配置
    OPEN_GRAPH: {
        locale: 'zh_CN',
        type: 'website',
        image: {
            width: 1200,
            height: 630,
        },
    },

    // Twitter 卡片配置
    TWITTER: {
        card: 'summary_large_image',
    },

    // JSON-LD 结构化数据配置
    STRUCTURED_DATA: {
        organization: {
            '@type': 'Organization',
            name: '风中追风的博客',
            logo: '/static/images/logo.png',
        },
        person: {
            '@type': 'Person',
            name: '风中追风',
            jobTitle: '全栈开发者',
            description: '8年工作经验，科班出身，精通前端三要素，从事web前端相关工作经验丰富',
            knowsAbout: [
                'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js',
                'Python', 'AWS', '云计算', '前端开发', '后端开发', '全栈开发'
            ],
        },
    },
}

// SEO 文本长度限制
export const SEO_LIMITS = {
    TITLE_MAX_LENGTH: 60,
    DESCRIPTION_MAX_LENGTH: 160,
    KEYWORDS_MAX_COUNT: 10,
    URL_MAX_LENGTH: 2048,
}

// 常用的结构化数据模板
export const STRUCTURED_DATA_TEMPLATES = {
    website: (data: any) => ({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name || SEO_CONFIG.SITE_NAME,
        description: data.description || SEO_CONFIG.SITE_DESCRIPTION,
        url: SEO_CONFIG.SITE_URL,
        author: SEO_CONFIG.STRUCTURED_DATA.person,
        publisher: SEO_CONFIG.STRUCTURED_DATA.organization,
    }),

    article: (data: any) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.abstract || data.description,
        image: data.coverImage || SEO_CONFIG.DEFAULT_IMAGES.cover,
        url: `${SEO_CONFIG.SITE_URL}/blogDetail/${data.id}/${encodeURIComponent(data.title)}`,
        datePublished: data.createdAt,
        dateModified: data.updatedAt,
        author: SEO_CONFIG.STRUCTURED_DATA.person,
        publisher: SEO_CONFIG.STRUCTURED_DATA.organization,
    }),

    breadcrumb: (items: Array<{ name: string, url: string }>) => ({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }),
} 