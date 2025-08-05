# SEO 优化指南

本文档详细说明了博客项目的 SEO 优化措施和使用方法。

## 🎯 优化概览

### 已完成的 SEO 优化

1. **基础 SEO 配置**

   - ✅ 完善的 meta 标签配置
   - ✅ 动态 sitemap 生成
   - ✅ robots.txt 优化
   - ✅ PWA manifest 配置

2. **结构化数据(JSON-LD)**

   - ✅ 网站信息结构化数据
   - ✅ 博客文章结构化数据
   - ✅ 个人信息结构化数据
   - ✅ 面包屑导航结构化数据

3. **Open Graph & Twitter Cards**

   - ✅ 完整的 Open Graph 配置
   - ✅ Twitter 卡片优化
   - ✅ 动态图片和描述

4. **技术 SEO**
   - ✅ Canonical URL 设置
   - ✅ 响应式设计优化
   - ✅ 页面加载性能优化

## 🔧 使用方法

### 1. 基础配置

在开始使用前，请更新以下配置文件：

```typescript
// src/config/seo.ts
export const SEO_CONFIG = {
  SITE_URL: "https://your-actual-domain.com", // 更新为您的实际域名
  SOCIAL_LINKS: {
    twitter: "@your-twitter-handle",
    github: "https://github.com/higherzhouhui",
    linkedin: "https://linkedin.com/in/your-profile",
  },
  VERIFICATION_CODES: {
    google: "your-google-verification-code",
    bing: "your-bing-verification-code",
    // ...其他搜索引擎验证码
  },
};
```

### 2. 页面 SEO 配置

#### 静态页面

```typescript
// src/app/about/page.tsx
import { generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "关于我",
  description: "详细的个人介绍和技能展示",
  keywords: ["个人简介", "技能", "经验"],
  url: "/about",
});
```

#### 动态页面

```typescript
// src/app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  return generateSEOMetadata({
    title: post.title,
    description: post.abstract,
    keywords: post.tags,
    image: post.coverImage,
    url: `/blog/${params.slug}`,
    type: "article",
    publishedTime: post.createdAt,
    modifiedTime: post.updatedAt,
  });
}
```

### 3. 结构化数据使用

```typescript
// 在页面组件中使用
import SEO from "@/components/SEO";

export default function ArticlePage({ data }) {
  return (
    <>
      <SEO type="article" data={data} />
      {/* 页面内容 */}
    </>
  );
}
```

### 4. SEO 工具函数

```typescript
import {
  extractKeywords,
  generateDescription,
  validateSEOMetadata,
} from "@/utils/seo";

// 从内容中提取关键词
const keywords = extractKeywords(content, 10);

// 生成描述
const description = generateDescription(content, 160);

// 验证SEO配置
const issues = validateSEOMetadata(metadata);
if (issues.length > 0) {
  console.warn("SEO问题:", issues);
}
```

## 📊 SEO 检查清单

### 页面级别

- [ ] 每个页面都有唯一的 title 标签
- [ ] 描述字符数在 160 字符以内
- [ ] 关键词与页面内容相关
- [ ] 设置了 canonical URL
- [ ] 配置了 Open Graph 图片

### 技术级别

- [ ] sitemap.xml 可访问
- [ ] robots.txt 配置正确
- [ ] 图片都有 alt 属性
- [ ] 页面加载速度优化
- [ ] 移动端友好

### 内容级别

- [ ] 标题包含目标关键词
- [ ] 内容原创且有价值
- [ ] 内部链接结构合理
- [ ] 图片优化且压缩

## 🛠 维护和监控

### 1. Google Search Console

- 提交 sitemap
- 监控索引状态
- 检查移动端可用性
- 分析搜索性能

### 2. 性能监控

- Core Web Vitals
- 页面加载速度
- 移动端体验

### 3. 定期检查

- 检查死链接
- 更新 sitemap
- 验证结构化数据
- 监控关键词排名

## 📈 最佳实践

### 1. 内容优化

- 撰写高质量、原创的内容
- 合理使用标题层级(H1-H6)
- 内容长度适中(建议 800 字以上)
- 定期更新内容

### 2. 技术优化

- 确保网站快速加载
- 实现响应式设计
- 使用 HTTPS
- 优化图片大小和格式

### 3. 用户体验

- 清晰的导航结构
- 良好的内部链接
- 易于阅读的排版
- 快速的页面响应

## 🔍 常见问题

### Q: 如何检查结构化数据是否正确？

A: 使用 Google 的[结构化数据测试工具](https://search.google.com/test/rich-results)

### Q: sitemap 多久更新一次？

A: 当前配置为动态生成，每次访问都会获取最新数据

### Q: 如何优化图片 SEO？

A: 确保图片有描述性的文件名和 alt 属性，并使用合适的格式和大小

### Q: 页面加载速度如何优化？

A: 使用 Next.js 的图片优化、代码分割、懒加载等功能

## 📞 技术支持

如有 SEO 相关问题，请参考：

- [Next.js SEO 文档](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google SEO 指南](https://developers.google.com/search/docs)
- 项目相关问题请提交 Issue

---

_最后更新时间：2024 年 1 月_
